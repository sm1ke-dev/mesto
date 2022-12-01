const initialCards = [
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

const popupElement = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popupElement.querySelector('.popup__reset-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const formElement = popupElement.querySelector('.popup__input');
const nameInput = popupElement.querySelector('.popup__text_changed_name');
const jobInput = popupElement.querySelector('.popup__text_changed_job');
const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');

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

function generateCard(card) {
  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.element__name').textContent = card.name;
  newCard.querySelector('.element__image').src = card.link;

  return newCard;
}

function addCards(card) {
  cardContainer.prepend(generateCard(card));
}

initialCards.forEach((card) => {
  addCards(card);
})

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', handleFormSubmit);
