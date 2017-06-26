
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
    const users = getUsers();
    return users.map(function(user, index) {
        if(user.email === login.email && user.pass === login.pass) {
            localStorage.setItem("loggin", JSON.stringify(index));
            location.reload();
        } else {
            console.log('Error Login')
        }})          
}

export function loggout() {
   localStorage.removeItem('loggin');
   location.reload();
}


export function createUser(user) {
    let 
    { name, email, pass } = user, 
    storage = getUsers(),  
    data = { name: name, email: email, pass: pass, fav: [] },
    newObj = storage.concat([data]);
    updateUsers(newObj)
    checkAuth(user)
}

