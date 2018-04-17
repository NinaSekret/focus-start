import {getSyncJson} from './request-helper.js';
import {renderTemplate} from './render-template.js';
import {getTemplate} from './template-lazy-loader.js'

export function loadPage(appGuid, templatePath)
{
	let appsItemUrl = '/api/apps/' + appGuid + '.json';
	let objectDescription = getSyncJson(appsItemUrl);
	let template = getTemplate(templatePath);

	let renderTemplateResult = renderTemplate(template, objectDescription)
	let container = document.getElementsByClassName("wrapper-section")[0]; 
	container.innerHTML = renderTemplateResult;
}
