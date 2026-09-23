function getUsers() {
     let users = localStorage.getItem("users")
    if(users === null){
        users = []
    }else{
        users = JSON.parse(users)
    }
    return users;
}

function signUp(){
    let name = document.getElementById("s-name");
    let email = document.getElementById("s-email");
    let password = document.getElementById("s-pass");
    let users = getUsers();
    


    let user = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
}


function login() {
    let email = document.getElementById("l-email");
    let password = document.getElementById("l-pass");
    let users = getUsers();
    let saveUser = {};
    for(let i =0; i < users.length; i++){
       // console.log(users[i]);
        if (email.value === users[i].email) {
            saveUser = users[i];
            break
        }
    }
    if (saveUser.email) {
        if (saveUser.password === password.value) {
            console.log("user Login")
        }else{
            console.log("password is inccorect")
        }
    }else{
        console.log("user not found")
    }
}