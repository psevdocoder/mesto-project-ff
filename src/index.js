import "./pages/index.css";
import {initialCards} from "./scripts/initialCards.js";
import {renderCards, addCardToList} from "./scripts/cards.js";
import {openModal, closeModal} from "./scripts/modal.js";

const modalTypeEdit = document.querySelector(".popup_type_edit");
const modalTypeNewCard = document.querySelector(".popup_type_new-card");
const editModalButton = document.querySelector(".profile__edit-button");
const newItemModalButton = document.querySelector(".profile__add-button");
const closeModalButtons = document.querySelectorAll(".popup__close");
const nameInput = document.querySelector(".profile__title");
const nameJob = document.querySelector(".profile__description");
const editProfileForm = document.forms.edit__profile;

const handleAddCardSubmit = (evt) => {
    evt.preventDefault();
    const cardObject = {
        name: evt.target.place__name.value,
        link: evt.target.link.value,
    };
    closeModal(modalTypeNewCard);
    evt.target.reset();
    addCardToList(cardObject);
};

const handleEditFormSubmit = (evt) => {
    evt.preventDefault();
    nameInput.textContent = editProfileForm.name.value;
    nameJob.textContent = editProfileForm.description.value;
    closeModal(modalTypeEdit);
};

editProfileForm.addEventListener("submit", handleEditFormSubmit);

newItemModalButton.addEventListener("click", () => {
    openModal(modalTypeNewCard);
});

editModalButton.addEventListener("click", () => {
    editProfileForm.name.value = nameInput.textContent;
    editProfileForm.description.value = nameJob.textContent;
    openModal(modalTypeEdit);
});

closeModalButtons.forEach((button) => {
    const popup = button.closest(".popup");
    button.addEventListener("click", () => closeModal(popup));
});

modalTypeNewCard.addEventListener("submit", handleAddCardSubmit);

renderCards(initialCards);