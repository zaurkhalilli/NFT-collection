const Button = document.getElementById("buttons");  
Button &&
    Button.addEventListener("click",(event) =>{
    console.log("ok");
}

)

const DARK_MODE = document.querySelector(".bi bi-moon")
const NORMAL_MODE = document.querySelector(".bi bi-moon")

DARK_MODE.addEventListener("click",(event) =>{
    console.log("ok");
    document.querySelector("body").style.backgroundColor = "rgb(5, 6, 37)";
    NORMAL_MODE.style.display = "block";
    NORMAL_MODE.style.color = "white"
}

)

NORMAL_MODE.addEventListener("click",() => {
    console.log("ok");
    document.querySelector("body").style.backgroundColor = "white"
    NORMAL_MODE.style.display = "none";
    NORMAL_MODE.style.color ="white";
})