package wechat.open.model.services

class SnippetService(val snippetDao: SnippetDao) {

    suspend fun insertSnippet(snippet: Snippet) = snippetDao.insertSnippet {
        userName = snippet.userName
        text = snippet.text
    }

    suspend fun getSnippets(): List<Snippet> = snippetDao.getSnippets().mapNotNull { Snippet(it.userName, it.text) }

    data class Snippet(val userName: String, val text: String)
}