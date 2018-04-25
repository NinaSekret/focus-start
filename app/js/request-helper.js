export function getSyncJson(url) {

  return new Promise(function(resolve, reject) {

    let request = new XMLHttpRequest();
     request.open('GET', url, true);

    request.onload = function() {
      if (this.status == 200) {
      	resolve(JSON.parse(request.responseText));
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

   request.onerror = function() {
      reject(new Error("Network Error"));
    };

     request.send();
  });

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

export function getFakeProcessPromis(msec, url)
{
  return new Promise (function(resolve, reject){
    setTimeout(() => resolve(), msec);
  });
}



/*
export function getSyncRaw(url)
{
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {          
      if (this.status !== 200) {
        resolve(request.responseText);
      }
      request.onerror = function() {
        reject(new Error("Network Error"));
      }

      request.send();
      }
}
*/