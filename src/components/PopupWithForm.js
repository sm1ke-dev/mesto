import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submitForm) {
    super(popupElement);
    this._submitForm = submitForm;
    this._form = this._popupElement.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._submitButtonText = this._submitButton.textContent;
    this._inputList = [...this._form.querySelectorAll('.popup__input')];
  }

  close() {
    super.close();

    this._form.reset();
  }

  renderLoading(isLoading, loadingText='Сохранение...') {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  _getInputValues() {
    const inputValues = {}
    this._inputList.forEach(input => {
      inputValues[input.id] = input.value;
    })
    return inputValues;
  }

  _handleSubmitForm = (evt) => {
    evt.preventDefault();

    this._submitForm(this._getInputValues());
  }

  _setEventListeners() {
    super._setEventListeners();

    this._form.addEventListener('submit', this._handleSubmitForm);
  }

  _removeEventListeners() {
    super._removeEventListeners();

    this._form.removeEventListener('submit', this._handleSubmitForm);
  }
}
