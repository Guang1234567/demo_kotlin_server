package sample

import freemarker.cache.ClassTemplateLoader
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.auth.*
import io.ktor.features.PartialContent
import io.ktor.freemarker.FreeMarker
import io.ktor.freemarker.FreeMarkerContent
import io.ktor.http.content.files
import io.ktor.http.content.static
import io.ktor.request.receiveParameters
import io.ktor.response.respond
import io.ktor.response.respondRedirect
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.routing
import sample.model.IndexData
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

    routing {
        static("/static") {
            files(webDir)
        }

        get("/") {
            call.respond(FreeMarkerContent("index.ftl", mapOf("data" to IndexData(listOf(1, 2, 3))), ""))
        }

        get("/login") {
            call.respond(FreeMarkerContent("login.ftl", null))
        }

        authenticate("login") {
            post("/login") {
                /*val post = call.receiveParameters()
                if (post["username"] != null && post["username"] == post["password"]) {
                    call.respondRedirect("/", permanent = false) // 登陆成功回到主页
                } else {
                    call.respond(FreeMarkerContent("login.ftl", mapOf("error" to "Invalid login")))
                }*/
                val principal = call.principal<UserIdPrincipal>()
                call.respondRedirect("/", permanent = false)
            }
        }
    }
}