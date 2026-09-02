const form = document.getElementById('movie-searchbar')
const movieResults = document.getElementById('movie-results')

form.addEventListener('submit', handleFormSubmission)

async function handleFormSubmission(event) {
    event.preventDefault()
    const formData = new FormData(form)

    const response = await fetch(`http://www.omdbapi.com/?apikey=5e751dc7&s=${formData.get('search-term')}&type=movie`)
    const searchJson = await response.json()

    if (searchJson.Response === "False") {
        const errorText = document.createElement('p')
        errorText.classList.add('movie-results__placeholder-text')
        errorText.textContent = "Unable to find what you're looking for. Please try another search."

        movieResults.replaceChildren(errorText)
        return
    }

    const detailedMoviePromises = searchJson.Search.map(async (movie) => {
        const detailedResponse = await fetch(`http://www.omdbapi.com/?apikey=5e751dc7&i=${movie.imdbID}`)
        return detailedResponse.json()
    })

    const detailedMovieData = await Promise.all(detailedMoviePromises)

    console.log(detailedMovieData)

    // let movieHtml = detailedMovieData.map(movie => {
    //     return `<article class="movie-results__item movie">
    //                 <img class="movie__image" src="${movie.Poster}" alt="A poster of the movie ${movie.Title}">
    //                 <div class="movie__details">
    //                     <h2 class="movie__title">${movie.Title}</h2>
    //
    //                 </div>
    //             </article>
    //             `
    // })
}