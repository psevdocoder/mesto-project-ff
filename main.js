(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/cohort-mag-4/",headers:{authorization:"38ec5425-9537-48f1-96fb-f3fa319e3758","Content-Type":"application/json"}},t=function(e,t){return fetch(e,t).then(n)},n=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},r=document.querySelector("#card-template").content,o=function(e){e.classList.remove("popup_is-opened"),setTimeout((function(){e.classList.remove("popup_is-animated")}),1e3),document.removeEventListener("keydown",i),document.removeEventListener("click",c)},a=function(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),0),document.addEventListener("keydown",i),document.addEventListener("click",c)},c=function(e){e.target.classList.contains("popup")&&o(e.target)},i=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&o(t)}},u=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent="",t.setCustomValidity("")},s=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},l=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){u(e,n,t)})),r.disabled=!0,r.classList.add(t.inactiveButtonClass)};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f,p=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup_type_new-card"),_=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__add-button"),y=document.querySelectorAll(".popup__close"),h=document.querySelector(".profile__title"),b=document.querySelector(".profile__description"),S=document.querySelector(".profile__image"),k=document.forms.edit__profile,E=document.forms.new__place,L=document.forms.new__avatar,g=document.querySelector(".popup_type_image"),C=document.querySelector(".popup_type_new-avatar"),q=g.querySelector(".popup__image"),A=g.querySelector(".popup__caption"),x=document.querySelector(".places__list"),w={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__form__input-error_active"},T=function(e,t){t.submitter.textContent=e?"Сохранение...":"Сохранить"},U=function(e){var t=e.target;t&&(q.src=t.src,q.alt=t.alt,q.textContent=t.alt,A.textContent=t.alt,a(g))};S.addEventListener("click",(function(e){L.reset(),a(C),l(L,w)})),L.addEventListener("submit",(function(n){n.preventDefault();var r,a=L.link.value;T(!0,n),(r=a,t("".concat(e.baseUrl,"users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})})).then((function(){S.style["background-image"]="url('".concat(a,"')"),o(C),L.reset()})).catch((function(e){console.error("Произошла ошибка:",e)})).finally((function(){T(!1,n)}))})),k.addEventListener("submit",(function(n){n.preventDefault();var r=k.name.value,a=k.description.value;T(!0,n),function(n,r){return t("".concat(e.baseUrl,"users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:n,about:r})})}(r,a).then((function(e){h.textContent=e.name,b.textContent=e.about,o(p)})).catch((function(e){console.error("Произошла ошибка:",e)})).finally((function(){T(!1,n)}))})),_.addEventListener("click",(function(){k.name.value=h.textContent,k.description.value=b.textContent,a(p),l(k,w)})),v.addEventListener("click",(function(e){a(m),l(E,w)})),E.addEventListener("submit",(function(n){n.preventDefault(),T(!0,n);var r,a,c={name:n.target.place__name.value,link:n.target.link.value};(r=c.name,a=c.link,t("".concat(e.baseUrl,"cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:a})})).then((function(e){var t={name:e.name,link:e.link,alt:e.name,_id:e._id,owner:{_id:e.owner._id},likes:e.likes||[]};j(t),n.target.reset(),o(m)})).catch((function(e){console.error("Произошла ошибка:",e)})).finally((function(){T(!1,n)}))})),y.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return o(t)}))}));var j=function(n){var o=function(n,o,a,c){var i,u,s=r.querySelector(".card").cloneNode(!0),l=s.querySelector(".card__delete-button"),d=s.querySelector(".card__like-button"),f=s.querySelector(".card__image"),p=s.querySelector(".card__title"),m=s.querySelector(".card__like-qty"),_=n._id;return s.setAttribute("id",_),i=n.likes,u=o,i.some((function(e){return e._id===u}))&&d.classList.add("card__like-button_is-active"),n.owner._id===o?l.addEventListener("click",a):l.remove(),f.src=n.link,f.alt=n.name,p.textContent=n.name,m.textContent=n.likes.length,d.addEventListener("click",(function(n){!function(n,r,o){n.classList.contains("card__like-button_is-active")?function(n){return t("".concat(e.baseUrl,"cards/likes/").concat(n),{method:"DELETE",headers:e.headers})}(o).then((function(e){r.textContent=e.likes.length,n.classList.remove("card__like-button_is-active")})).catch((function(e){return console.log(e)})):function(n){return t("".concat(e.baseUrl,"cards/likes/").concat(n),{method:"PUT",headers:e.headers})}(o).then((function(e){r.textContent=e.likes.length,n.classList.add("card__like-button_is-active")})).catch((function(e){console.error("Произошла ошибка:",e)}))}(n.target,m,_)})),f.addEventListener("click",c),s}(n,f,B,U);x.prepend(o)},B=function(n){var r,o=n.target.closest(".card");(r=o.id,t("".concat(e.baseUrl,"cards/").concat(r),{method:"DELETE",headers:e.headers})).then((function(){o.remove()})).catch((function(e){return console.error("Произошла ошибка:",e)}))};Promise.all([t("".concat(e.baseUrl,"users/me"),{method:"GET",headers:e.headers}),t("".concat(e.baseUrl,"cards"),{method:"GET",headers:e.headers})]).then((function(e){var t,n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,i=[],u=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],c=o[1];f=a._id,t=a,h.textContent=t.name,b.textContent=t.about,S.style["background-image"]='url("'.concat(t.avatar,'")'),k.name.value=t.name,k.description.value=t.about,c.reverse().forEach((function(e){j(e)}))})).catch((function(e){return console.error("Произошла ошибка:",e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(t.querySelectorAll(".popup__form__set")).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);s(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?u(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),s(n,r,t)}))}))}(t,e)}))}))}(w)})();