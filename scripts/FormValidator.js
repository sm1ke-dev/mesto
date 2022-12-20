import {disableSubmitButton} from "./index.js";

export class FormValidator {
  constructor(config, formSelector) {
    this._config = config;
    this._form = formSelector;
  }

  _toggleErrorMessages(input) {
    const error = this._form.querySelector(`#${input.id}-error`);

    if (input.validity.valid) {
      input.classList.remove(this._config.inputErrorClass);
      error.classList.remove(this._config.errorClass);
      error.textContent = '';
    } else {
      input.classList.add(this._config.inputErrorClass);
      error.classList.add(this._config.errorClass);
      error.textContent = input.validationMessage;
    };
  }

  _toggleSubmitButton(inputs) {
    const isFormValid = inputs.every(input => input.validity.valid);
    const submitButton = this._form.querySelector(this._config.submitButtonSelector);

    if (isFormValid) {
      submitButton.classList.remove(this._config.inactiveButtonClass);
      submitButton.disabled = false;
    } else {
      disableSubmitButton(submitButton, this._config.inactiveButtonClass);
    };
  }

  _setEventListeners(input, inputs) {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    input.addEventListener('input', () => {
      this._toggleErrorMessages(input);
      this._toggleSubmitButton(inputs);
    });
  }

  enableValidation() {
    const inputs = [...this._form.querySelectorAll(this._config.inputSelector)];

    inputs.forEach(input => {
      input.setAttribute('required', true);

      this._setEventListeners(input, inputs);
    });
  }
}
