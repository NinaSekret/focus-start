/**
* TODO добавить доку
*/
export function getSyncJson(url)
{
	let request = new XMLHttpRequest();

	request.open('GET', url, false);
	request.send(null);
	if (request.status !== 200) {
		throw 'Bad connection :('
	}

	return JSON.parse(request.responseText);
}







/**
* TODO добавить доку
*/
export function getSyncRaw(url)
{
	let request = new XMLHttpRequest();

	request.open('GET', url, false);
	request.send(null);
	if (request.status !== 200) {
		throw 'Bad connection :('
	}

	return request.responseText;
}