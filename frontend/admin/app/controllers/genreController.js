getGenre();

// ========== Connect to API =============
function getGenre(){
    apiGetGenre()
    .then((response)=>{
        console.log(response.data);
        if (response.data) {
            let genres = response.data.map((genre)=>{
                return new Genre(genre._id,genre.name);
            });
            console.log(genres);
            display(genres);
        }
    })
    .catch((error)=>{
        console.log(error);
        alert("Không lấy được danh sách thể loại");
    });
}

// Request api to add genre
function addGenre(genre) {
    apiAddGenre(genre)
        .then(async () => {
            getGenre();
            alert("Thêm thành công!!!!");
        })
        .catch((error) => {
            console.log(error);
            alert("Thêm không thành công!!!!");
        });
}

// Request api to delete one genre
function deleteGenre(id) {
    apiDeleteGenre(id)
        .then(() => {
            getGenre();
            alert("Xóa thành công!!!!");
        })
        .catch((error) => {
            console.log(error);
            alert("Xóa không thành công!!!!");
        });
}

// Request api to update one genre
function updateGenre(id, genre) {
    apiUpdateGenre(id, genre)
        .then(() => {
            getGenre();
            alert("Cập nhật thành công!!!!");
        })
        .catch((error) => {
            console.log(error);
            alert("Cập nhật không thành công!!!!");
        });
}

// ========== End Connect to API =============

// ========== Utils function ===========
function dom(params){
    return document.querySelector(params);
}

// reset form input to null
const restForm = () => {
    dom("#id").value = '';
    dom('#name').value = '';
}
// ========== End Utils function ===========

// ========== Interact with the interface ===========

// Render data to UI when response is successful
function display(genres){
    let output = genres.reduce((result, genre, index)=>{
        return result + `
        <tr>
            <td>${index +1}</td>
            <td>${genre.name}</td>
            <td>${genre.id}</td>
            <td>
                <button 
                    class="btn btn-danger" 
                    data-type = "delete" 
                    data-id = "${genre.id}"
                    >
                    Xóa
                </button>
            </td>
            <td>
                <button class="btn btn-primary" 
                        data-type = "edit" 
                        data-toggle="modal"
                        data-target="#myModal"
                        data-id = "${genre.id}">
                    Edit
                </button>
            </td>

        </tr>
        `
    },"");
    dom("#tblDanhSachGenre").innerHTML = output;
}
// =========================================

// ============= Model Form =================

// Event lister change model heading when click
dom("#btnThemGenre").addEventListener("click",()=>{
    dom(".modal-title").innerHTML = "Add New Genre";
    dom(".modal-title").style = "color:red; font-weight:bold";
    dom('.modal-footer').innerHTML = `
        <button class="btn btn-danger" data-dismiss="modal">Close</button>
        <button class="btn btn-primary" data-type = "add">Add Genre</button>
    `
    restForm();
})

// Event lister change model footer when click
dom(".modal-footer").addEventListener("click", (evt) => {
    let dismiss = evt.target.getAttribute("data-dismiss");
    let elementType = evt.target.getAttribute("data-type");

    // DOM all form input to get data from user
    let id = dom("#id").value,
        name = dom('#name').value;

    let genre = new Genre(null, name);

    if (elementType == "add") {
        addGenre(genre);
        restForm();
    }

    if (elementType == "update") {
        updateGenre(id, genre);
        restForm();
    }

    // When click button close in modal-footer, all form input will resetForm()
    if (dismiss == "modal") {
        restForm();
    }
})
// ============= End Model Form =================

// =========== Tbody #tblDanhSachPhim ==========

dom("#tblDanhSachGenre").addEventListener("click", (evt) => {
    let id = evt.target.getAttribute("data-id");
    let elementType = evt.target.getAttribute("data-type");

    if (elementType == "delete") {
        deleteGenre(id);
    }

    if (elementType == "edit") {
        // Change the content of heading and footer when click button "edit"
        dom(".modal-title").innerHTML = "Update Genre";
        dom(".modal-title").style = "color:red; font-weight:bold";
        dom('.modal-footer').innerHTML = `
            <button class="btn btn-danger" data-dismiss="modal">Close</button>
            <button class="btn btn-primary" data-type = "update">Update Genre</button>
        `
        apiGetGenreById(id)
            .then((response) => {
                let genre = response.data;

                // Fill information of the genre want update to form input
                dom("#id").value = genre._id; // disable input
                dom('#name').value = genre.name;
            })
            .catch((error) => {
                console.log(error);
            })
    }
})

// When click outside modal, all form input will resetForm()
dom("#myModal").addEventListener("click", (evt)=>{
    let modal = evt.target.getAttribute("id");

    if (modal =="myModal") {
        restForm();
    }
})

// =========== End Tbody #tblDanhSachGenre ==========

dom("#search").addEventListener("keydown", (evt) => {
    console.log(evt.key);
    if (evt.key !== "Enter") {
        return;
    }
    getGenre(evt.target.value);
})


// ========== End Interact with the interface ===========
