class NavBar{

    constructor(navLink, isView){

        this.navLink = document.getElementById("nav");
        this.isView = "false";

    }

    showNav(){

        if (this.isView == "false"){

            this.navLink.style = "transition: ease-out; transition-property: transform; transition-duration: 0.85s; transform: translateX(-105vw);"
            this.isView = "true";
            console.log("Showing!!");

        } else {

            this.navLink.style = "transition: ease-in; transition-property: transform; transition-duration: 1s; transform: translateX(105vw);"
            this.isView = "false";
            console.log("Hidding!!");

        }

    }

}

//const navi = getElementById("nav");

const nav = new NavBar();

document.getElementById("ni").addEventListener("click", () => {

    nav.showNav();

})

document.getElementById("about-link").addEventListener("click", () => {

    nav.showNav();

})

console.log("snapshot06")
