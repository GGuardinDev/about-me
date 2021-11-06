class NavBar{

    constructor(parentLink, navLink, isView){

        this.parentLink = document.getElementById("h1-zone");
        this.navLink = document.getElementById("nav");
        this.isView = "false";

    }

    showNav(){

        if (this.isView == "false"){

            //this.parentLink.style = "position: fixed;";
            this.navLink.style = "transition: ease-out; transition-property: transform position top display height; transition-duration: 0.35s; transform: translateX(-105vw);"
            this.isView = "true";
            console.log("Showing!!");

        } else {

            //this.parentLink.style = "position: sticky; top: 0px;";
            this.navLink.style = "transition: ease-in; transition-property: transform; transition-duration: 0.35s; transform: translateX(105vw);"
            this.isView = "false";
            console.log("Hidding!!");

        }

    }

    hideNav(){

        nav.navLink.style = "transition: ease-in; transition-property: transform; transition-duration: 0.35s; transform: translateX(105vw)"

    }

}

//const navi = getElementById("nav");

const nav = new NavBar();

const viewport = window.innerWidth;

if (viewport <= 425){

    window.addEventListener("scroll", () => {

        nav.hideNav();

    })

    document.getElementById("ni").addEventListener("click", () => {

        nav.showNav();

    })

    document.getElementById("about-link").addEventListener("click", () => {

        nav.showNav();

    })

    document.getElementById("knowledge-link").addEventListener("click", () => {

        nav.showNav();

    })

    document.getElementById("projects-link").addEventListener("click", () => {

        nav.showNav();

    })

    document.getElementById("contact-link").addEventListener("click", () => {

        nav.showNav();

    })

}

console.log("1.0.2")
