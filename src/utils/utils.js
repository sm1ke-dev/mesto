import {
  initialCards,
  formValidators
} from "./constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {
  nameChangingPopup,
  popupWithImage,
  imageAddingPopup,
  userInfo
} from "../pages/index.js"

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}

export const handleNameChangingFormSubmit = (nameValue, aboutValue) => {
  userInfo.setUserInfo(nameValue, aboutValue);

  nameChangingPopup.close();
}

export const handleImageAddingFormSubmit = (nameValue, linkValue) => {
  const card = [];
  card[0] = {
    name: nameValue,
    link: linkValue
  }

  imageAddingPopup.close();

  addingCards(card);
}

const enableValidation = (config) => {
  const formList = [...document.querySelectorAll(config.formSelector)];

  formList.forEach(formElement => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

const addingCards = (items) => {
  const cardList = new Section({
    data: items,
    renderer: (item) => {
      const card = new Card(item, '#card-template', handleCardClick);
      const cardElement = card.generateCard();

      cardList.addItem(cardElement);
    },
  }, '.elements__list');

  cardList.renderItems();
}

addingCards(initialCards);

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
