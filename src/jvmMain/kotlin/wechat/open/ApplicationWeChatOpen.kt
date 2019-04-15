package wechat.open

import freemarker.cache.ClassTemplateLoader
import io.ktor.application.Application
import io.ktor.application.install
import io.ktor.auth.Authentication
import io.ktor.features.CORS
import io.ktor.features.ContentNegotiation
import io.ktor.features.PartialContent
import io.ktor.features.StatusPages
import io.ktor.freemarker.FreeMarker
import io.ktor.gson.gson
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.routing.routing
import io.ktor.sessions.Sessions
import org.kodein.di.Kodein
import org.kodein.di.direct
import org.kodein.di.generic.instance
import wechat.open.controller.*
import wechat.open.di.AppScopeKodein
import wechat.open.model.services.DbService
import wechat.open.utils.registerRedirections

fun Application.module() {
    di(AppScopeKodein())
}

fun Application.di(injector: Kodein) {

    injector.direct.instance<DbService>().connect()

    install(FreeMarker) {
        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "templates")
    }

    install(PartialContent) {
    }

    install(Authentication) {
        load(LoginCfg)
    }

    install(Sessions) {
        load(LoginCfg)
    }

    install(CORS) {
        method(HttpMethod.Options)
        method(HttpMethod.Get)
        method(HttpMethod.Post)
        method(HttpMethod.Put)
        method(HttpMethod.Delete)
        method(HttpMethod.Patch)
        header(HttpHeaders.Authorization)
        allowCredentials = true
        anyHost()
    }

    install(ContentNegotiation) {
        gson {
            setPrettyPrinting()

            /*disableHtmlEscaping()
            disableInnerClassSerialization()
            enableComplexMapKeySerialization()

            serializeNulls()

            serializeSpecialFloatingPointValues()
            excludeFieldsWithoutExposeAnnotation()

            setDateFormat(...)

            generateNonExecutableJson()

            setFieldNamingPolicy()
            setLenient()
            setLongSerializationPolicy(...)
            setExclusionStrategies(...)
            setVersion(0.0)
            addDeserializationExclusionStrategy(...)
            addSerializationExclusionStrategy(...)
            excludeFieldsWithModifiers(Modifier.TRANSIENT)

            registerTypeAdapter(...)
            registerTypeAdapterFactory(...)
            registerTypeHierarchyAdapter(..., ...)*/
        }
    }

    install(StatusPages) {
        registerRedirections()
        load(LoginCfg)
    }

    routing {
        load(StaticResCfg, this@di)
        load(HomeCfg)
        loginModule(LoginCfg)
        cfgSnippet(injector.direct.instance())
    }
}