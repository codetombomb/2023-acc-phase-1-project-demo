const renderCards = (cardDataArray) => {
  const cardWrapper = idElement("card-wrapper");
  if (cardDataArray.length === 0) {
    cardWrapper.innerText = "No items found";
    return;
  }
  cardWrapper.innerText = "";
  cardDataArray.forEach((card) => {
    const img = document.createElement("img");
    img.src = card.image;
    img.className = "card-image";
    img.id = card.id;
    img.dataset.toggle = "modal";
    img.dataset.target = `card-${card.id}`;
    cardWrapper.appendChild(img);
    img.addEventListener("click", () => renderModal(card));
    img.addEventListener("mouseenter", addHoverEffect)
    img.addEventListener("mouseleave", removeHoverEffect)
  });
};
