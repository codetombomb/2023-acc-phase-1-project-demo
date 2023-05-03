const renderCards = (cardDataArray) => {
    const cardWrapper = idElement("card-wrapper")
    if(cardDataArray.length === 0){
        cardWrapper.innerText = 'No items found'
        return
    }
    cardWrapper.innerText = ''
    cardDataArray.forEach(card => {
        const img = document.createElement("img")
        img.src = card.image
        cardWrapper.appendChild(img)
        img.addEventListener("click", () => console.log(card))
    })
}