
export function getMovieList(movie) {
    return fetch(`http://www.omdbapi.com/?apikey=925eba28&s={movie}`)
        .then(data => data.json());
}

