export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const popupNameChange = document.querySelector('.popup_section_info');
export const openButtonNamePopup = document.querySelector('.profile__edit-button');
export const popupAddImage = document.querySelector('.popup_section_image');
export const openButtonImagePopup = document.querySelector('.profile__add-button');
export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');
export const nameInput = popupNameChange.querySelector('.popup__input_changed_name');
export const jobInput = popupNameChange.querySelector('.popup__input_changed_job');
export const imagePopup = document.querySelector('.popup_section_card');
export const formValidators = {};
