import {getSyncRaw} from './request-helper.js';

let templatesCash = {};

export function getTemplate(path)
{
	if (templatesCash.hasOwnProperty(path) == false) {
		templatesCash[path] = getSyncRaw(path);
	}

	return templatesCash[path];
} 


// export function getTemplate(path)
// {
// 	if (templatesCash.hasOwnProperty(path) == false) {
// 		templatesCash[path] = getSyncRaw(path);

// 	getSyncRaw(path).then(function (response) 
// 	{
// 		test(response, appGuid, templatePath);
// 	});
// 	}

// 	return templatesCash[path];
// } 