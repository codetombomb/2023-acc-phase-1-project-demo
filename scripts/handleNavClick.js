const handleNavClick = ({ target }) => {
    const category = target.innerHTML.toLowerCase();
    if (botwData[category].length === 0) {
      fetch(`https://botw-compendium.herokuapp.com/api/v2/category/${category}`)
        .then((response) => response.json())
        .then(({ data }) => {
          botwData[category] = [...Object.values(data).flat()];
          renderCards(Object.values(data).flat())
        });
      }
      renderCards(botwData[category])
    };
  