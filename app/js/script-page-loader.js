import {getSyncJson} from './request-helper.js';
import {renderTemplate} from './render-template.js';
import {getTemplate} from './template-lazy-loader.js'
import {objectsImages} from './objects-images.js';

// TODO delete this
import {Cart} from './classes/cart.js';
import {CartItem} from './classes/cart-item.js'


export function loadPage(appGuid, templatePath)
{
	let appsItemUrl = '/api/apps/' + appGuid + '.json';

	getSyncJson(appsItemUrl).then(function (response) 
	{
		test(response, appGuid, templatePath);
	});
}

function test(objectDescription, appGuid, templatePath){
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

	let addItemBtn = document.getElementById('addItemBtn');

	addItemBtn.onclick = function(addItemBtn) {
		let cartItem = new CartItem(objectDescription.guid, objectDescription.name, objectDescription.price_value, 1, objectDescription.img);
		Cart.getInstance().addItem(cartItem);
		return false;
	}
}

