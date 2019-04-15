package wechat.open.di

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import org.kodein.di.Kodein
import org.kodein.di.conf.ConfigurableKodein
import org.kodein.di.generic.bind
import org.kodein.di.generic.instance
import org.kodein.di.generic.singleton
import wechat.open.model.services.DbService
import wechat.open.model.services.SnippetDao
import wechat.open.model.services.SnippetService
import javax.sql.DataSource

fun AppScopeKodein(): Kodein {
    val kodein = ConfigurableKodein() /*Kodein.global*/

    kodein.addConfig {
        bind<DataSource>() with singleton {
            val config = HikariConfig()
            config.driverClassName = "org.h2.Driver"
            config.jdbcUrl = "jdbc:h2:mem:test"
            config.maximumPoolSize = 3
            config.isAutoCommit = false
            config.transactionIsolation = "TRANSACTION_REPEATABLE_READ"
            config.validate()
            HikariDataSource(config)
        }
        bind<SnippetDao>() with singleton { SnippetDao() }
        bind<SnippetService>() with singleton { SnippetService(instance<SnippetDao>()) }
        bind<DbService>() with singleton { DbService(instance<DataSource>(), instance<SnippetDao>()) }
    }

    return kodein
}