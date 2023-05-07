const handleClearModal = () => { 
    const modalLists = modal.querySelectorAll(".modal-list");
    modalLists.forEach(list => list.textContent = '')
    
    const modalListHeadings = modal.querySelectorAll(".modal-list-heading")
    modalListHeadings.forEach(heading => heading.style.display = "none")

    const modalCookingEffect = modal.querySelector(".modal-cooking-effect");
    modalCookingEffect.textContent = ''

    const modalDefense = modal.querySelector(".modal-defense");
    modalDefense.textContent = ''

    const modalAttack = modal.querySelector(".modal-attack");
    modalAttack.textContent = ''
}