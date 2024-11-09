import './pages/index.css';
import { initialCards } from './scripts/cards';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(cardInfo, deleteCard) {
    const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);
    const cardPicture = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const buttonDeleteCard = cardElement.querySelector(".card__delete-button");
    buttonDeleteCard.addEventListener("click", deleteCard);

    cardPicture.src = cardInfo.link;
    cardPicture.alt = cardInfo.name;
    cardTitle.textContent = cardInfo.name;

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(event) {
    const cardDelete = event.target.closest(".places__item");
    cardDelete.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(cardInfo => {
    const createdCard = createCard(cardInfo, deleteCard);
    placesList.append(createdCard);
    });