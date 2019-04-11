package wechat.open.controller

import io.ktor.application.Application
import io.ktor.http.content.files
import io.ktor.http.content.static
import io.ktor.routing.Routing
import java.io.File

object StaticResCfg

fun Routing.load(cfg: StaticResCfg, app: Application) {
    val currentDir = File("").absoluteFile
    app.environment.log.info("Current directory: $currentDir")

    val webDir = kotlin.collections.listOf(
        "web",
        "../src/jsMain/web",
        "src/jsMain/web"
    ).map {
        File(currentDir, it)
    }.firstOrNull { it.isDirectory }?.absoluteFile ?: kotlin.error("Can't find 'web' folder for this sample")

    app.environment.log.info("Web directory: $webDir")

    static("/static") {
        files(webDir)
    }
}

