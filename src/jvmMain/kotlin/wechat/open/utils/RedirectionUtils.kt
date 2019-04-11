package wechat.open.utils

import io.ktor.application.call
import io.ktor.features.StatusPages
import io.ktor.response.respondRedirect

///////////////////////////
// Redirection Utilities
///////////////////////////

/**
 * Exception used to be captured by [StatusPages] to perform a redirect.
 */
class RedirectException(val path: String, val permanent: Boolean) : Exception()

/**
 * Global function that throws a [RedirectException], to be catched by the [StatusPages] feature to perform a redirect
 * to [path].
 */
fun redirect(path: String, permanent: Boolean = false): Nothing = throw RedirectException(path, permanent)

/**
 * Extension method for configuring [StatusPages] that encapsulates the functionality of catching
 * the [RedirectException] and actually performing a redirection.
 */
fun StatusPages.Configuration.registerRedirections() {
    exception<RedirectException> { cause ->
        call.respondRedirect(cause.path, cause.permanent)
    }
}