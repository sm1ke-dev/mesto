export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
  }

  open() {
    this._popupElement.classList.add('popup_opened');

    this._setEventListeners();
  }

  close() {
    this._popupElement.classList.remove('popup_opened');

    this._removeEventListeners();
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleMouseClose = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    };
    if (evt.target.classList.contains('popup__reset-button')) {
      this.close();
    };
  }

  _setEventListeners() {
    this._popupElement.addEventListener('mousedown', this._handleMouseClose);

    document.addEventListener('keydown', this._handleEscClose);
  }

  _removeEventListeners() {
    this._popupElement.removeEventListener('mousedown', this._handleMouseClose);

    document.removeEventListener('keydown', this._handleEscClose);
  }
}
