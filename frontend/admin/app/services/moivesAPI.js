function apiGetMovie(search) {
    return axios({
        url: "http://localhost:3000/movies/movies-list",
        method: "GET",
        params: {
            name: search
        },
    });
}

function apiAddMovie(movie) {
    return axios({
        url: "http://localhost:3000/movies/insert-movies",
        method: "POST",
        data: movie,
    });
}

function apiDeleteMovie(id) {
    return axios({
        url: `http://localhost:3000/movies/delete-movies?id=${id}`,
        method: "DELETE",
    });
}

function apiGetMovieById(id) {
    return axios({
        url: `http://localhost:3000/movies/get-movies?id=${id}`,
        method: "GET",
    });
}

function apiUpdateMovie(id,movie) {
    return axios({
        url: `http://localhost:3000/movies/update-movies/${id}`,
        method: "PUT",
        data: movie,
    });
}