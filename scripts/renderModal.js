// HELPER FUNCTION
const populateModalData = (data, modal) => {
  const title = modal.querySelector(".modal-title");
  const description = modal.querySelector(".modal-description");
  const modalCategory = modal.querySelector(".modal-category");
  const modalImg = modal.querySelector(".modal-img");
  const modalLocations = modal.querySelector(".modal-locations");
  const modalCommonLocationsHeading = modal.querySelector(".modal-common-locations-heading")
  const modalDrops = modal.querySelector(".modal-drops");
  const modalDropsHeading = modal.querySelector(".modal-drops-heading")

  if (typeof data.attack === "number") {
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

  if (data.common_locations) {
    modalCommonLocationsHeading.style.display = "inline-block"
    data.common_locations.forEach((location) => {
      const li = document.createElement("li");
      li.textContent = location;
      modalLocations.appendChild(li);
    });
  }

  if (data.drops) {
    modalDropsHeading.style.display = "inline-block"
    data.drops.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      modalDrops.appendChild(li);
    });
  }
};


const renderModal = (cardData) => {
  populateModalData(cardData, modal);
  bootstrapModal.show(); // Bootstrap show() method: https://getbootstrap.com/docs/5.0/components/modal/#show
};
