//import {objectsImages} from './objects-images.js';

export function renderTemplate(template, params) 
{
	console.log(params);
	console.log(objectsImages);
	let regex;

	for (var key in params) {
	  	if (!Array.isArray(params[key])) {
			regex = new RegExp('{\%' + key + '\%}', 'g');
		  	template = template.replace(regex, params[key]);
		  	continue;
	  	}

		for (var i = 0; i < params[key].length; i++) {
			regex = new RegExp('{\%' + key + '_' + i + '\%}', 'g');
		  	template = template.replace(regex, params[key][i]);					
		}

		// for (let j = 0; j < objectsImages.length; j++) {
	 //  		if (objectsImages[j].guid == params.guid){
	 //  		template = template.replace(regex, objectsImages[j].img);
	 //  		}	
	 //  	}
	}

	return template;
}