import {objectsImages} from './objects-images.js';
import {getSyncJson} from './request-helper.js';

function compileInfoObjects()
{
	let appsItemUrl;
	let promises = [];

	for (let i = 0; i < objectsImages.length; i++) {
		appsItemUrl = '/api/apps/' + objectsImages[i].guid + '.json';
		promises.push(getSyncJson(appsItemUrl));
	}

	Promise.all(promises).then(function(promisesResults) {
		let compileReuslt = [];

		for (let i = 0; i < promisesResults.length; i++) {
			compileReuslt.push({
				img: objectsImages[i].img,
				name: promisesResults[i].name,
				date: promisesResults[i].date
			});
		}

		setItems(compileReuslt);
	});
}

function createElementDiv(objectSettings)
{
	let div = document.createElement('div');
	div.classList.toggle('app-pack__icon-image');

	let image = document.createElement('img');
	image.src = objectSettings.img;
	div.appendChild(image);

	let h4 = document.createElement('h4');
	h4.classList.toggle('caption');
	h4.classList.toggle('caption--h4');
	h4.innerHTML = objectSettings.name;
	div.appendChild(h4);

	let time = document.createElement('time');
	time.classList.toggle('time');
	time.innerHTML = objectSettings.date;
	div.appendChild(time);

	return div;
}

function setItems(objects)
{
	let changeElem = document.getElementsByClassName("app-pack__icon")[0];  
	let randIndex;
	let element;

	for (let i = 0; i < 9; i++) {
		randIndex = Math.floor(Math.random() * objects.length);	 
		element = createElementDiv(objects[randIndex]);
		changeElem.appendChild(element);
		objects.splice(randIndex,1);//что бы объекты не повторялись
	}
}


compileInfoObjects();