const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => link.addEventListener("click", handleNavClick));

const searchForm = idElement("search-bar-form")
searchForm.addEventListener("submit", handleFormSubmit)
