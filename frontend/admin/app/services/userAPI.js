function apiGetUser(search){
    return axios({
        url: "http://localhost:3000/user/user-list",
        method:"GET",
        params:{
            email: search,
            name: search,
            phone: search,
        }
    })
}

function apiDeleteUser(id){
    return axios({
        url: `http://localhost:3000/user/delete-user?id=${id}`,
        method:"delete",
    })
}