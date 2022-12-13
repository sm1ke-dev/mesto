const toggleErrorMessages = (input, form, config) => {
  const error = form.querySelector(`#${input.id}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    error.classList.remove(config.errorClass);
    error.textContent = '';
  } else {
    input.classList.add(config.inputErrorClass);
    error.classList.add(config.errorClass);
    error.textContent = input.validationMessage;
  };
};

const toggleSubmitButton = (inputs, submitButton, config) => {

  const isFormValid = inputs.every(input => input.validity.valid);

  if (isFormValid) {
    submitButton.classList.remove(config.inactiveButtonClass);
    submitButton.disabled = '';
  } else {
    submitButton.classList.add(config.inactiveButtonClass);
    submitButton.disabled = 'disabled';
  };
};

const enableValidation = (config) => {
  const forms = [...document.querySelectorAll(config.formSelector)];

  forms.forEach(form => {
    const inputs = [...form.querySelectorAll(config.inputSelector)];

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    inputs.forEach(input => {
      const submitButton = form.querySelector(config.submitButtonSelector);

      input.setAttribute('required', true);

      input.addEventListener('input', () => {
        toggleErrorMessages(input, form, config);
        toggleSubmitButton(inputs, submitButton, config);
      });
    });
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
