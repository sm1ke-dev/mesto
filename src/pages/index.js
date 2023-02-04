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
  profileAvatar,
  cardDeletingPopup,
  avatarContainer,
  avatarUpdateIcon,
  popupAvatarChange,
  avatarPopupSubmitButton,
  cardDeletingPopupSubmitButton,
  addImagePopupSubmitButton,
  nameChangingPopupSubmitButton
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import SubmitPopup from "../components/SubmitPopup.js";
import Api from "../components/Api.js"

const handleInitialCards = (cards) => {
  cardList.renderItems(cards)
}

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}

const handleNameChangingFormSubmit = (inputValues) => {
  nameChangingPopupSubmitButton.textContent = 'Сохранение...';
  api.changeName(inputValues, updateName);
}

const updateName = (profileData) => {
  userInfo.setUserInfo(profileData.name, profileData.about);
  popupEditProfile.close();
  nameChangingPopupSubmitButton.textContent = 'Сохранить';
}

const handleImageAddingFormSubmit = (inputValues) => {
  addImagePopupSubmitButton.textContent = 'Создание...';
  api.addCard(inputValues, addCard);
}

const addCard = (cardData) => {
  cardList.addItem(createCard(cardData));
  popupAddCard.close();
  addImagePopupSubmitButton.textContent = 'Создать';
}

const handleAvatarChangingFormSubmit = (inputValue) => {
  avatarPopupSubmitButton.textContent = 'Сохранение...';
  api.updateAvatar(inputValue, updateAvatar);
}

const updateAvatar = (data) => {
  profileAvatar.src = data.avatar;
  popupEditAvatar.close();
  avatarPopupSubmitButton.textContent = 'Сохранить';
}

const handleDeletingSubmit = (cardId, cardElement) => {
  cardDeletingPopupSubmitButton.textContent = 'Удаление...';
  api.deleteCard(cardId, cardElement, deleteCard);
}

const deleteCard = (cardElement) => {
  cardElement.remove();
  submitPopup.close();
  cardDeletingPopupSubmitButton.textContent = 'Ок';
}

const handleDeleteButton = (cardId, cardElement) => {
  submitPopup.sendActionData(cardId, cardElement)
  submitPopup.open()
}

const handleLikeButton = (likeButton, cardId, numberOfLikesElement) => {
  if (likeButton.classList.contains('element__like-button_is-active')) {
    api.removeLike(cardId, numberOfLikesElement, updateNumberOfLikes);

    likeButton.classList.remove('element__like-button_is-active');
  } else {
    api.putLike(cardId, numberOfLikesElement, updateNumberOfLikes);

    likeButton.classList.add('element__like-button_is-active');
  }
}

const updateNumberOfLikes = (numberOfLikes, numberOfLikesElement) => {
  if (numberOfLikes.length > 0) {
    numberOfLikesElement.textContent = numberOfLikes.length;
    numberOfLikesElement.classList.add('element__likes-number_shown');
  } else {
    numberOfLikesElement.classList.remove('element__likes-number_shown');
  }
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
  const card = new Card(item, '#card-template', handleCardClick, handleDeleteButton, handleLikeButton);
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

avatarContainer.addEventListener('mouseover', () => {
  profileAvatar.style.opacity = .6;
  avatarUpdateIcon.classList.add('profile__avatar-edit_shown');
});
avatarContainer.addEventListener('mouseout', () => {
  profileAvatar.style.opacity = 1;
  avatarUpdateIcon.classList.remove('profile__avatar-edit_shown')
});
avatarContainer.addEventListener('click', () => {
  formValidators['update-avatar'].resetValidation();
  popupEditAvatar.open();
})

const submitPopup = new SubmitPopup(cardDeletingPopup, handleDeletingSubmit);

const popupEditAvatar = new PopupWithForm(popupAvatarChange, handleAvatarChangingFormSubmit)

const popupEditProfile = new PopupWithForm(popupNameChange, handleNameChangingFormSubmit);

const popupWithImage = new PopupWithImage(imagePopup);

const popupAddCard = new PopupWithForm(popupAddImage, handleImageAddingFormSubmit);

const userInfo = new UserInfo(profileName, profileAbout);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '5cf2770b-0e36-4ac7-b6e9-4160bef8d47d',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo();

api.getInitialCards(handleInitialCards);
