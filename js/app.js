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
const navSections = document.querySelectorAll("section");

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
for (let i=0; i < navSections.length; i++) {
    const createNavListItem = document.createElement("li");
    const createNavAnchor = document.createElement("a");
    createNavAnchor.innerHTML = navSections[i].getAttribute("data-nav");
    createNavAnchor.href = "#" + navSections[i].getAttribute("id");
    createNavListItem.appendChild(createNavAnchor);
    navList.appendChild(createNavListItem);
}

// Add class 'active' to section when near top of viewport
const activeSection = navSections[0].getBoundingClientRect();
window.addEventListener("scroll", function () {
    // console.log(window.innerHeight);
    // console.log(sectionOne.getBoundingClientRect().top);
    if (activeSection.getBoundingClientRect().top < window.innerHeight) {
        section.classList.add("your-active-class");
    } else {
        section.classList.remove("your-active-class");
    }
});
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


