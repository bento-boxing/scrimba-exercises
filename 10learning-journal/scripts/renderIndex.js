export { renderPage }

function renderPage(articlesArray) {
    renderArticles(articlesArray)
    renderCopyrightYear(document.getElementById('copyright-year'))
}

function renderArticles(articlesArray) {
    // Assuming that the latest article should be the hero article, and articles are pushed to the end
    // of the articles array when added.
    let heroArticleHtml = getHeroArticleHtml(articlesArray[articlesArray.length - 1])
    let articlesHtml = ""
    // To get articles from newest to oldest.
    for (let i = articlesArray.length - 2; i >= 0; i--) {
        articlesHtml += getArticleHtml(articlesArray[i])
    }

    document.getElementById("hero-article-container").innerHTML = heroArticleHtml
    document.getElementById("non-hero-articles-container").innerHTML = articlesHtml
}

function getHeroArticleHtml(article) {
    const title = article.title
    const date = new Date(article.date)
    const coverImage = article.coverImage
    const caption = article.caption
    const url = article.url

    return `<article class="hero article">
                <a class="article-container" href="${url}">
                    <img class="hero-article-image" src="${coverImage.url}" alt="${coverImage.alt}">
                    <div class="article-text-container">
                        <p class="small upper">${date.toDateString().substring(4)}</p>
                        <h2 class="article-title">${title}</h2>
                        <p class="article-caption">${caption}</p>
                    </div> 
                </a>
            </article>`
}

function getArticleHtml(article) {
    return ""
}

function renderCopyrightYear(span) {
    span.textContent = String(new Date().getFullYear())
}