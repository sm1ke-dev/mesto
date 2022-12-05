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

  closePopup(popupAddImage);

  cardContainer.prepend(generateCard(imageNameInput.value, imageLinkInput.value));

  form.reset();
}

function generateCard(name, link) {
  const newCard = cardTemplate.cloneNode(true);
  const deleteButton = newCard.querySelector('.element__trash-button');
  const cardTitle = newCard.querySelector('.element__name');
  const imagePopup = document.querySelector('.popup_section_card');
  const popupOpeningImage = newCard.querySelector('.element__image');
  const popupClosingButton = imagePopup.querySelector('.popup__reset-button_close_image-popups');

  newCard.querySelector('.element__name').textContent = name;
  popupOpeningImage.src = link;
  popupOpeningImage.alt = name;

  newCard.querySelector('.element__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like-button_is-active');
  });

  deleteButton.addEventListener('click', () => newCard.remove());

  popupOpeningImage.addEventListener('click', () => {
    openPopup(imagePopup);
    imagePopup.querySelector('.popup__image').src = popupOpeningImage.src;
    imagePopup.querySelector('.popup__image').alt = name;
    imagePopup.querySelector('.popup__image-title').textContent = cardTitle.textContent;
  });

  popupClosingButton.addEventListener('click', () => closePopup(imagePopup));

  return newCard;
}

function addCard(name, link) {
  cardContainer.prepend(generateCard(name, link));
}

initialCards.forEach((card) => {
  addCard(card.name, card.link);
})

openButtonNamePopup.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;

  openPopup(popupNameChange);
});
closeButtonNamePopup.addEventListener('click', () => closePopup(popupNameChange));

openButtonImagePopup.addEventListener('click', () => openPopup(popupAddImage));
closeButtonImagePopup.addEventListener('click', () => closePopup(popupAddImage));

formNameChange.addEventListener('submit', handleNameChangingFormSubmit);
formAddImage.addEventListener('submit', handleImageAddingFormSubmit);
