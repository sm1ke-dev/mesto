export default class Card {
  constructor(card, templateSelector, handleCardClick, handleDeleteButton, handleLikeButton) {
    this._name = card.name;
    this._link = card.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._numberOfLikes = card.likes;
    this._cardOwner = card.owner._id;
    this._handleDeleteButton = handleDeleteButton;
    this._cardId = card._id;
    this._handleLikeButton = handleLikeButton;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _showDeleteButton() {
    this._deleteButton.classList.add('element__trash-button_shown');
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeButton(this._likeButton, this._cardId, this._numberOfLikesElement));

    this._deleteButton.addEventListener('click', () => this._handleDeleteButton(this._cardId, this._element));

    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  _showNumberOfLikes() {
    if (this._numberOfLikes.length > 0) {
      this._numberOfLikesElement.textContent = this._numberOfLikes.length;
      this._numberOfLikesElement.classList.add('element__likes-number_shown');
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__name');
    this._deleteButton = this._element.querySelector('.element__trash-button');
    this._likeButton = this._element.querySelector('.element__like-button');
    this._numberOfLikesElement = this._element.querySelector('.element__likes-number');

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._showNumberOfLikes();

    if (this._cardOwner === '280842f93b0699fd24e893f6') {
      this._showDeleteButton();
    }

    this._setEventListeners();

    return this._element;
  }
}
