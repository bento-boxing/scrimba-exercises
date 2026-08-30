import articlesArray from "./articlesArray.js"
import {renderPost} from "./renderPost.js"

const urlParams = new URLSearchParams(window.location.search)
const currentPostId = urlParams.get("id")
const articleData = articlesArray.find(article => article.id === currentPostId)

if (articleData) {
    renderPost(articleData)
} else {
    renderPost(articlesArray.find(article => article.id === 'page-not-found'))
}

