const posts = [{
    id: 0,
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    caption: "just took a few mushrooms lol",
    comments: [],
    likes: 21
}, {
    id: 1,
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    caption: "i'm feelin a bit stressed tbh",
    comments: [{
        author: "jd1735", body: "meow meow meow meow meow",
    }],
    likes: 4
}, {
    id: 2,
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    caption: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    comments: [{
        author: "jd1735", body: "Lorem ipsum dolor",
    }, {
        author: "jd1735", body: "Lorem ipsum dolor",
    }],
    likes: 152
}]


function renderPosts(posts) {
    const postsContainer = document.getElementById('posts')
    let resultHTML = ""

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        let postHTML = `<section class="post" data-id="${post.id}">
                <div class="post-header">
                    <img class="avatar post-avatar" src="${post.avatar}" alt="${post.name}'s avatar">

                    <div class="post-info">
                        <p class="bold post-author">${post.name}</p>
                        <p class="post-location">${post.location}</p>
                    </div>
                </div>

                <img class="post-image" src="${post.post}" alt="${post.name}'s post">

                <section class="post-footer">
                    <div class="reactions">
                        <img class="heart" src="images/icon-heart.png" alt="Heart">
                        <img class="comment" src="images/icon-comment.png" alt="Comment">
                        <img class="dm" src="images/icon-dm.png" alt="DM">
                    </div>

                    <div class="bold likes">${post.likes} likes</div>

                    <div class="caption">
                        <p class="bold caption-author">${post.username}</p>
                        <p class="caption-body">${post.caption}</p>
                    </div>
                    
                    <div class="comments">
                        ${post.comments.length > 0 ? post.comments.map(comment => `
                        <div class="comment">
                            <p class="bold comment-author">${comment.author}</p>
                            <p class="comment-body">${comment.body}</p>
                        </div>`).join('\n') : ""}
                    </div>
                </section>
            </section>
`
        resultHTML += postHTML
    }

    postsContainer.innerHTML = resultHTML
}

renderPosts(posts)

const postImages = document.getElementsByClassName("post-image")
for (let i = 0; i < postImages.length; i++) {
    const postImage = postImages[i]
    postImage.addEventListener("dblclick", function(event) {
        const idRequired = parseInt(event.target.parentElement.dataset.id)

        const postToIncrement = posts.find(function(post) {
            return post.id === idRequired;
        })

        postToIncrement.likes++;

        const newLikes = postToIncrement.likes

        renderLikes(idRequired, newLikes);
    })
}

function renderLikes(id, newLikes) {
    document.querySelector(`.post[data-id="${id}"] .likes`).textContent = newLikes + " likes"
}

