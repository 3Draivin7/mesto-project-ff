(()=>{"use strict";function e(e,t,n,o){var r=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),c=r.querySelector(".card__delete-button"),u=r.querySelector(".card__like-button"),p=r.querySelector(".card__image"),i=r.querySelector(".card__title");return p.src=e.link,p.alt=e.name,i.textContent=e.name,c.addEventListener("click",(function(){t(r)})),u.addEventListener("click",(function(){n(r)})),p.addEventListener("click",(function(){o(p,i.textContent)})),r}function t(e){e.remove()}function n(e){e.querySelector(".card__like-button").classList.toggle("card__like-button_is-active")}function o(e){e.classList.add("popup_is-opened"),window.addEventListener("keydown",c)}function r(e){e.classList.remove("popup_is-opened"),window.removeEventListener("keydown",c)}function c(e){"Escape"==e.key&&r(document.querySelector(".popup_is-opened"))}console.log(e,t,n),fetch("https://nomoreparties.co/v1/wff-cohort-6/cards",{headers:{authorization:"7aea75e6-a33e-44c8-8785-1d85f354cab4"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}));var u=document.querySelector(".places__list");function p(e,t){o(i),d.src=e.src,a.alt=e.alt,l.textContent=t}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(o){var r=e(o,t,n,p);u.append(r)}));var i=document.querySelector(".popup_type_image"),d=i.querySelector(".popup__image"),a=i.querySelector(".popup__image"),l=i.querySelector(".popup__caption"),s=document.querySelector(".profile__edit-button"),_=document.querySelector(".popup_type_edit"),m=document.querySelectorAll(".popup__close"),y=document.querySelectorAll(".popup"),f=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_new-card"),k=document.querySelector(".popup__input_type_name"),q=document.querySelector(".popup__input_type_description"),S=document.querySelector(".popup_type_edit");k.value=document.querySelector(".profile__title").textContent,q.value=document.querySelector(".profile__description").textContent;var h=document.querySelector(".profile__title"),g=document.querySelector(".profile__description"),E=document.forms.newPlace;s.addEventListener("click",(function(){return o(_)})),y.forEach((function(e){e.addEventListener("click",(function(e){return function(e){var t=document.querySelector(".popup_is-opened");e.target===e.currentTarget&&r(t)}(e)}))})),m.forEach((function(e){e.addEventListener("click",(function(){return r(e)}))})),f.addEventListener("click",(function(){return o(v)})),S.addEventListener("submit",(function(e){e.preventDefault(),h.textContent=k.value,g.textContent=q.value,r(_)})),E.addEventListener("submit",(function(o){o.preventDefault(),v.classList.remove("popup_is-opened");var r=e({name:E.elements.placeName.value,link:E.elements.link.value},t,n,p);u.prepend(r),E.reset()}))})();