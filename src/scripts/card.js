import { removeLike, addLike } from "./api.js";

const template = document.querySelector("#card-template").content;

export const createCard = (
    cardData,
    userID,
    handleCardRemove,
    handleOpenModalTypeImage
) => {
    const cardElement = template.querySelector(".card").cloneNode(true);
    const deleteButton = cardElement.querySelector(".card__delete-button");
    const likeButton = cardElement.querySelector(".card__like-button");
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const cardLikeQty = cardElement.querySelector(".card__like-qty");
    const cardId = cardData["_id"];

    cardElement.setAttribute("id", cardId);

    if (checkLike(cardData.likes, userID)) {
        likeButton.classList.add("card__like-button_is-active");
    }

    if (cardData.owner["_id"] === userID) {
        deleteButton.addEventListener("click", handleCardRemove);
    } else {
        deleteButton.remove();
    }

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
    cardLikeQty.textContent = cardData.likes.length;

    likeButton.addEventListener("click", (evt) => {
        checkLikedOnCard(evt.target, cardLikeQty, cardId);
    });
    cardImage.addEventListener("click", handleOpenModalTypeImage);
    return cardElement;
};

function checkLikedOnCard(likeButton, likeCount, cardId) {
    if (likeButton.classList.contains("card__like-button_is-active")) {
        removeLike(cardId)
            .then((data) => {
                likeCount.textContent = data.likes.length;
                likeButton.classList.remove("card__like-button_is-active");
            })
            .catch((err) => console.log(err));
    } else {
        addLike(cardId)
            .then((data) => {
                likeCount.textContent = data.likes.length;
                likeButton.classList.add("card__like-button_is-active");
            })
            .catch((err) => {
                console.error("Произошла ошибка:", err);
            });
    }
}

function checkLike(likes, userId) {
    return likes.some((like) => like["_id"] === userId);
}
