import './index.css';

import {
  popupNameChange,
  openButtonNamePopup,
  popupAddImage,
  openButtonImagePopup,
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
  cardDeletingPopupSubmitButton,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import SubmitPopup from "../components/SubmitPopup.js";
import Api from "../components/Api.js"

let userId;

const handleInitialCards = (cards) => {
  cardList.renderItems(cards)
}

const handleCardClick = (card) => {
  popupWithImage.open(card._name, card._link);
}

const handleNameChangingFormSubmit = (inputValues) => {
  popupEditProfile.renderLoading(true);
  api.changeName(inputValues)
    .then(res => updateName(res))
    .catch(err => console.log(err))
    .finally(() => popupEditProfile.renderLoading(false));
}

const updateName = (profileData) => {
  userInfo.setUserInfo(profileData);
  popupEditProfile.close();
}

const handleImageAddingFormSubmit = (inputValues) => {
  popupAddCard.renderLoading(true, 'Создание...');
  api.addCard(inputValues)
    .then(res => addCard(res))
    .catch(err => console.log(err))
    .finally(() => popupAddCard.renderLoading(false));
}

const addCard = (cardData) => {
  cardList.addItem(createCard(cardData));
  popupAddCard.close();
}

const handleAvatarChangingFormSubmit = (inputValue) => {
  popupEditAvatar.renderLoading(true);
  api.updateAvatar(inputValue)
    .then(res => updateAvatar(res))
    .catch(err => console.log(err))
    .finally(() => popupEditAvatar.renderLoading(false));
}

const updateAvatar = (data) => {
  userInfo.setUserInfo(data);
  popupEditAvatar.close();
}

const handleDeletingSubmit = (cardId, cardElement) => {
  cardDeletingPopupSubmitButton.textContent = 'Удаление...';
  api.deleteCard(cardId)
    .then(() => deleteCard(cardElement))
    .finally(() => cardDeletingPopupSubmitButton.textContent = 'Да');
}

const deleteCard = (cardElement) => {
  cardElement.remove();
  submitPopup.close();
}

const handleDeleteButton = (card) => {
  submitPopup.sendActionData(card._cardId, card._element)
  submitPopup.open()
}

const removeLike = (card) => {
  api.removeLike(card._cardId)
    .then(res => {
      card._handleNumberOfLikes(res.likes);
      card._likeButton.classList.remove('element__like-button_is-active');
    })
    .catch(err => console.log(err));
}

const putLike = (card) => {
  api.putLike(card._cardId)
    .then(res => {
      card._handleNumberOfLikes(res.likes);
      card._likeButton.classList.add('element__like-button_is-active');
    })
    .catch(err => console.log(err));
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
  const card = new Card(item, '#card-template', handleCardClick, handleDeleteButton, putLike, removeLike, userId);
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

const userInfo = new UserInfo();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '5cf2770b-0e36-4ac7-b6e9-4160bef8d47d',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;

    handleInitialCards(cards);
  })
  .catch(err => console.log(err));
