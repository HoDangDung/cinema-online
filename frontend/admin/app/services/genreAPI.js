function apiGetGenre() {
    return axios({
        url: "http://localhost:3000/genre/genre-list",
        method: "get"
    })
}

function apiAddGenre(genre) {
    return axios({
        url: "http://localhost:3000/genre/insert-genre",
        method: "post",
        data: genre,
    })
}

function apiGetGenreById(id) {
    return axios({
        url: `http://localhost:3000/genre/get-genre?id=${id}`,
        method: "get"
    })
}

function apiDeleteGenre(id) {
    return axios({
        url: `http://localhost:3000/genre/delete-genre?id=${id}`,
        method: "delete"
    })
}

function apiUpdateGenre(id, genre) {
    return axios({
        url: `http://localhost:3000/genre/update-genre/${id}`,
        method: "put",
        data: genre,
    })
}