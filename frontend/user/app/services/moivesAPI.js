function apiGetMovie() {
    return axios({
        url: "http://localhost:3000/movies/movies-list",
        method: "GET",
        // Những giá trị được định nghĩa trong object params sẽ được thêm vào url: ?key = value
    });
}

function apiGetMovieById(id){
    return axios({
        url: `http://localhost:3000/movies/get-movies?id=${id}`,
        method: "GET",
    });
}
