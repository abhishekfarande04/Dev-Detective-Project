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
    },
    false
);

// if value changes for input , then noresults text display will be none
input.addEventListener("input", function() {
    noresults.style.display = "none";
});

btnmode.addEventListener("click",function() {
    if(darkMode==false) {
        darkModeProperties();
    } else {
        lightModeProperties();
    }
});


// function Call 
function getUserData(gitUrl) {
    // alternative to async and await 
    fetch(gitUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        updateProfile(data);
     })

    .catch((error) => {
        throw error;
     });

}

//Render 
function updateProfile(data) {

}


//SWITCH TO DARK MODE - activateDarkMode()
function darkModeProperties() {
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    modetext.innerText = "LIGHT";
    modeicon.src = "./assets/images/sun-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(1000%)");
    darkMode = true;
    console.log("darkmode changed to " + darkMode);
    localStorage.setItem("dark-mode", true);  console.log("setting dark mode to false");
  
    console.log("setting dark mode to true");
  
  }
  
  //SWITCH TO LIGHT MODE - activateLightMode()
  function lightModeProperties() {
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    modetext.innerText = "DARK";
    modeicon.src = "./assets/images/moon-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(100%)");
    darkMode = false;
    console.log("darkmode changed to " + darkMode);
  
    localStorage.setItem("dark-mode", false);
    console.log("setting dark mode to false");
  }
