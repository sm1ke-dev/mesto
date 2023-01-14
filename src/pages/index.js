import './index.css';

import {
  initialCards,
  popupNameChange,
  openButtonNamePopup,
  popupAddImage,
  openButtonImagePopup,
  profileName,
  profileAbout,
  nameInput,
  jobInput,
  imagePopup,
  formValidators,
  validationConfig
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}

export const handleNameChangingFormSubmit = (inputValues) => {
  userInfo.setUserInfo(inputValues[0], inputValues[1]);

  popupEditProfile.close();
}

export const handleImageAddingFormSubmit = (inputValues) => {
  const cardData = [];          // В классе Section метод renderItems() принимает на вход массив.
  cardData[0] = {               // Если сделать cardData сразу объектом, то метод не сможет его прочитать. Как тогда быть?
    name: inputValues[0],
    link: inputValues[1]
  }

  popupAddCard.close();

  const newCard = new Section({
    data: cardData,
    renderer: (item) => {
      const cardElement = createCard(item);

      newCard.addItem(cardElement);
    },
  }, '.elements__list');

  newCard.renderItems();
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

const createCard = (item) => {
  const card = new Card(item, '#card-template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);

    cardList.addItem(cardElement);
  },
}, '.elements__list');

cardList.renderItems();

enableValidation(validationConfig);

openButtonNamePopup.addEventListener('click', () => {
  const userInfoValues = userInfo.getUserInfo();
  nameInput.value = userInfoValues.name;
  jobInput.value = userInfoValues.about;

  popupEditProfile.open();
});

openButtonImagePopup.addEventListener('click', () => {
  formValidators['update-image'].resetValidation();
  popupAddCard.open();
});

const popupEditProfile = new PopupWithForm(popupNameChange, handleNameChangingFormSubmit);

const popupWithImage = new PopupWithImage(imagePopup);

const popupAddCard = new PopupWithForm(popupAddImage, handleImageAddingFormSubmit);

const userInfo = new UserInfo(profileName, profileAbout);
