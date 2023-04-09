getUser();

function getUser() {
    apiGetUser()
        .then((response) => {
            console.log(response.data);

            if (response.data) {
                let users = response.data.map(user => {
                    return new User(user._id, user.account, user.pass, user.email, user.name, user.phone, user.birthday);
                });
                console.log(users);
                display(users);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteUser(id) {
    apiDeleteUser(id)
        .then(() => {
            alert("Xóa thành công!!!");
            getUser();
        })
        .catch((error) => {
            console.log(error);
            alert("Xóa không thành công!!!");
        })
}

function dom(params) {
    return document.querySelector(params);
}

function display(users) {
    let output = users.reduce((result, user, index) => {
        return result + `
        <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.pass}</td>
            <td>${user.phone}</td>
            <td>${user.birthday}</td>
            <td>
                <button 
                    class="btn btn-danger" 
                    data-type = "delete" 
                    data-id = "${user.id}"
                    >
                    Xóa
                </button>
            </td>
        </tr>
        `;
    }, "");
    dom("#tblDanhSachUser").innerHTML = output;
}

dom("#tblDanhSachUser").addEventListener("click", (evt) => {
    let id = evt.target.getAttribute("data-id");
    let elementType = evt.target.getAttribute("data-type");

    if (elementType == "delete") {
        deleteUser(id);
    }
})

dom("#search").addEventListener("keydown", (evt) => {
    console.log(evt.key);
    if (evt.key !== "Enter") {
        return;
    }
    getUser(evt.target.value);
})
