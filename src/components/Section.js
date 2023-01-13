export default class Section {
  constructor({data, renderer}, containerSelector){
    this._initialCards = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._initialCards.forEach(item => {
      this._renderer(item);
    })
  }
}
