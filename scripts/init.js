document.addEventListener("DOMContentLoaded", () => {
  Object.keys(botwData).forEach(key => {
    fetchData(key).then(({data}) => saveData(flatten(data), key)).then(data => renderCards(flatten(botwData)))
  })
})