import { openPopup } from "./index.js";

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export class Card {
  constructor(card, templateSelector) {
    this._name = card.name;
    this._link = card.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners(cardImage) {
    this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
      this._handleLikeButton(evt);
    });

    this._element.querySelector('.element__trash-button').addEventListener('click', () => this._element.remove());

    cardImage.addEventListener('click', () => {
      this._handleImagePopup();
    });
  }

  _handleLikeButton(evt) {
    evt.target.classList.toggle('element__like-button_is-active');
  }

  _handleImagePopup() {
    const imagePopup = document.querySelector('.popup_section_card');
    const openedImage = imagePopup.querySelector('.popup__image');

    openedImage.src = this._link;
    openedImage.alt = this._name;
    imagePopup.querySelector('.popup__image-title').textContent = this._name;
    openPopup(imagePopup);
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector('.element__image');
    const cardTitle = this._element.querySelector('.element__name');

    cardTitle.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners(cardImage);

    return this._element;
  }
}
