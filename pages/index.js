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
  formValidators
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}

const handleNameChangingFormSubmit = (nameValue, aboutValue) => {
  userInfo.setUserInfo(nameValue, aboutValue);

  nameChangingPopup.close();
}

const handleImageAddingFormSubmit = (nameValue, linkValue) => {
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

openButtonNamePopup.addEventListener('click', () => {
  const userInfoValues = userInfo.getUserInfo();
  nameInput.value = userInfoValues.name;
  jobInput.value = userInfoValues.about;

  nameChangingPopup.open();
});

openButtonImagePopup.addEventListener('click', () => {
  formValidators['update-image'].resetValidation();
  imageAddingPopup.open();
});

addingCards(initialCards);

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

const nameChangingPopup = new PopupWithForm(popupNameChange, handleNameChangingFormSubmit);

const popupWithImage = new PopupWithImage(imagePopup);

const imageAddingPopup = new PopupWithForm(popupAddImage, handleImageAddingFormSubmit);

const userInfo = new UserInfo(profileName, profileAbout);
