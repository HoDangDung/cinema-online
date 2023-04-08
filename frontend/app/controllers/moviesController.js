getMovies();

function getMovies() {
    apiGetMovie()
        .then((response) => {
            console.log(response.data);
            if (response.data) {
                let movies = response.data.map(movie => {
                    return new Movie(movie.name, movie.poster, movie.link, movie.desc)
                });

                // Hiển thị danh sách phim ra giao diện
                console.log(movies);
                display(movies);
            } else {
                alert("Dữ liệu rỗng!!!!");
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

function dom(params) {
    return document.querySelector(params);
}

// Show dữ liệu lên giao diện
function display(movies) {
    let output = movies.reduce((result, movie, index) => {
        return result + `
        <tr>
        <td>${index + 1}</td>
        <td>${movie.name}</td>
        <td></td>
        <td>
            <img src=${movie.poster} width="50px" height="50px" />
        </td>
        <td>${movie.desc}</td>
        <td>
        <a href="https://youtu.be/${movie.link}" target="_blank">
        ${movie.link}
        </a>
       </td>
        </tr>
        `
    }, "");
    dom('#tblDanhSachSP').innerHTML = output;
}