package wechat.open.controller

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import io.ktor.application.ApplicationCall
import io.ktor.application.call
import io.ktor.auth.*
import io.ktor.auth.jwt.jwt
import io.ktor.features.StatusPages
import io.ktor.freemarker.FreeMarkerContent
import io.ktor.http.HttpStatusCode
import io.ktor.response.respond
import io.ktor.response.respondRedirect
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import io.ktor.sessions.*
import kotlin.reflect.KClass

data class MySession(val username: String, val token: String)

class SimpleJWT(secret: String) {
    private val algorithm = Algorithm.HMAC256(secret)
    val verifier = JWT.require(algorithm).build()
    fun sign(name: String): String = JWT.create().withClaim("name", name).sign(algorithm)
}

/**
 * Exception used to be captured by [StatusPages] (or catched) to notify that the session couldn't be found,
 * so the application can do things like redirect. It stores the session that couldn't be retrieved to be able
 * to have different behaviours.
 */
class SessionNotFoundException(val clazz: KClass<*>) : Exception()

/**
 * Convenience method to try to get a exception of type [T], or to throw a [SessionNotFoundException] to
 * handle it either by catching or by using the [StatusPages] feature.
 */
inline fun <reified T> CurrentSession.getOrThrow(): T =
    this.get<T>() ?: throw SessionNotFoundException(T::class)

/**
 * Extension method for configuring [StatusPages] that encapsulates the functionality of catching
 * the [SessionNotFoundException] to redirect to the [path] page in the case of the session [T].
 */
private inline fun <reified T> StatusPages.Configuration.registerSessionNotFoundRedirect(path: String) {
    exception<SessionNotFoundException> { cause ->
        if (cause.clazz == T::class) call.respondRedirect(path)
    }
}

class InvalidCredentialsException(message: String) : RuntimeException(message)

inline fun ApplicationCall.throwInvalidCredentialsException(message: String): Nothing =
    throw InvalidCredentialsException(message)

inline fun <reified T: Principal> ApplicationCall.getPrincipalOrThrow(message: String): T =
    this.principal<T>() ?: throwInvalidCredentialsException(message)

private inline fun <reified T> StatusPages.Configuration.registerInvalidCredentialsException() {
    exception<InvalidCredentialsException> { exception ->
        call.respond(HttpStatusCode.Unauthorized, mapOf("OK" to false, "error" to (exception.message ?: "")))
    }
}

object LoginCfg {}

fun StatusPages.Configuration.load(cfg: LoginCfg) {
    registerSessionNotFoundRedirect<MySession>("/login")
    registerInvalidCredentialsException<InvalidCredentialsException>()
}

val simpleJwt = SimpleJWT("my-super-secret-for-jwt")
fun Authentication.Configuration.load(cfg: LoginCfg) {
    form("login") {
        userParamName = "username"
        passwordParamName = "password"
        challenge = FormAuthChallenge.Unauthorized
        validate { credentials ->
            if (credentials.name == credentials.password)
                UserIdPrincipal(credentials.name)
            else {
                throwInvalidCredentialsException("登录失败: 账号密码不对!")
                null
            }
        }
    }

    jwt("jwt") {
        verifier(simpleJwt.verifier)
        validate {
            UserIdPrincipal(it.payload.getClaim("name").asString())
        }
    }
}


fun Sessions.Configuration.load(cfg: LoginCfg) {
    cookie<MySession>("SESSION")
}

fun Routing.loginModule(cfg: LoginCfg) {
    route("/login") {
        get {
            call.respond(FreeMarkerContent("login.ftl", null))
        }

        authenticate("login") {
            post {
                val principal: UserIdPrincipal =
                    call.principal<UserIdPrincipal>() ?: call.throwInvalidCredentialsException("No principal")
                principal.apply {
                    val token = simpleJwt.sign(name)
                    call.sessions.set(MySession(name, token))
                    call.respond(mapOf("OK" to true, "token" to token))
                }
            }
        }
    }
}

