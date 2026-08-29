const postContainer = document.getElementById("post-container")

export function renderPost(articleData) {
    const article = document.createElement('article')
    const date = new Date(articleData.date)

    article.classList.add('post')
    let articleHtml = `<p class="small upper">${date.toDateString().substring(4)}</p>`

    for(let bodyPart of articleData.body) {
        switch(bodyPart.type) {
            case 'header':
                articleHtml += `<h2 class="xlarge">${bodyPart.text}</h2>`
                break
            case 'subtitle':
                articleHtml += `<h3 class="large">${bodyPart.text}</h3>`
                break
            case 'paragraph':
                articleHtml += `<p>${bodyPart.text}</p>`
                break
            case 'heroImage':
                articleHtml += `<img class="post-hero-image" alt="${bodyPart.alt}" src="${bodyPart.src}">`
                break
            case 'profileImage':
                articleHtml += `<img class="profile-image" alt="${bodyPart.alt}" src="${bodyPart.src}">`
                break
        }
    }

    article.innerHTML = articleHtml
    postContainer.appendChild(article)
}