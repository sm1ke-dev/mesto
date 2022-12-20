import { initialCards, Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popupNameChange = document.querySelector('.popup_section_info');
const openButtonNamePopup = document.querySelector('.profile__edit-button');
const closeButtonNamePopup = popupNameChange.querySelector('.popup__reset-button');
const popupAddImage = document.querySelector('.popup_section_image');
const openButtonImagePopup = document.querySelector('.profile__add-button');
const closeButtonImagePopup = popupAddImage.querySelector('.popup__reset-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const formNameChange = popupNameChange.querySelector('.popup__form');
const formAddImage = popupAddImage.querySelector('.popup__form');
const nameInput = popupNameChange.querySelector('.popup__input_changed_name');
const jobInput = popupNameChange.querySelector('.popup__input_changed_job');
const popups = [...document.querySelectorAll('.popup')];
const forms = [...document.querySelectorAll('.popup__form')];

const handleKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');

    closePopup(openedPopup);
    if (!openedPopup.classList.contains('popup_section_card')) {
      openedPopup.querySelector('.popup__form').reset();
      disableErrorMessages(openedPopup);
    }
  }
};

export const openPopup = (popup) => {
  popup.classList.add('popup_opened');;

  document.addEventListener('keydown', handleKeyDown);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', handleKeyDown);
}

export const disableSubmitButton = (button, inactiveClass) => {
  button.classList.add(inactiveClass);
  button.disabled = true;
}

const disableErrorMessages = (popup) => {
  const inputs = [...popup.querySelectorAll('.popup__input')];

  inputs.forEach(input => {
    const error = popup.querySelector(`#${input.id}-error`);

    input.classList.remove('popup__input_type_error');
    error.classList.remove('popup__error_visible');
    error.textContent = '';
  });
}

const handleNameChangingFormSubmit = (evt) => {
  evt.preventDefault();

  closePopup(popupNameChange);

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

const handleImageAddingFormSubmit = (form) => {
  const card = {};
  card.name = popupAddImage.querySelector('.popup__input_changed_image-name').value;
  card.link = popupAddImage.querySelector('.popup__input_changed_link').value;

  closePopup(popupAddImage);

  addCard(card);

  form.reset();
}

const addCard = (item) => {
  const card = new Card(item, '#card-template');
  const cardElement = card.generateCard();

  document.querySelector('.elements__list').prepend(cardElement);
}

initialCards.forEach((item) => {
  addCard(item);
})

openButtonNamePopup.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;

  openPopup(popupNameChange);
});
closeButtonNamePopup.addEventListener('click', () => {
  closePopup(popupNameChange);
  disableErrorMessages(popupNameChange);
});

openButtonImagePopup.addEventListener('click', () => {
  disableSubmitButton(popupAddImage.querySelector('.popup__submit-button'), 'popup__submit-button_disabled');
  openPopup(popupAddImage);
});
closeButtonImagePopup.addEventListener('click', () => {
  closePopup(popupAddImage);
  formAddImage.reset();
  disableErrorMessages(popupAddImage);
});

formNameChange.addEventListener('submit', handleNameChangingFormSubmit);
formAddImage.addEventListener('submit', (evt) => {
  evt.preventDefault();
  handleImageAddingFormSubmit(formAddImage);
});

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (!evt.target.closest('.popup__container') && !popup.classList.contains('popup_section_card')) {
      closePopup(popup);
      popup.querySelector('.popup__form').reset();
      disableErrorMessages(popup);
    } else if (!evt.target.closest('.popup__container')) {
      closePopup(popup);
    }
  });
});

forms.forEach(form => {
  const formElement = new FormValidator({
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }, form);

  formElement.enableValidation();
});
