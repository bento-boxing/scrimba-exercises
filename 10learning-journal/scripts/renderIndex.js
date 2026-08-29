export { renderPage, renderMoreArticles }

function renderPage(articlesArray) {
    renderDefaultArticles(articlesArray, 3)
    renderCopyrightYear(document.getElementById('copyright-year'))
}

function renderDefaultArticles(articlesArray, numberOfArticles) {
    const heroContainer = document.getElementById("hero-article-container")
    const nonHeroContainer = document.getElementById("non-hero-articles-container")
    let renderedArticles = 0

    // Assuming that the latest article should be the hero article, and articles are pushed to the end
    // of the articles array when added.
    if (heroContainer) {
        heroContainer.innerHTML = getHeroArticleHtml(articlesArray[articlesArray.length - 1])
        renderedArticles ++
    }

    if (nonHeroContainer) {
        let articlesHtml = ""
        // To get articles from newest to oldest.
        for (let i = articlesArray.length - 1 - renderedArticles; i >= articlesArray.length - 1 - numberOfArticles; i--) {
            articlesHtml += getArticleHtml(articlesArray[i])
        }

        nonHeroContainer.innerHTML = articlesHtml
    }
}

function renderMoreArticles(moreArticlesArray) {
    let articlesHtml = ""
    for(let article of moreArticlesArray) {
        articlesHtml += getArticleHtml(article)
    }

    document.getElementById("non-hero-articles-container").innerHTML += articlesHtml
}

function getHeroArticleHtml(article) {
    const { title, date: articleDate, coverImage, caption, url } = article
    const date = new Date(articleDate)

    return `<article class="hero article">
                <a class="article-container" href="${url}">
                    <img class="hero-article-image" src="${coverImage.url}" alt="${coverImage.alt}">
                    <div class="article-text-container">
                        <p class="small upper white">${date.toDateString().substring(4)}</p>
                        <h2 class="article-title white xlarge">${title}</h2>
                        <p class="article-caption white">${caption}</p>
                    </div> 
                </a>
            </article>`
}

function getArticleHtml(article) {
    const { title, date: articleDate, coverImage, caption, url } = article
    const date = new Date(articleDate)

    return `<article class="article">
                <a class="article-container" href="${url}">
                    <img class="article-image" src="${coverImage.url}" alt="${coverImage.alt}">
                    <div class="article-text-container">
                        <p class="small upper">${date.toDateString().substring(4)}</p>
                        <h2 class="article-title large">${title}</h2>
                        <p class="article-caption">${caption}</p>
                    </div> 
                </a>
            </article>`
}

function renderCopyrightYear(span) {
    span.textContent = String(new Date().getFullYear())
}