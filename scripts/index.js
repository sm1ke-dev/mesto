import { initialCards, Card } from "./Card.js";

const popupNameChange = document.querySelector('.popup_section_info');
const openButtonNamePopup = document.querySelector('.profile__edit-button');
const closeButtonNamePopup = popupNameChange.querySelector('.popup__reset-button');
const popupAddImage = document.querySelector('.popup_section_image');
const openButtonImagePopup = document.querySelector('.profile__add-button');
const closeButtonImagePopup = popupAddImage.querySelector('.popup__reset-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const formNameChange = popupNameChange.querySelector('.popup__form');
const formAddImage = popupAddImage.querySelector('.popup__form');
const nameInput = popupNameChange.querySelector('.popup__input_changed_name');
const jobInput = popupNameChange.querySelector('.popup__input_changed_job');
const imageNameInput = popupAddImage.querySelector('.popup__input_changed_image-name');
const imageLinkInput = popupAddImage.querySelector('.popup__input_changed_link');
const cardContainer = document.querySelector('.elements__list');
const popups = [...document.querySelectorAll('.popup')];
const imageSubmitButton = popupAddImage.querySelector('.popup__submit-button');

const handleKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');

    closePopup(openedPopup);
  }
};

export const openPopup = (popup) => {
  popup.classList.add('popup_opened');;

  document.addEventListener('keydown', handleKeyDown);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', handleKeyDown);
}

const handleNameChangingFormSubmit = (evt) => {
  evt.preventDefault();

  closePopup(popupNameChange);

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

const handleImageAddingFormSubmit = (form) => {
  const card = {};
  card.name = imageNameInput.value;
  card.link = imageLinkInput.value;

  closePopup(popupAddImage);

  addCard(card);

  form.reset();
}

const addCard = (item) => {
  const card = new Card(item, '#card-template');
  const cardElement = card.generateCard();

  cardContainer.prepend(cardElement);
}

initialCards.forEach((item) => {
  addCard(item);
})

openButtonNamePopup.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;

  openPopup(popupNameChange);
});
closeButtonNamePopup.addEventListener('click', () => closePopup(popupNameChange));

openButtonImagePopup.addEventListener('click', () => {
  imageSubmitButton.classList.add('popup__submit-button_disabled');
  imageSubmitButton.disabled = true;
  openPopup(popupAddImage)
});
closeButtonImagePopup.addEventListener('click', () => closePopup(popupAddImage));

formNameChange.addEventListener('submit', handleNameChangingFormSubmit);
formAddImage.addEventListener('submit', (evt) => {
  evt.preventDefault();
  handleImageAddingFormSubmit(formAddImage);
});

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (!evt.target.closest('.popup__container')) {
      closePopup(popup);
    }
  });
});
