import { initialCards } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";

const popupNameChange = document.querySelector('.popup_section_info');
const openButtonNamePopup = document.querySelector('.profile__edit-button');
const popupAddImage = document.querySelector('.popup_section_image');
const openButtonImagePopup = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const formNameChange = popupNameChange.querySelector('.popup__form');
const formAddImage = popupAddImage.querySelector('.popup__form');
const nameInput = popupNameChange.querySelector('.popup__input_changed_name');
const jobInput = popupNameChange.querySelector('.popup__input_changed_job');
const popups = [...document.querySelectorAll('.popup')];
const imageName = popupAddImage.querySelector('.popup__input_changed_image-name');
const imageLink = popupAddImage.querySelector('.popup__input_changed_link');
const elementsList = document.querySelector('.elements__list');
const imagePopup = document.querySelector('.popup_section_card');
const openedImage = imagePopup.querySelector('.popup__image');
const imageTitle = imagePopup.querySelector('.popup__image-title');
const formValidators = {};

const handleKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');

    closePopup(openedPopup);
  }
};

const openPopup = (popup) => {
  popup.classList.add('popup_opened');;

  document.addEventListener('keydown', handleKeyDown);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', handleKeyDown);
}

const handleCardClick = (name, link) => {
  openedImage.src = link;
  openedImage.alt = name;
  imageTitle.textContent = name;
  openPopup(imagePopup);
}

const handleNameChangingFormSubmit = (evt) => {
  evt.preventDefault();

  closePopup(popupNameChange);

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

const handleImageAddingFormSubmit = (form) => {
  const card = {};
  card.name = imageName.value;
  card.link = imageLink.value;

  closePopup(popupAddImage);

  addCard(card);

  form.reset();
}

const createCard = (item) => {
  const card = new Card(item, '#card-template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

const addCard = (item) => {;
  const cardElement = createCard(item)

  elementsList.prepend(cardElement);
}

// initialCards.forEach(addCard);

openButtonNamePopup.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;

  openPopup(popupNameChange);
});

openButtonImagePopup.addEventListener('click', () => {
  formValidators['update-image'].resetValidation();
  openPopup(popupAddImage)
});

formNameChange.addEventListener('submit', handleNameChangingFormSubmit);
formAddImage.addEventListener('submit', (evt) => {
  evt.preventDefault();
  handleImageAddingFormSubmit(formAddImage);
});

popups.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
    if (evt.target.classList.contains('popup__reset-button')) {
      closePopup(popup);
    };
  });
});

const enableValidation = (config) => {
  const formList = [...document.querySelectorAll(config.formSelector)];

  formList.forEach(formElement => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
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

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card-template', handleCardClick);
    const cardElement = card.generateCard();

    cardList.addItem(cardElement);
  },
}, '.elements__list');

cardList.renderItems();
