import {objectsImages} from './script3.js';

let request = new XMLHttpRequest();
request.open('GET','/api/app_packages.json', true);
request.onreadystatechange = function() {
	if ((request.readyState==4) && (request.status==200)) {
		var objectsDescriptions = JSON.parse(request.responseText);
		let objects = [];


		for (var i = 0; i < objectsDescriptions.length; i++) {
			for (var j = 0; j < objectsImages.length; j++) {
				if (objectsDescriptions[i].guid == objectsImages[j].guid) {
					objects.push({
						img: objectsImages[j].img,
						name: objectsDescriptions[i].name,
						date: objectsDescriptions[i].date
					});
				}
			}
		}

		setItems(objects);
	}
}
request.send();

function createElementDiv(objectSettings)
{	console.log(objectSettings);
	var div = document.createElement('div');
	div.classList.toggle('app-pack__icon-image');

	var image = document.createElement('img');
	image.src = objectSettings.img;
	div.appendChild(image);

	var h4 = document.createElement('h4');
	h4.classList.toggle('caption', 'caption--h4');
	h4.innerHTML = objectSettings.name;
	div.appendChild(h4);

	var time = document.createElement('time');
	time.classList.toggle('time');
	time.innerHTML = objectSettings.date;
	div.appendChild(time);

	return div;
}



function setItems(objects)
{
	var changeElem = document.getElementsByClassName("app-pack__icon")[0];  

	for (var i = 0; i < 9; i++) {
		var randIndex = Math.floor(Math.random() * objects.length);	 
		var element = createElementDiv(objects[randIndex]);
		changeElem.appendChild(element);
		objects.splice(randIndex,1);//что бы объекты не повторялись
	}
}


