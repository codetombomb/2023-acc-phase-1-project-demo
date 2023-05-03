const filterCardsBySearch = (searchTerm) => {
    const allCards = Object.values(botwData).flat()
    const filteredCards = allCards.filter(card => {
        return !!Object.values(card).flat().find(str => {
            if(str){
                return str.toString().toLowerCase().includes(searchTerm)
            } else {
                return false
            }
        })
    })
    renderCards(filteredCards)
}