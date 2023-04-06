// lấy danh sách phim
function apiGetMovie() {
    return axios({
        // url: "http://localhost:3000/genre/genre-list",
        url:"https://jsonplaceholder.typicode.com/todos",
        method: "GET",
    })
}