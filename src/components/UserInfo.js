export default class UserInfo {
  constructor() {
    this._nameContainer = document.querySelector('.profile__name');
    this._aboutContainer = document.querySelector('.profile__about');
    this._avatarContainer = document.querySelector('.profile__avatar');
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._nameContainer.textContent;
    userInfo.about = this._aboutContainer.textContent;

    return userInfo;
  }

  setUserInfo({ name, about, avatar }) {
    this._nameContainer.textContent = name;
    this._aboutContainer.textContent = about;
    this._avatarContainer.src = avatar;
  }
}
