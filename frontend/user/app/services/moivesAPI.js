function apiGetMovie() {
    return axios({
        url: "http://localhost:3000/movies/movies-list",
        method: "GET",
        // Những giá trị được định nghĩa trong object params sẽ được thêm vào url: ?key = value
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

function apiGetMovieById(id){
    return axios({
        url: `http://localhost:3000/movies/get-movies?id=${id}`,
        method: "GET",
    });
}

function apiUpdateMovie(id, movie) {
    return axios({
        url: `http://localhost:3000/movies/update-movie?id=${id}`,
        method: "PUT",
        data: movie,
    });
}