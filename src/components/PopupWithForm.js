import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submitForm) {
    super(popupElement);
    this._submitForm = submitForm;
    this._form = this._popupElement.querySelector('.popup__form');
  }

  close() {
    super.close();

    this._form.reset();
  }

  _getInputValues() {
    const inputList = [...this._form.querySelectorAll('.popup__input')];
    const inputValues = []
    inputList.forEach(input => {
      inputValues[inputList.indexOf(input)] = input.value;
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
