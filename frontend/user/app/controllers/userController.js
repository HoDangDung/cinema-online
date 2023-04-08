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
        </tr>
        `;
    }, "");
    dom("#tblDanhSachUser").innerHTML = output;
}