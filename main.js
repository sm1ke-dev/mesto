(()=>{"use strict";var t=document.querySelector(".popup_section_info"),e=document.querySelector(".profile__edit-button"),n=document.querySelector(".popup_section_image"),r=document.querySelector(".profile__add-button"),o=t.querySelector(".popup__input_changed_name"),i=t.querySelector(".popup__input_changed_job"),u=document.querySelector(".popup_section_card"),a={},c=document.querySelector(".profile__avatar"),l=document.querySelector(".popup_section_delete"),s=document.querySelector(".profile__avatar-wrapper"),f=document.querySelector(".profile__avatar-edit"),p=document.querySelector(".popup_section_avatar"),y=l.querySelector(".popup__submit-button_section_delete");function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}var b=function(){function t(e,n,r,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._templateSelector=n,this._handleCardClick=r,this._numberOfLikes=e.likes,this._cardOwner=e.owner._id,this._handleDeleteButton=o,this.cardId=e._id,this._putLike=i,this._removeLike=u,this._userId=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_showDeleteButton",value:function(){this._deleteButton.classList.add("element__trash-button_shown")}},{key:"_handleLikeButton",value:function(){this._likeButton.classList.contains("element__like-button_is-active")?this._removeLike(this):this._putLike(this)}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){return t._handleLikeButton()})),this._deleteButton.addEventListener("click",(function(){return t._handleDeleteButton(t)})),this._cardImage.addEventListener("click",(function(){return t._handleCardClick(t)}))}},{key:"_handleNumberOfLikes",value:function(t){t.length>0?(this._numberOfLikesElement.textContent=t.length,this._numberOfLikesElement.classList.add("element__likes-number_shown")):this._numberOfLikesElement.classList.remove("element__likes-number_shown")}},{key:"_activateLikeButton",value:function(){this._likeButton.classList.add("element__like-button_is-active")}},{key:"putLike",value:function(t){this._handleNumberOfLikes(t),this._activateLikeButton()}},{key:"removeLike",value:function(t){this._handleNumberOfLikes(t),this._likeButton.classList.remove("element__like-button_is-active")}},{key:"generateCard",value:function(){var t=this;return this.element=this._getTemplate(),this._cardImage=this.element.querySelector(".element__image"),this._cardTitle=this.element.querySelector(".element__name"),this._deleteButton=this.element.querySelector(".element__trash-button"),this._likeButton=this.element.querySelector(".element__like-button"),this._numberOfLikesElement=this.element.querySelector(".element__likes-number"),this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._handleNumberOfLikes(this._numberOfLikes),this._numberOfLikes.forEach((function(e){e._id===t._userId&&t._activateLikeButton()})),this._cardOwner===this._userId&&this._showDeleteButton(),this._setEventListeners(),this.element}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var g=function(){function t(e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=n,this._inputList=function(t){if(Array.isArray(t))return v(t)}(r=this._form.querySelectorAll(this._config.inputSelector))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._submitButton=this._form.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_hideError",value:function(t){t.classList.remove(this._config.inputErrorClass),this._error.classList.remove(this._config.errorClass),this._error.textContent=""}},{key:"_toggleErrorMessages",value:function(t){this._error=this._form.querySelector("#".concat(t.id,"-error")),t.validity.valid?this._hideError(t):(t.classList.add(this._config.inputErrorClass),this._error.classList.add(this._config.errorClass),this._error.textContent=t.validationMessage)}},{key:"_toggleSubmitButton",value:function(){this._inputList.every((function(t){return t.validity.valid}))?(this._submitButton.classList.remove(this._config.inactiveButtonClass),this._submitButton.disabled=!1):(this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.disabled=!0)}},{key:"_setEventListeners",value:function(t){var e=this;t.addEventListener("input",(function(){e._toggleErrorMessages(t),e._toggleSubmitButton()}))}},{key:"resetValidation",value:function(){var t=this;this._toggleSubmitButton(),this._inputList.forEach((function(e){t._error=t._form.querySelector("#".concat(e.id,"-error")),t._hideError(e)}))}},{key:"enableValidation",value:function(){var t=this;this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){t._setEventListeners(e)}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var k=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,j(r.key),r)}}function L(t,e,n){return(e=j(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}var P=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),L(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),L(this,"_handleMouseClose",(function(t){t.target.classList.contains("popup_opened")&&n.close(),t.target.classList.contains("popup__reset-button")&&n.close()})),this._popupElement=e}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),this._setEventListeners()}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),this._removeEventListeners()}},{key:"_setEventListeners",value:function(){this._popupElement.addEventListener("mousedown",this._handleMouseClose),document.addEventListener("keydown",this._handleEscClose)}},{key:"_removeEventListeners",value:function(){this._popupElement.removeEventListener("mousedown",this._handleMouseClose),document.removeEventListener("keydown",this._handleEscClose)}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=I(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function I(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function A(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popupElement.querySelector(".popup__image"),e._title=e._popupElement.querySelector(".popup__image-title"),e}return e=u,(n=[{key:"open",value:function(t,e){B(R(u.prototype),"open",this).call(this),this._image.src=e,this._image.alt=t,this._title.textContent=t}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(P);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,H(r.key),r)}}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=V(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},M.apply(this,arguments)}function V(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$(t)););return t}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},z(t,e)}function F(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return J(t)}function J(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}function H(t){var e=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===x(e)?e:String(e)}var G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(r);if(o){var n=$(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return F(this,t)});function u(t,e){var n,r,o,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=J(n=i.call(this,t)),a=function(t){t.preventDefault(),n._submitForm(n._getInputValues())},(o=H(o="_handleSubmitForm"))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._submitForm=e,n._form=n._popupElement.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__submit-button"),n._submitButtonText=n._submitButton.textContent,n._inputList=function(t){if(Array.isArray(t))return D(t)}(c=n._form.querySelectorAll(".popup__input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(c)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return e=u,n=[{key:"close",value:function(){M($(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton.textContent=t?e:this._submitButtonText}},{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.id]=e.value})),t}},{key:"_setEventListeners",value:function(){M($(u.prototype),"_setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmitForm)}},{key:"_removeEventListeners",value:function(){M($(u.prototype),"_removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._handleSubmitForm)}}],n&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(P);function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==K(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}var W=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameContainer=document.querySelector(e),this._aboutContainer=document.querySelector(n),this._avatarContainer=document.querySelector(r)}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){var t={};return t.name=this._nameContainer.textContent,t.about=this._aboutContainer.textContent,t}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;this._nameContainer.textContent=e,this._aboutContainer.textContent=n,this._avatarContainer.src=r}}],n&&Q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function X(t){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(t)}function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,it(r.key),r)}}function Z(){return Z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=tt(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},Z.apply(this,arguments)}function tt(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=ot(t)););return t}function et(t,e){return et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},et(t,e)}function nt(t,e){if(e&&("object"===X(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return rt(t)}function rt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ot(t){return ot=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ot(t)}function it(t){var e=function(t,e){if("object"!==X(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==X(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===X(e)?e:String(e)}var ut=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&et(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ot(r);if(o){var n=ot(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return nt(this,t)});function u(t,e){var n,r,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=rt(n=i.call(this,t)),a=function(){n._submitAction(n._cardId,n._cardElement)},(o=it(o="_handleSubmitAction"))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._submitAction=e,n._submitButton=n._popupElement.querySelector(".popup__submit-button_section_delete"),n}return e=u,(n=[{key:"sendActionData",value:function(t,e){this._cardId=t,this._cardElement=e}},{key:"_setEventListeners",value:function(){Z(ot(u.prototype),"_setEventListeners",this).call(this),this._submitButton.addEventListener("click",this._handleSubmitAction)}},{key:"_removeEventListeners",value:function(){Z(ot(u.prototype),"_removeEventListeners",this).call(this),this._submitButton.removeEventListener("click",this._handleSubmitAction)}}])&&Y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(P);function at(t){return at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(t)}function ct(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==at(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==at(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===at(o)?o:String(o)),r)}var o}var lt,st=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"_request",value:function(t,e){return fetch(t,e).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return this._request("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._headers.authorization}})}},{key:"getInitialCards",value:function(){return this._request("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._headers.authorization}})}},{key:"changeName",value:function(t){return this._request("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.username,about:t.about})})}},{key:"addCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.cardname,link:t.link})})}},{key:"updateAvatar",value:function(t){return this._request("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatarLink})})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"removeLike",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"putLike",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers})}}])&&ct(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function ft(t,e){if(t){if("string"==typeof t)return pt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pt(t,e):void 0}}function pt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var yt,mt,ht=function(t){Et.open(t._name,t._link)},bt=function(t){St.sendActionData(t.cardId,t.element),St.open()},dt=function(t){jt.removeLike(t.cardId).then((function(e){t.removeLike(e.likes)})).catch((function(t){return console.log(t)}))},vt=function(t){jt.putLike(t.cardId).then((function(e){t.putLike(e.likes)})).catch((function(t){return console.log(t)}))},_t=function(t){return new b(t,"#card-template",ht,bt,vt,dt,lt).generateCard()},gt=new k({renderer:function(t){var e=_t(t);gt.addItem(e)}},".elements__list");yt={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},(mt=document.querySelectorAll(yt.formSelector),function(t){if(Array.isArray(t))return pt(t)}(mt)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(mt)||ft(mt)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t){var e=new g(yt,t),n=t.getAttribute("name");a[n]=e,e.enableValidation()})),e.addEventListener("click",(function(){var t=Lt.getUserInfo();o.value=t.name,i.value=t.about,a["update-info"].resetValidation(),kt.open()})),r.addEventListener("click",(function(){a["update-image"].resetValidation(),Ot.open()})),s.addEventListener("mouseover",(function(){c.style.opacity=.6,f.classList.add("profile__avatar-edit_shown")})),s.addEventListener("mouseout",(function(){c.style.opacity=1,f.classList.remove("profile__avatar-edit_shown")})),s.addEventListener("click",(function(){a["update-avatar"].resetValidation(),wt.open()}));var St=new ut(l,(function(t,e){y.textContent="Удаление...",jt.deleteCard(t).then((function(){return function(t){t.remove(),St.close()}(e)})).catch((function(t){return console.log(t)})).finally((function(){return y.textContent="Да"}))})),wt=new G(p,(function(t){wt.renderLoading(!0),jt.updateAvatar(t).then((function(t){return e=t,Lt.setUserInfo(e),void wt.close();var e})).catch((function(t){return console.log(t)})).finally((function(){return wt.renderLoading(!1)}))})),kt=new G(t,(function(t){kt.renderLoading(!0),jt.changeName(t).then((function(t){return e=t,Lt.setUserInfo(e),void kt.close();var e})).catch((function(t){return console.log(t)})).finally((function(){return kt.renderLoading(!1)}))})),Et=new U(u),Ot=new G(n,(function(t){Ot.renderLoading(!0,"Создание..."),jt.addCard(t).then((function(t){return e=t,gt.addItem(_t(e)),void Ot.close();var e})).catch((function(t){return console.log(t)})).finally((function(){return Ot.renderLoading(!1)}))})),Lt=new W(".profile__name",".profile__about",".profile__avatar"),jt=new st({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"5cf2770b-0e36-4ac7-b6e9-4160bef8d47d","Content-Type":"application/json"}});Promise.all([jt.getUserInfo(),jt.getInitialCards()]).then((function(t){var e=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||ft(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,2),n=e[0],r=e[1];Lt.setUserInfo(n),lt=n._id,function(t){gt.renderItems(t)}(r)})).catch((function(t){return console.log(t)}))})();