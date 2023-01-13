import './pages/index.css';

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
  formValidators
} from "./utils/constants.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import {
  handleNameChangingFormSubmit,
  handleImageAddingFormSubmit
} from "./utils/utils.js"


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

export const nameChangingPopup = new PopupWithForm(popupNameChange, handleNameChangingFormSubmit);

export const popupWithImage = new PopupWithImage(imagePopup);

export const imageAddingPopup = new PopupWithForm(popupAddImage, handleImageAddingFormSubmit);

export const userInfo = new UserInfo(profileName, profileAbout);
