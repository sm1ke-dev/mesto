export default class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this._nameContainer = document.querySelector(nameSelector);
    this._aboutContainer = document.querySelector(aboutSelector);
    this._avatarContainer = document.querySelector(avatarSelector);
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
