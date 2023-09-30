
// SUBMIT HOMEPAGE
const inputUsername = document.querySelector("#inputUsername");
const inputPassword = document.querySelector("#inputPassword");
const submitForm = document.querySelector("#submit");
const username = "jennifermark";
const password = "jen&mark25";

submitForm.addEventListener("click", (e)=>{
    if(inputUsername.value != username && inputPassword.value != password) {
        console.log("wrong password");
        e.preventDefault();
    } 
})

// BUTTON ACTIONS ON DASHBOARD
const withdraw = document.querySelector(".withdraw-btc");
const buy = document.querySelector(".buy-btc");
const trade = document.querySelector(".trade-btc");

withdraw.addEventListener("click", ()=> {
    console.log("hello");
})

