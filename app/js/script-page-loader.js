function loadPage(pageHref) 
{
	let request = new XMLHttpRequest();
	request.open('GET', pageHref, true);
	request.onreadystatechange = function() {
		if ((request.readyState==4) && (request.status==200)) {

			
			let container = document.getElementsByClassName("wrapper-section")[0]; 
			container.innerHTML=request.responseText;
		}
	}
	request.send();
}
