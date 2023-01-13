export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._nameSelector = nameSelector;
    this._aboutSelector = aboutSelector;
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._nameSelector.textContent;
    userInfo.about = this._aboutSelector.textContent;

    return userInfo;
  }

  setUserInfo(nameInputValue, aboutInputValue) {
    this._nameSelector.textContent = nameInputValue;
    this._aboutSelector.textContent = aboutInputValue;
  }
}
