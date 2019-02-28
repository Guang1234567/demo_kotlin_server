package sample

import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty

actual class Sample {
    actual fun checkMe() = 77
}

actual object Platform {
    actual val name: String = "JVM"
}

fun main() {
    embeddedServer(Netty, port = 8080, host = "127.0.0.1") {
        module()
    }.start(wait = true)
}