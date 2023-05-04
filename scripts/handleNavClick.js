const handleNavClick = ({ target }) => {
  const category = target.innerHTML.toLowerCase();
  if (botwData[category].length === 0) {
    fetchData(category).then(({ data }) => {
      botwData[category] = flatten(data);
      renderCards(Object.values(data).flat());
    });
  }
  renderCards(botwData[category]);
};
