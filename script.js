let darkMode = false;
let secretMode = false;
let clickCount = 0;

function changeDarkMode(){
    if(darkMode){
        // light mode
        darkMode = false;
        document.documentElement.style.setProperty("--text-color", "#202124");
        document.documentElement.style.setProperty("--background-color", "#efe7e5");
        document.getElementById("dark_light_mode").innerHTML = "Dark mode";
    }else{
        // dark mode
        darkMode = true;
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "#202124");
        document.getElementById("dark_light_mode").innerHTML = "Light mode";
    }
}

function bonus(){
    clickCount += 1;
    console.log(clickCount);

    if(clickCount == 3){

        if(secretMode){
            console.log("See ya !");

            secretMode = false;
            document.documentElement.style.setProperty("--text-color", "#202124");
            document.documentElement.style.setProperty("--background-color", "#efe7e5");
            document.getElementById("dark_light_mode").innerHTML = "Light mode";
        }else{
            console.log("Well done you discovered the funky mode");

            secretMode = true;
            document.documentElement.style.setProperty("--text-color", "orange");
            document.documentElement.style.setProperty("--background-color", "#202124");
            document.getElementById("dark_light_mode").innerHTML = "Secret mode";
        }

        clickCount = 0;
    }
}