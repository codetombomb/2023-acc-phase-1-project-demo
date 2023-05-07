// HELPER FUNCTION
const populateModalData = (data, modal) => {
  const title = modal.querySelector(".modal-title");
  const description = modal.querySelector(".modal-description");
  const modalCategory = modal.querySelector(".modal-category");
  const modalImg = modal.querySelector(".modal-img");
  const modalLocations = modal.querySelector(".modal-locations");

  if (typeof(data.attack) === "number") {
    const modalAttack = modal.querySelector(".modal-attack");

    modalAttack.textContent = `Attack: ${data.attack}`;
  }
  if (typeof data.defense === "number") {
    const modalDefense = modal.querySelector(".modal-defense");

    modalDefense.textContent = `Defense: ${data.defense}`;
  }

  if (data.cooking_effect) {
    const modalCookingEffect = modal.querySelector(".modal-cooking-effect");

    modalCookingEffect.textContent = `Cooking Effect: ${data.cooking_effect}`;
  }

  title.textContent = data.name;
  description.textContent = data.description;
  modalCategory.textContent = `Category: ${data.category}`;
  modalImg.src = data.image;

  if(data.common_locations){
      data.common_locations.forEach((location) => {
        const li = document.createElement("li");
        li.textContent = location;
        modalLocations.appendChild(li);
      });
  }
};

const renderModal = (cardData) => {
  log(cardData);
  const modal = document.querySelector(".modal");
  populateModalData(cardData, modal);
  const bootstrapModal = new bootstrap.Modal(modal, {
    // Passing options: https://getbootstrap.com/docs/5.0/components/modal/#passing-options
    keyboard: true,
    backdrop: true,
    focus: true,
  });
  bootstrapModal.show(); // Bootstrap show() method: https://getbootstrap.com/docs/5.0/components/modal/#show
};
