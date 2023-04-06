getMovie();

// request API lấy danh sách movie
function getMovie() {
    apiGetMovie()
        .then((response) => {
            console.log('API products:', response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}