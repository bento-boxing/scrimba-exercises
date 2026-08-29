import articlesArray from './articlesArray.js'
import { renderPage, renderMoreArticles } from './renderIndex.js'

const postArray = articlesArray.filter(article => article.type === 'post')

renderPage(postArray)

let nextIndexToAdd = postArray.length - 5

document.getElementById('view-more').addEventListener('click', event => {
    event.preventDefault()
    let startIndex = nextIndexToAdd - 3
    if( startIndex <= 0 ) {
        startIndex = 0
        document.getElementById('view-more').style.display = 'none'
    }

    renderMoreArticles(postArray.slice(startIndex, nextIndexToAdd + 1).reverse())
})