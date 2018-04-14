import {objects} from './script3.js';
var request = new XMLHttpRequest();
request.open('GET','/api/app_packages.json',true);
console.log(1);
request.onreadystatechange = function() {
	console.log(2);
  if ((request.readyState==4) && (request.status==200)) {
/*    console.log(request);
    console.log(request.responseText);*/
    	console.log(3);
    	var objectParse = JSON.parse(request.responseText);
    	createElementDiv();
    	return objectParse;
  }
}; 

		request.send();

console.log(4);
	var objectParse = request.onreadystatechange();
	console.log(5);
	console.log(objectParse);

function createElementDiv(objectSettings)
{	


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

setItems(objects);



