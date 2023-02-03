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
  cardDeletingPopup,
  avatarContainer,
  avatarUpdateIcon,
  popupAvatarChange
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

const handleAvatarChangingFormSubmit = (inputValue) => {
  fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: tokenId,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: inputValue.link
    })
  })
    .then(res => res.json())
    .then(res => profileAvatar.src = res.avatar)
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

const handleLikeButton = (likeButton, cardId, numberOfLikesElement) => {
  if (likeButton.classList.contains('element__like-button_is-active')) {
    fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: tokenId
      }
    })
      .then(res => res.json())
      .then(res => updateNumberOfLikes(res.likes, numberOfLikesElement))

    likeButton.classList.remove('element__like-button_is-active');
  } else {
    fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: tokenId
      }
    })
      .then(res => res.json())
      .then(res => updateNumberOfLikes(res.likes, numberOfLikesElement))

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



const submitPopup = new SubmitPopup(cardDeletingPopup, deleteCard);

const popupEditAvatar = new PopupWithForm(popupAvatarChange, handleAvatarChangingFormSubmit)

const popupEditProfile = new PopupWithForm(popupNameChange, handleNameChangingFormSubmit);

const popupWithImage = new PopupWithImage(imagePopup);

const popupAddCard = new PopupWithForm(popupAddImage, handleImageAddingFormSubmit);

const userInfo = new UserInfo(profileName, profileAbout);
