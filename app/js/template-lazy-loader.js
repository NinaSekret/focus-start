import {getSyncRaw} from './request-helper.js';

let templatesCash = [];

export function getTemplate(path)
{
	console.log(templatesCash);
	if (templatesCash.indexOf(path) == -1) {

	console.log('addtoc');
		templatesCash[path] = getSyncRaw(path);
	}

	console.log(templatesCash);
	return templatesCash[path];
} 