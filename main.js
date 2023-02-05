(()=>{"use strict";var t=document.querySelector(".popup_section_info"),e=document.querySelector(".profile__edit-button"),n=document.querySelector(".popup_section_image"),r=document.querySelector(".profile__add-button"),o=document.querySelector(".profile__name"),i=document.querySelector(".profile__about"),u=t.querySelector(".popup__input_changed_name"),c=t.querySelector(".popup__input_changed_job"),a=document.querySelector(".popup_section_card"),l={},s=document.querySelector(".profile__avatar"),f=document.querySelector(".popup_section_delete"),p=document.querySelector(".profile__avatar-wrapper"),y=document.querySelector(".profile__avatar-edit"),m=document.querySelector(".popup_section_avatar"),b=m.querySelector(".popup__submit-button_section_avatar"),h=f.querySelector(".popup__submit-button_section_delete"),d=n.querySelector(".popup__submit-button"),_=t.querySelector(".popup__submit-button");function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var S=function(){function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._templateSelector=n,this._handleCardClick=r,this._numberOfLikes=e.likes,this._cardOwner=e.owner._id,this._handleDeleteButton=o,this._cardId=e._id,this._handleLikeButton=i}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_showDeleteButton",value:function(){this._deleteButton.classList.add("element__trash-button_shown")}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){return t._handleLikeButton(t._likeButton,t._cardId,t._numberOfLikesElement)})),this._deleteButton.addEventListener("click",(function(){return t._handleDeleteButton(t._cardId,t._element)})),this._cardImage.addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)}))}},{key:"_showNumberOfLikes",value:function(){this._numberOfLikes.length>0&&(this._numberOfLikesElement.textContent=this._numberOfLikes.length,this._numberOfLikesElement.classList.add("element__likes-number_shown"))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image"),this._cardTitle=this._element.querySelector(".element__name"),this._deleteButton=this._element.querySelector(".element__trash-button"),this._likeButton=this._element.querySelector(".element__like-button"),this._numberOfLikesElement=this._element.querySelector(".element__likes-number"),this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._showNumberOfLikes(),"280842f93b0699fd24e893f6"===this._cardOwner&&this._showDeleteButton(),this._setEventListeners(),this._element}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var j=function(){function t(e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=n,this._inputList=function(t){if(Array.isArray(t))return k(t)}(r=this._form.querySelectorAll(this._config.inputSelector))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._submitButton=this._form.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_hideError",value:function(t){t.classList.remove(this._config.inputErrorClass),this._error.classList.remove(this._config.errorClass),this._error.textContent=""}},{key:"_toggleErrorMessages",value:function(t){this._error=this._form.querySelector("#".concat(t.id,"-error")),t.validity.valid?this._hideError(t):(t.classList.add(this._config.inputErrorClass),this._error.classList.add(this._config.errorClass),this._error.textContent=t.validationMessage)}},{key:"_toggleSubmitButton",value:function(){this._inputList.every((function(t){return t.validity.valid}))?(this._submitButton.classList.remove(this._config.inactiveButtonClass),this._submitButton.disabled=!1):(this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.disabled=!0)}},{key:"_setEventListeners",value:function(t){var e=this;t.addEventListener("input",(function(){e._toggleErrorMessages(t),e._toggleSubmitButton()}))}},{key:"resetValidation",value:function(){var t=this;this._toggleSubmitButton(),this._inputList.forEach((function(e){t._error=t._form.querySelector("#".concat(e.id,"-error")),t._hideError(e)}))}},{key:"enableValidation",value:function(){var t=this;this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){t._setEventListeners(e)}))}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var L=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,T(r.key),r)}}function A(t,e,n){return(e=T(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t){var e=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===C(e)?e:String(e)}var B=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),A(this,"_handleMouseClose",(function(t){t.target.classList.contains("popup_opened")&&n.close(),t.target.classList.contains("popup__reset-button")&&n.close()})),this._popupElement=e}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),this._setEventListeners()}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),this._removeEventListeners()}},{key:"_setEventListeners",value:function(){this._popupElement.addEventListener("mousedown",this._handleMouseClose),document.addEventListener("keydown",this._handleEscClose)}},{key:"_removeEventListeners",value:function(){this._popupElement.removeEventListener("mousedown",this._handleMouseClose),document.removeEventListener("keydown",this._handleEscClose)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=U(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function U(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function M(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return M(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popupElement.querySelector(".popup__image"),e._title=e._popupElement.querySelector(".popup__image-title"),e}return e=u,(n=[{key:"open",value:function(t,e){x(N(u.prototype),"open",this).call(this),this._image.src=e,this._image.alt=t,this._title.textContent=t}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(B);function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,X(r.key),r)}}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=H(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},$.apply(this,arguments)}function H(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=W(t)););return t}function G(t,e){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},G(t,e)}function K(t,e){if(e&&("object"===z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Q(t)}function Q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}function X(t){var e=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===z(e)?e:String(e)}var Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&G(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(r);if(o){var n=W(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return K(this,t)});function u(t,e){var n,r,o,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=Q(n=i.call(this,t)),c=function(t){t.preventDefault(),n._submitForm(n._getInputValues())},(o=X(o="_handleSubmitForm"))in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._submitForm=e,n._form=n._popupElement.querySelector(".popup__form"),n}return e=u,(n=[{key:"close",value:function(){$(W(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var t,e=function(t){if(Array.isArray(t))return F(t)}(t=this._form.querySelectorAll(".popup__input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n={};return e.forEach((function(t){n[t.id]=t.value})),n}},{key:"_setEventListeners",value:function(){$(W(u.prototype),"_setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmitForm)}},{key:"_removeEventListeners",value:function(){$(W(u.prototype),"_removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._handleSubmitForm)}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(B);function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function tt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Z(o)?o:String(o)),r)}var o}var et=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=e,this._aboutSelector=n}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){var t={};return t.name=this._nameSelector.textContent,t.about=this._aboutSelector.textContent,t}},{key:"setUserInfo",value:function(t,e){this._nameSelector.textContent=t,this._aboutSelector.textContent=e}}],n&&tt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function nt(t){return nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(t)}function rt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,st(r.key),r)}}function ot(){return ot="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=it(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},ot.apply(this,arguments)}function it(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=lt(t)););return t}function ut(t,e){return ut=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ut(t,e)}function ct(t,e){if(e&&("object"===nt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return at(t)}function at(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function lt(t){return lt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},lt(t)}function st(t){var e=function(t,e){if("object"!==nt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==nt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===nt(e)?e:String(e)}var ft=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ut(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=lt(r);if(o){var n=lt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ct(this,t)});function u(t,e){var n,r,o,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=at(n=i.call(this,t)),c=function(){n._submitAction(n._cardId,n._cardElement)},(o=st(o="_handleSubmitAction"))in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._submitAction=e,n._submitButton=n._popupElement.querySelector(".popup__submit-button_section_delete"),n}return e=u,(n=[{key:"sendActionData",value:function(t,e){this._cardId=t,this._cardElement=e}},{key:"_setEventListeners",value:function(){ot(lt(u.prototype),"_setEventListeners",this).call(this),this._submitButton.addEventListener("click",this._handleSubmitAction)}},{key:"_removeEventListeners",value:function(){ot(lt(u.prototype),"_removeEventListeners",this).call(this),this._submitButton.removeEventListener("click",this._handleSubmitAction)}}])&&rt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(B);function pt(t){return pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(t)}function yt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==pt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==pt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===pt(o)?o:String(o)),r)}var o}var mt=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r,this._profileAvatar=document.querySelector(".profile__avatar")}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){var t=this;fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._headers.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(e){t._profileAvatar.src=e.avatar,document.querySelector(".profile__name").textContent=e.name,document.querySelector(".profile__about").textContent=e.about})).catch((function(t){return console.log(t)}))}},{key:"getInitialCards",value:function(t){fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._headers.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(e){return t(e)})).catch((function(t){return console.log(t)}))}},{key:"changeName",value:function(t,e){fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.username,about:t.about})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){return e(t)})).catch((function(t){return console.log(t)}))}},{key:"addCard",value:function(t,e){fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.cardname,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){return e(t)})).catch((function(t){return console.log(t)}))}},{key:"updateAvatar",value:function(t,e){fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){return e(t)})).catch((function(t){return console.log(t)}))}},{key:"deleteCard",value:function(t,e,n){fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(){return n(e)}))}},{key:"removeLike",value:function(t,e,n){fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){return n(t.likes,e)})).catch((function(t){return console.log(t)}))}},{key:"putLike",value:function(t,e,n){fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){return n(t.likes,e)})).catch((function(t){return console.log(t)}))}}],n&&yt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function bt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var ht,dt,_t=function(t,e){At.open(t,e)},vt=function(t){Bt.setUserInfo(t.name,t.about),qt.close(),_.textContent="Сохранить"},gt=function(t){Pt.addItem(Ot(t)),Tt.close(),d.textContent="Создать"},St=function(t){s.src=t.avatar,Ct.close(),b.textContent="Сохранить"},wt=function(t){t.remove(),Lt.close(),h.textContent="Ок"},kt=function(t,e){Lt.sendActionData(t,e),Lt.open()},Et=function(t,e,n){t.classList.contains("element__like-button_is-active")?(It.removeLike(e,n,jt),t.classList.remove("element__like-button_is-active")):(It.putLike(e,n,jt),t.classList.add("element__like-button_is-active"))},jt=function(t,e){t.length>0?(e.textContent=t.length,e.classList.add("element__likes-number_shown")):e.classList.remove("element__likes-number_shown")},Ot=function(t){return new S(t,"#card-template",_t,kt,Et).generateCard()},Pt=new L({renderer:function(t){var e=Ot(t);Pt.addItem(e)}},".elements__list");ht={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},(dt=document.querySelectorAll(ht.formSelector),function(t){if(Array.isArray(t))return bt(t)}(dt)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(dt)||function(t,e){if(t){if("string"==typeof t)return bt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?bt(t,e):void 0}}(dt)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t){var e=new j(ht,t),n=t.getAttribute("name");l[n]=e,e.enableValidation()})),e.addEventListener("click",(function(){var t=Bt.getUserInfo();u.value=t.name,c.value=t.about,qt.open()})),r.addEventListener("click",(function(){l["update-image"].resetValidation(),Tt.open()})),p.addEventListener("mouseover",(function(){s.style.opacity=.6,y.classList.add("profile__avatar-edit_shown")})),p.addEventListener("mouseout",(function(){s.style.opacity=1,y.classList.remove("profile__avatar-edit_shown")})),p.addEventListener("click",(function(){l["update-avatar"].resetValidation(),Ct.open()}));var Lt=new ft(f,(function(t,e){h.textContent="Удаление...",It.deleteCard(t,e,wt)})),Ct=new Y(m,(function(t){b.textContent="Сохранение...",It.updateAvatar(t,St)})),qt=new Y(t,(function(t){_.textContent="Сохранение...",It.changeName(t,vt)})),At=new V(a),Tt=new Y(n,(function(t){d.textContent="Создание...",It.addCard(t,gt)})),Bt=new et(o,i),It=new mt({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"5cf2770b-0e36-4ac7-b6e9-4160bef8d47d","Content-Type":"application/json"}});It.getUserInfo(),It.getInitialCards((function(t){Pt.renderItems(t)}))})();