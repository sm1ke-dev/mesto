import './index.css';

import {
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
  validationConfig,
  cohortId,
  tokenId,
  profileAvatar,
  cardDeletingPopup
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import SubmitPopup from "../components/SubmitPopup.js";

fetch(`https://nomoreparties.co/v1/${cohortId}/users/me`, {
  headers: {
    authorization: tokenId
  }
})
  .then(res => res.json())
  .then(res => {
    profileAvatar.src = res.avatar;
    profileName.textContent = res.name;
    profileAbout.textContent = res.about;
  })


fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/cards`, {
  headers: {
    authorization: tokenId
  }
})
  .then(res => res.json())
  .then(res => cardList.renderItems(res));

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}

export const handleNameChangingFormSubmit = (inputValues) => {
  fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: tokenId,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: inputValues.username,
      about: inputValues.about
    })
  })
    .then(res => res.json())
    .then(res => {
      userInfo.setUserInfo(res.name, res.about);
      popupEditProfile.close();
    });
}

export const handleImageAddingFormSubmit = (inputValues) => {
  fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/cards`, {
    method: 'POST',
    headers: {
      authorization: tokenId,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: inputValues.cardname,
      link: inputValues.link
    })
  })
    .then(res => res.json())
    .then(res => {
      cardList.addItem(createCard(res));
      popupAddCard.close();
    });
}

const deleteCard = (cardId, cardElement) => {
  fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: tokenId
    }
  })
    .then(() => {
      cardElement.remove();
      submitPopup.close();
    })
}

const handleDeleteButton = (cardId, cardElement) => {
  submitPopup.sendActionData(cardId, cardElement)
  submitPopup.open()
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
  const card = new Card(item, '#card-template', handleCardClick, handleDeleteButton);
  const cardElement = card.generateCard();

  return cardElement;
}

const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);

    cardList.addItem(cardElement);
  },
}, '.elements__list');

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

const submitPopup = new SubmitPopup(cardDeletingPopup, deleteCard);

const popupEditProfile = new PopupWithForm(popupNameChange, handleNameChangingFormSubmit);

const popupWithImage = new PopupWithImage(imagePopup);

const popupAddCard = new PopupWithForm(popupAddImage, handleImageAddingFormSubmit);

const userInfo = new UserInfo(profileName, profileAbout);
