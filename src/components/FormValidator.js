export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._form = formElement;
    this._inputList = [...this._form.querySelectorAll(this._config.inputSelector)];
    this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
  }

  _hideError(inputElement) {
    inputElement.classList.remove(this._config.inputErrorClass);
    this._error.classList.remove(this._config.errorClass);
    this._error.textContent = '';
  }

  _toggleErrorMessages(inputElement) {
    this._error = this._form.querySelector(`#${inputElement.id}-error`);

    if (inputElement.validity.valid) {
      this._hideError(inputElement);
    } else {
      inputElement.classList.add(this._config.inputErrorClass);
      this._error.classList.add(this._config.errorClass);
      this._error.textContent = inputElement.validationMessage;
    };
  }

  _toggleSubmitButton() {
    const isFormValid = this._inputList.every(inputElement => inputElement.validity.valid);

    if (isFormValid) {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.disabled = true;
    };
  }

  _setEventListeners(inputElement) {
    inputElement.addEventListener('input', () => {
      this._toggleErrorMessages(inputElement);
      this._toggleSubmitButton();
    });
  }

  resetValidation() {
    this._toggleSubmitButton();

    this._inputList.forEach(inputElement => {
      this._error = this._form.querySelector(`#${inputElement.id}-error`);      //Приходится второй раз искать ошибку, по другому у меня не получается

      this._hideError(inputElement);
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._inputList.forEach(inputElement => {
      this._setEventListeners(inputElement);
    });
  }
}
