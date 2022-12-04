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

const nameChangingPopupElement = document.querySelector('.popup');
const nameChangingPopupOpenButton = document.querySelector('.profile__edit-button');
const nameChangingPopupCloseButton = nameChangingPopupElement.querySelector('.popup__reset-button');
const imageAddingPopupElement = document.querySelector('.popup_section_image');
const imageAddingPopupOpenButton = document.querySelector('.profile__add-button');
const imageAddingPopupCloseButton = imageAddingPopupElement.querySelector('.popup__reset-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const nameChangingFormElement = nameChangingPopupElement.querySelector('.popup__input');
const imageAddingFormElement = imageAddingPopupElement.querySelector('.popup__input');
const nameInput = nameChangingPopupElement.querySelector('.popup__text_changed_name');
const jobInput = nameChangingPopupElement.querySelector('.popup__text_changed_job');
const imageNameInput = imageAddingPopupElement.querySelector('.popup__text_changed_image-name');
const imageLinkInput = imageAddingPopupElement.querySelector('.popup__text_changed_link');
const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');

function openNameChangingPopup() {
  nameChangingPopupElement.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

function closeNameChangingPopup() {
  nameChangingPopupElement.classList.remove('popup_opened');
}

function openImageAddingPopup() {
  imageAddingPopupElement.classList.add('popup_opened');
}

function closeImageAddingPopup() {
  imageAddingPopupElement.classList.remove('popup_opened');
}

function handleNameChangingFormSubmit(evt) {
  evt.preventDefault();

  if (nameInput.value.length > 0 && jobInput.value.length > 0) {
    closeNameChangingPopup();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
  }
}

function handleImageAddingFormSubmit(evt) {
  evt.preventDefault();

  if (imageNameInput.value.length > 0 && imageLinkInput.value.length > 0) {
    closeImageAddingPopup();

    const newCard = cardTemplate.cloneNode(true);
    const deleteButton = newCard.querySelector('.element__trash-button');

    newCard.querySelector('.element__name').textContent = imageNameInput.value;
    newCard.querySelector('.element__image').src = imageLinkInput.value;

    newCard.querySelector('.element__like-button').addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__like-button_is-active');
    });

    deleteButton.addEventListener('click', function(evt) {
      deleteButton.closest('.element').remove();
    });

    cardContainer.prepend(newCard);

    imageNameInput.value = '';
    imageLinkInput.value = '';
  }
}

function generateCard(card) {
  const newCard = cardTemplate.cloneNode(true);
  const deleteButton = newCard.querySelector('.element__trash-button');

  newCard.querySelector('.element__name').textContent = card.name;
  newCard.querySelector('.element__image').src = card.link;

  newCard.querySelector('.element__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like-button_is-active');
  });

  deleteButton.addEventListener('click', function(evt) {
    deleteButton.closest('.element').remove();
  });

  return newCard;
}

function addCards(card) {
  cardContainer.prepend(generateCard(card));
}

initialCards.forEach((card) => {
  addCards(card);
})

nameChangingPopupOpenButton.addEventListener('click', openNameChangingPopup);
nameChangingPopupCloseButton.addEventListener('click', closeNameChangingPopup);

imageAddingPopupOpenButton.addEventListener('click', openImageAddingPopup);
imageAddingPopupCloseButton.addEventListener('click', closeImageAddingPopup);

nameChangingFormElement.addEventListener('submit', handleNameChangingFormSubmit);
imageAddingFormElement.addEventListener('submit', handleImageAddingFormSubmit);

