const searchbar=document.querySelector(".container");
const profilecontainer = document.querySelector(".profile-container");
const root = document.documentElement.style;
const get = (param) => document.getElementById(`${param}`);
const url= "https://api.github.com/users/";
const noresults= get("no-results");
const btnmode=get("btn-mode");
const modetext=get("mode-text");
const modeicon=get("mode-icon");
const btnsubmit=get("submit");
const input= get("input");
const avatar= get("avatar");
const userName = get("name");
const user= get("user");
const date=get("date");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const bio= get("bio");
const repos=get("repos");
const following = get("following");
const followers = get("followers");
const user_location= get("location");
const page = get("page");
const twitter= get("twitter");
const company= get("company");
let darkMode=false;


// Event listeners
btnsubmit.addEventListener("click", function() {
    // if input value is non empty
    if (input.value !== "") {
        getUserData(url+input.value);
    }
})

// dark and light mode 
btnmode.addEventListener ("click", function() {
    if (darkMode=false) {
        darkModeProperties();    // this will make Darkmode ON as it is false in If condition
    } else {
        lightModeProperties();
    }
})

// adding functionality for When user enters Enter key it will search for the userName
input.addEventListener(
    "keydown",
    function(e) {
        if (e.key == "Enter") {
            if (input.value !== "") {
                getUserData(url+input.value);
            }
        }
    }
)


input.addEventListener("input", function() {
    noresults.style.display = "none";
});



