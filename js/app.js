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

// const sectionThree = document.querySelector("#section3");

// document.addEventListener("scroll", function() {
//     const clientHeight = document.documentElement.clientHeight;
//     const sectionThreeY = sectionThree.getBoundingClientRect().y;
//     const sectionThreeBottom = sectionThree.getBoundingClientRect().bottom;

//     // console.log(clientHeight);
//     // console.log(sectionThreeY);
//     // console.log(sectionThreeBottom);

//     if(sectionThreeY <= 0 && sectionThreeBottom > 0) {
//         sectionThree.classList.add("your-active-class");
//     } else {
//         sectionThree.classList.remove("your-active-class");
//     }
// })

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
})

// function navHighlight() {
//     const navA = document.querySelectorAll("a");
//     sections.forEach(function (section) {
//         if(section.classList == "your-active-class") {
//             navA.classList.add("active");
//         } else {
//             navA.classList.remove("active");
//         }
//     })
// }

// document.addEventListener("scroll", navHighlight);


// const rect = sections.getBoundingClientRect();
// console.log(rect);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active