export function getUsers() {
    let storage = JSON.parse(localStorage.getItem("users"));
    if(!storage) {
        storage = [];
    }
    return storage
}

export function updateUsers(newObj) {
    localStorage.setItem("users", JSON.stringify(newObj));
}

export function checkAuth(login) {
    console.log(login);
    const users = getUsers();
    users.map((user, index) => 
        user.email === login.email && user.pass === login.pass ?
            localStorage.setItem("loggin", JSON.stringify(index)): 
            console.log('logout'))
}



export function createUser(user) {
    // var data = {email: "Ivan", pass: "123"}
    // checkAuth(data);
    let 
    { name, email, pass } = user, 
    storage = getUsers(),  
    data = { name: name, email: email, pass: pass, fav: [] },
    newObj = storage.concat([data]);
    updateUsers(newObj)
}

