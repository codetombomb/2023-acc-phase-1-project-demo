const renderCards = (cardDataArray) => {
    const cardWrapper = idElement("card-wrapper")
    cardWrapper.innerText = ''
    cardDataArray.forEach(card => {
        const img = document.createElement("img")
        img.src = card.image
        cardWrapper.appendChild(img)
    })
}