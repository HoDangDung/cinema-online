getMovies();

// request API get all movies
function getMovies() {
    apiGetMovie()
        .then((response) => {
            console.log(response.data);
            if (response.data) {
                let movies = response.data.map(movie => {
                    return new Movie(movie._id, movie.name, movie.poster, movie.link, movie.desc)
                });

                // Hiển thị danh sách phim ra giao diện
                console.log(movies);
                display(movies);
            } else {
                alert("Dữ liệu rỗng !!!!");
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

// Request api to add movie
function addMovie(movie) {
    apiAddMovie(movie)
        .then(async () => {
            await getMovies();
            alert("Thêm thành công!!!!");
        })
        .catch((error) => {
            console.log(error);
            alert("Thêm không thành công!!!!");
        });
}

// Request api to delete one movie
function deleteMovie(id) {
    apiDeleteMovie(id)
        .then(() => {
            getMovies();
            alert("Xóa thành công!!!!");
        })
        .catch((error) => {
            console.log(error);
            alert("Xóa không thành công!!!!");
        });
}

// Request api to update one movie
function updateMovie(id, movie) {
    apiUpdateMovie(id, movie)
        .then(() => {
            getMovies();
            alert("Cập nhật thành công!!!!");
        })
        .catch((error) => {
            console.log(error);
            alert("Cập nhật không thành công!!!!");
        });
}

//==============================================

function dom(params) {
    return document.querySelector(params);
}

// reset form input to null
const restForm = () => {
    dom('#name').value = '';
    dom('#img').value = '';
    dom('#link').value = '';
    dom('#desc').value = '';
}

// Render data to UI
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
            <td>
                <div class="an">
                    ${movie.desc}</td>
                </div>
            <td>
                <a href="https://youtu.be/${movie.link}" target="_blank">
                ${movie.link}
                </a>
            </td>
            <td>
                <button 
                    class="btn btn-danger" 
                    data-type = "delete" 
                    data-id = "${movie.id}"
                    >
                    Xóa
                </button>
            </td>
            <td>
                <button class="btn btn-primary" 
                        data-type = "edit" 
                        data-toggle="modal"
                        data-target="#myModal"
                        data-id = "${movie.id}">
                    Edit
                </button>
            </td>
        </tr>
        `
    }, "");
    dom('#tblDanhSachPhim').innerHTML = output;
}

// ============= Model Form =================

// Event lister change model heading when click
dom('#btnThemPhim').addEventListener("click", () => {
    dom(".modal-title").innerHTML = "Add New Movie";
    dom(".modal-title").style = "color:red; font-weight:bold";
    dom('.modal-footer').innerHTML = `
        <button class="btn btn-danger" data-dismiss="modal">Close</button>
        <button class="btn btn-primary" data-type = "add">Add Movie</button>
    `
    restForm();
});

// Event lister change model footer when click
dom(".modal-footer").addEventListener("click", (evt) => {

    let elementType = evt.target.getAttribute("data-type");

    // DOM all form input to get data from user
    let name = dom('#name').value,
        img = dom('#img').value,
        link = dom('#link').value,
        desc = dom('#desc').value;

    let movie = new Movie(null, name, img, link, desc);

    if (elementType == "add") {
        addMovie(movie);
    }

    if (elementType == "update") {
        updateMovie(id, movie);
    }
})
// ============= End Model Form =================


// =========== Tbody #tblDanhSachPhim ==========

dom("#tblDanhSachPhim").addEventListener("click", (evt) => {

    console.log(evt.target);

    let id = evt.target.getAttribute("data-id");
    let elementType = evt.target.getAttribute("data-type");

    if (elementType == "delete") {
        deleteMovie(id);
    }

    if (elementType == "edit") {
        // Change the content of heading and footer when click button "edit"
        dom(".modal-title").innerHTML = "Update Movie";
        dom(".modal-title").style = "color:red; font-weight:bold";
        dom('.modal-footer').innerHTML = `
            <button class="btn btn-danger" data-dismiss="modal">Close</button>
            <button class="btn btn-primary" data-type = "update">Update Movie</button>
        `

        apiGetMovieById(id)
            .then((response) => {
                let movie = response.data;

                // Fill information of the movie want update to form input
                dom("#id").value = movie.id; // hidden input
                dom('#name').value = movie.name;
                dom('#img').value = movie.img;
                dom('#link').value = movie.link;
                dom('#desc').value = movie.desc;
            })
            .catch((error) => {
                console.log(error);
            })
    }
})

// =========== End Tbody #tblDanhSachPhim ==========