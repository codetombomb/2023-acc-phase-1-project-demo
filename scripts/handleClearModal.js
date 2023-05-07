const handleClearModal = () => { 
    const modalLists = modal.querySelectorAll(".modal-list");
    modal.querySelector(".modal-drops-heading").style.display = "none"
    modalLists.forEach(list => list.textContent = "")
}