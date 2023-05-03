console.log("Running");

const botwData = {
  creatures: [],
  equipment: [],
  materials: [],
  monsters: [],
  treasure: [],
};

const handleNavClick = ({ target }) => {
  const category = target.innerHTML.toLowerCase();
  if (botwData[category].length === 0) {
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/${category}`)
      .then((response) => response.json())
      .then(({ data }) => {
        botwData[category] = [...Object.values(data).flat()];
        console.log(botwData);
      });
  }
};

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => link.addEventListener("click", handleNavClick));
