let request = new XMLHttpRequest();
request.open('GET','/api/app_menu.json', true);
request.onreadystatechange = function() {
	if ((request.readyState==4) && (request.status==200)) {
		var appMenuItems = JSON.parse(request.responseText);

		renderLeftMenu(appMenuItems);


	}
}

request.send();

function renderLeftMenu(appMenuItems)
{
	document.createElement('template');
	let link;
	let listItem =document.querySelector('#appNavTemplate');
	for (var i = 0; i < appMenuItems.length; i++) {

		link = listItem.content.querySelector('li>a');
		link.setAttribute('href', appMenuItems[i].href);
		link.innerHTML = appMenuItems[i].name;

		let li = document.getElementsByClassName("catalog-app__list")[0];
		let clone = document.importNode(listItem.content,true);
		li.appendChild(clone);

	}

	let menuItems = document.getElementsByClassName("catalog-app__list-item");
	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].onclick =  menuItemClickHandler;
	}

}



function menuItemClickHandler(event)
{	
	let menuItems = document.getElementsByClassName('catalog-app__list-item');

	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].classList.remove("catalog-app__list-item--active");

	}
	console.log(event.srcElement.getAttribute('href'));
	loadPage(event.srcElement.getAttribute('href'));
	
	event.srcElement.classList.toggle("catalog-app__list-item--active");
	return false;
}