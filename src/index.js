import "./pages/index.css";
import {initialCards} from "./scripts/initialCards.js";
import {
    createCard,
    handleLikeButtonClick,
    handleDeleteButtonClick,
} from "./scripts/card.js";
import {openModal, closeModal} from "./scripts/modal.js";

const modalTypeEdit = document.querySelector(".popup_type_edit");
const modalTypeNewCard = document.querySelector(".popup_type_new-card");
const modalTypeImage = document.querySelector(".popup_type_image");
const modalTypeImageData = modalTypeImage.querySelector(".popup__image");
const placesList = document.querySelector(".places__list");
const editModalButton = document.querySelector(".profile__edit-button");
const newItemModalButton = document.querySelector(".profile__add-button");
const closeModalButtons = document.querySelectorAll(".popup__close");
const nameInput = document.querySelector(".profile__title");
const nameJob = document.querySelector(".profile__description");
const editProfileForm = document.forms.edit__profile;

const handleModalTypeImage = (evt) => {
    const cardImage = evt.target.closest(".card__image");
    if (cardImage) {
        modalTypeImageData.src = cardImage.src;
        modalTypeImageData.alt = cardImage.alt;
        modalTypeImageData.textContent = cardImage.alt;
        openModal(modalTypeImage);
    }
};

const renderCards = (cards, method = "append") => {
    cards.forEach((cardData) => {
        const cardElement = createCard(
            cardData,
            handleDeleteButtonClick,
            handleLikeButtonClick,
            handleModalTypeImage
        );
        placesList[method](cardElement);
    });
};

const addCardToList = (cardData, method = "prepend") => {
    const cardElement = createCard(
        cardData,
        handleDeleteButtonClick,
        handleLikeButtonClick,
        handleModalTypeImage
    );
    placesList[method](cardElement);
};

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
