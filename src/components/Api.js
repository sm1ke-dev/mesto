export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._profileAvatar = document.querySelector('.profile__avatar');
  }

  getUserInfo() {
    fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._headers.authorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => {
        this._profileAvatar.src = res.avatar;
        document.querySelector('.profile__name').textContent = res.name;
        document.querySelector('.profile__about').textContent = res.about;
      })
      .catch(err => console.log(err));
  }

  getInitialCards(handleInitialCards) {
    fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._headers.authorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => handleInitialCards(res))
      .catch(err => console.log(err));
  }

  changeName(inputValues, updateName) {
    fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: inputValues.username,
        about: inputValues.about
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => updateName(res))
      .catch(err => console.log(err));
  }

  addCard(inputValues, addCard) {
    fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: inputValues.cardname,
        link: inputValues.link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => addCard(res))
      .catch(err => console.log(err));
  }

  updateAvatar(inputValue, updateAvatar) {
    fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: inputValue.avatarLink
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => updateAvatar(res))
      .catch(err => console.log(err));
  }

  deleteCard(cardId, cardElement, deleteCard) {
    fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(() => deleteCard(cardElement));
  }

  removeLike(cardId, numberOfLikesElement, updateNumberOfLikes) {
    fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => updateNumberOfLikes(res.likes, numberOfLikesElement))
      .catch(err => console.log(err));
  }

  putLike(cardId, numberOfLikesElement, updateNumberOfLikes) {
    fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => updateNumberOfLikes(res.likes, numberOfLikesElement))
      .catch(err => console.log(err));
  }
}
