const botwData = {
  creatures: [],
  equipment: [],
  materials: [],
  monsters: [],
  treasure: [],
};

const modal = document.querySelector(".modal");

const bootstrapModal = new bootstrap.Modal(modal, {
  // Passing options: https://getbootstrap.com/docs/5.0/components/modal/#passing-options
  keyboard: true,
  backdrop: true,
  focus: true,
});

const idElement = (id) => {
  return document.getElementById(id)
}

const flatten = (data) => {
  return Object.values(data).flat()
}