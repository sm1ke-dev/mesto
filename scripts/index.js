let popupElement = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popupElement.querySelector('.popup__reset-button');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let formElement = popupElement.querySelector('.popup__input');
let nameInput = popupElement.querySelector('.popup__text_changed_name');
let jobInput = popupElement.querySelector('.popup__text_changed_job');

function openPopup() {
  popupElement.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  if (nameInput.value.length > 0 && jobInput.value.length > 0) {
    closePopup();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
  }
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', handleFormSubmit);