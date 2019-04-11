package wechat.open.controller

import io.ktor.application.call
import io.ktor.response.respondText
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.sessions.sessions

object HomeCfg

fun Routing.load(cfg: HomeCfg) {
    get("/") {
        //call.respond(FreeMarkerContent("index.ftl", mapOf("data" to IndexData(listOf(1, 2, 3))), ""))

        val session = call.sessions.getOrThrow<MySession>()
        session.username.also {
            call.respondText("User is logged!!")
        }
    }
}

