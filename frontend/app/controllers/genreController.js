getGenre();

function getGenre(){
    apiGetGenre()
    .then((response)=>{
        console.log(response.data);
        alert("Request success");
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

function dom(params){
    return document.querySelector(params);
}

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