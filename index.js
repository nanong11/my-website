var theme = document.querySelector(":root");
var toggler = document.getElementById("toggler");

// Light and Dark Theme
function lightTheme(){
    theme.style.setProperty("--primary", "#DEE4E7");
    theme.style.setProperty("--secondary", "#000839");
    theme.style.setProperty("--text-color", "#222222");
}
function darkTheme(){
    theme.style.setProperty("--primary", "#263238");
    theme.style.setProperty("--secondary", "#000839");
    theme.style.setProperty("--text-color", "#F7F7F7");
}
function ligthDarkToggler(){
    if (toggler.checked){
        lightTheme();
    }else {
        darkTheme();
    }
}
// Accent color
function yellow(){
    theme.style.setProperty("--accent", "#FFA41B");
}
function blue(){
    theme.style.setProperty("--accent", "#1572A1");
}
