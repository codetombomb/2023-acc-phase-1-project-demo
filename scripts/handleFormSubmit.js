const handleFormSubmit = (event) => {
    event.preventDefault()
    filterCardsBySearch(event.target["search-bar"].value.toLowerCase())
}