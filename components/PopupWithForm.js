import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitForm) {
    super(popup);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
  }

  close() {
    super.close();

    this._form.reset();
  }

  _getInputValues() {
    this._inputValues = [...this._form.querySelectorAll('.popup__input')];
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._getInputValues();

      this._submitForm(this._inputValues[0].value, this._inputValues[1].value);
    });
  }
}
