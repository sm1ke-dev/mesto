const popupNameChange = document.querySelector('.popup_section_info');
const openButtonNamePopup = document.querySelector('.profile__edit-button');
const closeButtonNamePopup = popupNameChange.querySelector('.popup__reset-button');
const popupAddImage = document.querySelector('.popup_section_image');
const openButtonImagePopup = document.querySelector('.profile__add-button');
const closeButtonImagePopup = popupAddImage.querySelector('.popup__reset-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const formNameChange = popupNameChange.querySelector('.popup__input');
const formAddImage = popupAddImage.querySelector('.popup__input');
const nameInput = popupNameChange.querySelector('.popup__text_changed_name');
const jobInput = popupNameChange.querySelector('.popup__text_changed_job');
const imageNameInput = popupAddImage.querySelector('.popup__text_changed_image-name');
const imageLinkInput = popupAddImage.querySelector('.popup__text_changed_link');
const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');

function openPopup(popup) {
  popup.classList.add('popup_opened');

  if (popup.classList.contains('popup_section_info')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleNameChangingFormSubmit(evt) {
  evt.preventDefault();

  if (nameInput.value.length > 0 && jobInput.value.length > 0) {
    closePopup(popupNameChange);
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
  }
}

function handleImageAddingFormSubmit(evt) {
  evt.preventDefault();

  if (imageNameInput.value.length > 0 && imageLinkInput.value.length > 0) {
    closePopup(popupAddImage);

    const newCard = cardTemplate.cloneNode(true);
    const deleteButton = newCard.querySelector('.element__trash-button');
    const cardTitle = newCard.querySelector('.element__name');
    const imagePopup = newCard.querySelector('.popup');
    const popupOpeningImage = newCard.querySelector('.element__image');
    const popupClosingButton = newCard.querySelector('.popup__reset-button_close_image-popups');

    newCard.querySelector('.element__name').textContent = imageNameInput.value;
    newCard.querySelector('.element__image').src = imageLinkInput.value;

    newCard.querySelector('.element__like-button').addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like-button_is-active');
    });

    deleteButton.addEventListener('click', () => {
      deleteButton.closest('.element').remove();
    });

    popupOpeningImage.addEventListener('click', () => {
      openPopup(imagePopup);
      newCard.querySelector('.popup__image').src = popupOpeningImage.src;
      newCard.querySelector('.popup__image-title').textContent = cardTitle.textContent;
    });

    popupClosingButton.addEventListener('click', () => closePopup(imagePopup));

    cardContainer.prepend(newCard);

    imageNameInput.value = '';
    imageLinkInput.value = '';
  }
}

function generateCard(card) {
  const newCard = cardTemplate.cloneNode(true);
  const deleteButton = newCard.querySelector('.element__trash-button');
  const cardTitle = newCard.querySelector('.element__name');
  const imagePopup = newCard.querySelector('.popup');
  const popupOpeningImage = newCard.querySelector('.element__image');
  const popupClosingButton = newCard.querySelector('.popup__reset-button_close_image-popups');

  newCard.querySelector('.element__name').textContent = card.name;
  newCard.querySelector('.element__image').src = card.link;

  newCard.querySelector('.element__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like-button_is-active');
  });

  deleteButton.addEventListener('click', () => deleteButton.closest('.element').remove());

  popupOpeningImage.addEventListener('click', () => {
    openPopup(imagePopup);
    newCard.querySelector('.popup__image').src = popupOpeningImage.src;
    newCard.querySelector('.popup__image-title').textContent = cardTitle.textContent;
  });

  popupClosingButton.addEventListener('click', () => closePopup(imagePopup));

  return newCard;
}

function addCards(card) {
  cardContainer.prepend(generateCard(card));
}

initialCards.forEach((card) => {
  addCards(card);
})

openButtonNamePopup.addEventListener('click', () => openPopup(popupNameChange));
closeButtonNamePopup.addEventListener('click', () => closePopup(popupNameChange));

openButtonImagePopup.addEventListener('click', () => openPopup(popupAddImage));
closeButtonImagePopup.addEventListener('click', () => closePopup(popupAddImage));

formNameChange.addEventListener('submit', handleNameChangingFormSubmit);
formAddImage.addEventListener('submit', handleImageAddingFormSubmit);

