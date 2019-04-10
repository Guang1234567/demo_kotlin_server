package sample

import freemarker.cache.ClassTemplateLoader
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.auth.*
import io.ktor.sessions.*
import io.ktor.features.PartialContent
import io.ktor.freemarker.FreeMarker
import io.ktor.freemarker.FreeMarkerContent
import io.ktor.http.content.files
import io.ktor.http.content.static
import io.ktor.request.receiveParameters
import io.ktor.response.*
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import io.ktor.routing.routing
import sample.model.IndexData
import sample.model.MySession
import java.io.File


fun Application.module() {
    val currentDir = File("").absoluteFile
    environment.log.info("Current directory: $currentDir")

    val webDir = kotlin.collections.listOf(
        "web",
        "../src/jsMain/web",
        "src/jsMain/web"
    ).map {
        File(currentDir, it)
    }.firstOrNull { it.isDirectory }?.absoluteFile ?: kotlin.error("Can't find 'web' folder for this sample")

    environment.log.info("Web directory: $webDir")

    install(FreeMarker) {
        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "templates")
    }

    install(PartialContent) {
    }

    install(Authentication) {
        form("login") {
            userParamName = "username"
            passwordParamName = "password"
            challenge = FormAuthChallenge.Unauthorized
            validate { credentials ->
                if (credentials.name == credentials.password)
                    UserIdPrincipal(credentials.name)
                else
                    null
            }
        }
    }

    install(Sessions) {
        cookie<MySession>("SESSION")
    }

    routing {
        static("/static") {
            files(webDir)
        }

        get("/") {
            //call.respond(FreeMarkerContent("index.ftl", mapOf("data" to IndexData(listOf(1, 2, 3))), ""))

            val session = call.sessions.get<MySession>()
            session?.username?.also {
                call.respondText("User is logged")
            } ?: call.respondRedirect("/login", permanent = false)
            //call.respond(FreeMarkerContent("index.ftl", mapOf("data" to IndexData(listOf(1, 2, 3))), ""))
        }

        route("/login") {
            get {
                call.respond(FreeMarkerContent("login.ftl", null))
            }

            authenticate("login") {
                post {
                    val principal = call.principal<UserIdPrincipal>()
                    principal?.also {
                        call.sessions.set(MySession(principal.name))
                        call.respondRedirect("/", permanent = false)
                    } ?: call.respond(FreeMarkerContent("login.ftl", mapOf("error" to "Invalid login")))
                }
            }
        }
    }
}