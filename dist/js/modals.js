const button = document.getElementsByClassName("myBtn_multi")

const modalBackdrop = document.querySelector(".modal-backdrop");
const modalContent = document.querySelector(".modal-content");
const closeSpan = document.querySelector("#close");

const hidden = "modal--hidden";

const openModal = () => {
    [modalBackdrop, modalContent].forEach( element => element.classList.remove(hidden));
};

const closeModal = () => {
    [modalBackdrop, modalContent].forEach( element => element.classList.add(hidden));
}

button.addEventListener("click", openModal);

[modalBackdrop, closeSpan].forEach( el => el.addEventListener("click", closeModal));

