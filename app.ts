/**Type Alias */

type User = {
    name:string,
    age:number
}

const user1:User ={
    name:"Avishek",
    age:22
}

function loginUser(userData:User){
    return userData
}

console.log(loginUser(user1))