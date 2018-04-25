
import {getFakeProcessPromis} from './request-helper.js'

export const steps = [
{
	hrefNextStep: "basket-contact-info.html",
	hrefPreviousStep: null,
	hrefFirstStep: null,
	fakeProcessPromis: getFakeProcessPromis(0),
	loadFromLocalStorage: emptySaverLoader,
	saveFromLocalStorage: emptySaverLoader
},
{
	hrefNextStep: "basket-credit-card.html",
	hrefPreviousStep: "basket-first-step.html",
	hrefFirstStep:null,
	fakeProcessPromis: getFakeProcessPromis(randTime(3000, 15000)),
	loadFromLocalStorage: pageContactInfoLoader,
	saveFromLocalStorage: pageContactInfoSave
},
{
	hrefNextStep: "basket-finish.html",
	hrefPreviousStep: "basket-contact-info.html",
	hrefFirstStep:"basket-first-step.html",
	fakeProcessPromis: getFakeProcessPromis(randTime(3000, 15000)),
	loadFromLocalStorage: pageCreditCardLoader,
	saveFromLocalStorage: pageCreditCardSave
}
];

function randTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function emptySaverLoader() {}

function pageContactInfoSave() {
	let contactInfo = document.querySelector('.basket-contact-info').children;
	for (let i = 0; i < contactInfo.length; i++) {
		localStorage.setItem('contactInfo.' + i, contactInfo[i].value);
	}


}
function pageContactInfoLoader() {
	let contactInfo = document.querySelector('.basket-contact-info').children;
	for (let i = 0; i < contactInfo.length; i++) {
		contactInfo[i].value = localStorage.getItem('contactInfo.' + i);
	}
}
function pageCreditCardSave() {
	localStorage.setItem('pay.card', document.querySelector('.form-credit-card__main-window-input-namber-card').value);
	localStorage.setItem('pay.month', document.querySelector('.form-credit-card__main-window-input-month').value);
	localStorage.setItem('pay.year', document.querySelector('.form-credit-card__main-window-input-year').value);
	localStorage.setItem('pay.owner', document.querySelector('.form-credit-card__main-window-input-owner').value);
	localStorage.setItem('pay.cvv', document.querySelector('.form-credit-card__secondary-window-input-cvv').value);
}
function pageCreditCardLoader() {
	document.querySelector('.form-credit-card__main-window-input-namber-card').value = localStorage.getItem('pay.card');
	document.querySelector('.form-credit-card__main-window-input-month').value = localStorage.getItem('pay.month');
	document.querySelector('.form-credit-card__main-window-input-year').value = localStorage.getItem('pay.year');
	document.querySelector('.form-credit-card__main-window-input-owner').value = localStorage.getItem('pay.owner');
	document.querySelector('.form-credit-card__secondary-window-input-cvv').value = localStorage.getItem('pay.cvv');
}