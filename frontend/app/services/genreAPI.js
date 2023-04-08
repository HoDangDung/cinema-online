function apiGetGenre() {
    return axios({
        url:"http://localhost:3000/genre/genre-list",
        method:"get"
    })
}