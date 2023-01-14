import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._image = this._popupElement.querySelector('.popup__image');
    this._title = this._popupElement.querySelector('.popup__image-title');
  }

  open(name, link) {
    super.open();

    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
  }
}
