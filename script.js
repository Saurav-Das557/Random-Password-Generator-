const passwordBox= document.getElementById("password");

const length=16;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number= "0123456789";
const symbols=" @#$^&*()_+~|{}[]<>/-="
const allChars=upperCase+lowerCase+number+symbols

function createPassword(){
    let password="";
    password +=upperCase[Math.floor(Math.random()*upperCase.length)]
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password +=number[Math.floor(Math.random()*number.length)]
    password +=symbols[Math.floor(Math.random()*symbols.length)]

    while(length>password.length){
        password +=allChars[Math.floor(Math.random()*allChars.length)]

    }
    passwordBox.value=password;
}

function copyPassword() {
    if (passwordBox.value !== "") {
        passwordBox.select();
        navigator.clipboard.writeText(passwordBox.value)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                alert("Failed to copy the password. Try again!");
                console.error("Error copying password: ", err);
            });
    } else {
        alert("Please generate a password first!");
    }
}

