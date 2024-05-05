var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-icon.png")
        myImage.setAttribute("src", "images/pig.jpg");
    else
        myImage.setAttribute("src", "images/firefox-icon.png");
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("Please enter your name.");
    if(!myName || myName == "")
        setUserName();
    else{
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Hi, " + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    let storeName = localStorage.getItem("name");
    localStorage.setItem("name", storeName);
    myHeading.innerHTML = "Hi, " + storeName;
}

myButton.onclick = function(){
    setUserName();   
}