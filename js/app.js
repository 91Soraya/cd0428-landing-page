/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navMenu = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const createNavListItem = document.createElement("li");
const createNavAnchor = document.createElement("a");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i=0; i < sections.length; i++) {
    const createNavListItem = document.createElement("li");
    const createNavAnchor = document.createElement("a");
    createNavAnchor.innerHTML = sections[i].getAttribute("data-nav");
    createNavAnchor.href = "#" + sections[i].getAttribute("id");
    createNavAnchor.classList = "navLink";
    createNavAnchor.id = "linkToSection" + [i+1];
    createNavListItem.appendChild(createNavAnchor);
    navList.appendChild(createNavListItem);
}

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", function () {
    sections.forEach(function (section) {
        if(section.getBoundingClientRect().y <= 0 && section.getBoundingClientRect().bottom >0) {
            section.classList.add("your-active-class");
            // console.log("active class added");
        } else {
            section.classList.remove("your-active-class");
            // console.log("active class removed");
        }
        });
});

document.addEventListener("scroll", function () {
    const listA = document.querySelectorAll("li a");
    for (let i=0; i < sections.length; i++) {
if(sections[i].classList.contains("your-active-class")) {
    listA[i].classList.add("active");
} else {
    listA[i].classList.remove("active");
}}})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active