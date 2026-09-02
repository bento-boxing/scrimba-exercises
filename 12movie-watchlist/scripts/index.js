const form = document.getElementById('movie-searchbar')
const movieResults = document.getElementById('movie-results')

form.addEventListener('submit', handleFormSubmission)

async function handleFormSubmission(event) {
    event.preventDefault()
    const formData = new FormData(form)

    const response = await fetch(`http://www.omdbapi.com/?apikey=5e751dc7&s=${formData.get('search-term')}&type=movie`)
    const searchJson = await response.json()

    if (searchJson.Response === "False") {
        displayErrorText();
    }

    const detailedMoviePromises = getDetailedMoviePromises(searchJson.Search)
    const detailedMovieData = await Promise.all(detailedMoviePromises)

    const movieHtml = detailedMovieData.map(movie => getMovieHtml(movie))

    movieResults.innerHTML = movieHtml.join(`<hr class="movie-results__break">`)
}

function displayErrorText() {
    const errorText = document.createElement('p')
    errorText.classList.add('movie-results__placeholder-text')
    errorText.textContent = "Unable to find what you're looking for. Please try another search."

    movieResults.replaceChildren(errorText)
}

function getMovieHtml(movie) {
    return `<article class="movie-results__item movie">
                    <img class="movie__image" src="${movie.Poster}" alt="A poster of the movie ${movie.Title}">
                    <div class="movie__details">
                        <div class="movie__header">
                            <h2 class="movie__title">${movie.Title}</h2>
                            <p class="movie__star">⭐</p>
                            <p class="movie__rating">${movie.imdbRating}</p>
                        </div>
                        
                        <div class="movie__minor-details">
                            <p class="movie__runtime">${movie.Runtime}</p>
                            <p class="movie_tags">${movie.Genre}</p>
                            <button class="movie__watchlist watchlist">
                                <i class="fa-solid fa-circle-plus watchlist__add"></i>
                                Watchlist
                            </button>                        
                        </div>
                        <p class="movie__description">${movie.Plot}</p>
                    </div>
                </article>
                `
}

function getDetailedMoviePromises(movieArray) {
    return movieArray.map(async (movie) => {
        const detailedResponse = await fetch(`http://www.omdbapi.com/?apikey=5e751dc7&i=${movie.imdbID}`)
        return detailedResponse.json()
    });
}