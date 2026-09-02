import { getMovieHtml } from "./index.js";

const watchlistMoviesContainer = document.getElementById('movie-results')

function renderWatchlist() {
    const watchlistMoviesArray = JSON.parse(localStorage.getItem('watchlist'))

    if (watchlistMoviesArray) {
        watchlistMoviesContainer.innerHTML = watchlistMoviesArray.map(getMovieHtml).join(`<hr class="movie-results__break">`)
    }
}

renderWatchlist()