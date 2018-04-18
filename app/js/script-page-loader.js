import {getSyncJson} from './request-helper.js';
import {renderTemplate} from './render-template.js';
import {getTemplate} from './template-lazy-loader.js'
import {objectsImages} from './objects-images.js';

export function loadPage(appGuid, templatePath)
{	

	let appsItemUrl = '/api/apps/' + appGuid + '.json';
	let objectDescription = getSyncJson(appsItemUrl);
	let template = getTemplate(templatePath);

	//добавление ссылки на картинку в парамс
	for (let i = 0; i < objectsImages.length; i++) {
		if (objectsImages[i].guid == appGuid){
			objectDescription['img'] = objectsImages[i].img;			
		}
	}
	let renderTemplateResult = renderTemplate(template, objectDescription);
	let container = document.getElementsByClassName("wrapper-section")[0]; 
	container.innerHTML = renderTemplateResult;
}
