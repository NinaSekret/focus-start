import {steps} from './order-steps.js';
import {getFakeProcessPromis} from './request-helper.js'

let curentStep = document.querySelector('.hrefNextStep').dataset.step;
steps[curentStep].loadFromLocalStorage();

function handlerStep () {
	console.log(steps);
	let hrefBtn = document.querySelectorAll('.hrefNextStep');
	for (var i = 0; i < hrefBtn.length; i++) {
		hrefBtn[i].addEventListener("click", function(){
			nextStep(this.dataset.step);
		});

	}

	let hrefBtn2 = document.querySelectorAll('.hrefPreviousStep');
	for (var i = 0; i < hrefBtn2.length; i++) {
		hrefBtn2[i].addEventListener("click", function(){
			priventStep(this.dataset.step);
		});

	}

	let hrefBtn3 = document.querySelectorAll('.hrefFirstStep');
	for (var i = 0; i < hrefBtn3.length; i++) {
		hrefBtn3[i].addEventListener("click", function(){
			firstStep(this.dataset.step);
		});

	}
}

function priventStep (stepNumber) {
	loader ();
	steps[stepNumber].fakeProcessPromis.then(function (response) 
	{
		document.location.href=steps[stepNumber].hrefPreviousStep;
	});
}

function nextStep (stepNumber) {
	loader ();
	steps[stepNumber].fakeProcessPromis.then(function (response) 
	{
		document.location.href=steps[stepNumber].hrefNextStep;
	});	
}

function firstStep (stepNumber) {
	loader ();
	steps[stepNumber].fakeProcessPromis.then(function (response) 
	{
		document.location.href=steps[stepNumber].hrefFirstStep;	
	});
}

function loader () {
	let loader = document.querySelector('.container');
	console.log(loader);
	loader.classList.add('enabled');
	loader.classList.remove('disabled');
}
function saveItemsToLocalStorage() {
	localStorage.setItem('steps', JSON.stringify(this.steps));
}

function loadItemsFromLocalStorage() {
	let storageData = localStorage.getItem('steps');
	let storageDataParsed;
	
	try {
		storageDataParsed = JSON.parse(storageData);
	} catch (e) {
		return;
	}

	if (!Array.isArray(storageDataParsed)) {
		return;
	}
}

handlerStep();

setInterval(function() {
	steps[curentStep].saveFromLocalStorage();
}, 1000)


