const fetchData = (category) => {
  return fetch(
    `https://botw-compendium.herokuapp.com/api/v2/category/${category}`
  )
    .then((response) => response.json())
};
