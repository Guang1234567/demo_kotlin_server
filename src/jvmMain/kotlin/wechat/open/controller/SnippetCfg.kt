package wechat.open.controller

import io.ktor.application.call
import io.ktor.auth.UserIdPrincipal
import io.ktor.auth.authenticate
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import wechat.open.model.services.SnippetService
import wechat.open.model.services.SnippetService.Snippet

data class PostSnippet(val snippet: PostSnippet.Text) {
    data class Text(val text: String)
}

fun Route.cfgSnippet(snippetSrv: SnippetService) {
    route("/snippets") {
        authenticate("jwt") {
            get {
                call.respond(mapOf("snippets" to snippetSrv.getSnippets()))
            }

            post {
                val post = call.receive<PostSnippet>()
                val principal = call.getPrincipalOrThrow<UserIdPrincipal>("No principal")
                snippetSrv.insertSnippet(Snippet(principal.name, post.snippet.text))
                call.respond(mapOf("OK" to true))
            }
        }
    }
}