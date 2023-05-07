const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => link.addEventListener("click", handleNavClick));

const searchForm = idElement("search-bar-form")
searchForm.addEventListener("submit", handleFormSubmit)

// The modal was saving the list item's so this is my solution to resetting the modal's Common Locations list. Try commenting the following code to see the problem.
const modalClose = idElement("modal-close")
modalClose.addEventListener("click", handleClearModal)

// Hover effect added to image in the renderCards.js file

