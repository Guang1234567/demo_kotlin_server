package wechat.open.model.services

import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.IntIdTable
import org.jetbrains.exposed.sql.SchemaUtils
import wechat.open.model.services.DbService.Companion.dbTransaction

object SnippetsTb : IntIdTable() {
    val userName = varchar("user_name", 50).index()
    val text = varchar("text", Int.MAX_VALUE)
}

class SnippetEntry(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<SnippetEntry>(SnippetsTb)

    var userName by SnippetsTb.userName

    var text by SnippetsTb.text
}

class SnippetDao {
    fun createTable() {

        SchemaUtils.create(SnippetsTb)

        SnippetEntry.new {
            userName = "test001"
            text = "snippet_001"
        }

        SnippetEntry.new {
            userName = "test002"
            text = "snippet_002"
        }
    }

    suspend fun getSnippets(): List<SnippetEntry> = dbTransaction { SnippetEntry.all().toList() }

    suspend fun insertSnippet(init: SnippetEntry.() -> Unit): SnippetEntry = dbTransaction { SnippetEntry.new(init) }
}