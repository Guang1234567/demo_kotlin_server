package wechat.open.model.services

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.transactions.transaction
import javax.sql.DataSource

class DbService(
    val dataSource: DataSource,
    val snippetDao: SnippetDao
) {

    fun connect() {
        Database.connect(dataSource)

        transaction {
            addLogger(StdOutSqlLogger)

            snippetDao.createTable()
        }
    }

    companion object {
        suspend fun <T> dbTransaction(block: () -> T): T =
            withContext(Dispatchers.IO) {
                transaction { block() }
            }
    }
}