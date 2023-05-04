const log = console.log

const botwData = {
  creatures: [],
  equipment: [],
  materials: [],
  monsters: [],
  treasure: [],
};

const idElement = (id) => {
  return document.getElementById(id)
}

const flatten = (data) => {
  return Object.values(data).flat()
}