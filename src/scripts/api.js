const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-mag-4/',
    headers: {
        authorization: '38ec5425-9537-48f1-96fb-f3fa319e3758',
        'Content-Type': 'application/json'
    }
};

const request = (url, options) => {
    return fetch(url, options).then(checkResponse);
};

// обработчик ошибок
const checkResponse = (res) => {
    if (res.ok) return res.json();

    return Promise.reject(`Ошибка: ${res.status}`);
};

export const fetchCards = () => {
    return request(`${config.baseUrl}cards`, {
        method: "GET",
        headers: config.headers
    });
};

export const fetchUserData = () => {
    return request(`${config.baseUrl}users/me`, {
        method: "GET",
        headers: config.headers
    });
};

export const patchUserData = (userName, userAbout) => {
    return request(`${config.baseUrl}users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: userName,
            about: userAbout
        })
    });
};

export const postCard = (title, link) => {
    return request(`${config.baseUrl}cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: title,
            link: link
        })
    });
};

export const removeCard = (cardId) => {
    return request(`${config.baseUrl}cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    });
};

export const removeLike = (cardId) => {
    return request(`${config.baseUrl}cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    });
};

export const addLike = (cardId) => {
    return request(`${config.baseUrl}cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers
    });
};

export const patchUserAvatar = (link) => {
    return request(`${config.baseUrl}users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: link
        })
    });
};
