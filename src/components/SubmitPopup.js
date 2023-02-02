import Popup from "./Popup.js";

export default class SubmitPopup extends Popup {
  constructor(popupElement, submitAction) {
    super(popupElement);
    this._submitAction = submitAction;
    this._submitButton = this._popupElement.querySelector('.popup__submit-button_section_delete');
  }

  sendActionData(cardId, cardElement) {
    this._cardId = cardId;
    this._cardElement = cardElement;
  }

  _handleSubmitAction = () => {
    this._submitAction(this._cardId, this._cardElement);
  }

  _setEventListeners() {
    super._setEventListeners();

    this._submitButton.addEventListener('click', this._handleSubmitAction);
  }

  _removeEventListeners() {
    super._removeEventListeners();

    this._submitButton.removeEventListener('click', this._handleSubmitAction);
  }
}
