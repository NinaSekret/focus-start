import {CartItem} from './cart-item.js';

/** 
 * Применяем паттерн singletone, 
 * так как all time нам нужен только один экземпляр корзины
 */

let cartInstance;

export class Cart {
	constructor() {
		if (cartInstance) {
			// Если кто то начнетт несолько раз вызывать конструктор, мы ему подскажем, что так делать не надо
			throw 'Для получения экземпляра корзины используйте метод getInstance()';
		}

		this.items = [];
		this.loadItemsFromLocalStorage();
	}

	static getInstance() {
		if (!cartInstance) {
			cartInstance = new Cart();			
		}

		return cartInstance;
	}

	addItem(cartItem) {
		let existItem = this.getItemEntityByGuid(cartItem.guid);

		if (!existItem) {
			this.items.push(cartItem);
		} else {
			existItem.incQuantity();
		}
		
		this.saveItemsToLocalStorage();
	}

	incItemQuantity(guid){
	   this.getItemEntityByGuid(guid).incQuantity();
	}
	decItemQuantity(guid){
		this.getItemEntityByGuid(guid).decQuantity();
	}

	deleteItem(guid) {
		for (var i = 0; i < this.items.length; i++) {
			if(guid == this.items[i].guid) {
				this.items.splice(i, 1);
				this.saveItemsToLocalStorage();
				
				return;
			}
		}
	}

	getItems() {
		return this.items;
	}

	getTotalSum(){
		let result = 0;
		for (var i = 0; i < this.items.length; i++) {
			result += this.items[i].getTotalPrice();	
		}
		return result;
	}

	getItemEntityByGuid(guid) {
		for (var i = 0; i < this.items.length; i++) {
			if(guid == this.items[i].guid) {
				return this.items[i];
			}
		}

		return null;
	}

	saveItemsToLocalStorage() {
		localStorage.setItem('cartItems', JSON.stringify(this.items));
	}

	loadItemsFromLocalStorage() {
		let storageData = localStorage.getItem('cartItems');
		let storageDataParsed;
		
		try {
	        storageDataParsed = JSON.parse(storageData);
	    } catch (e) {
	        return;
	    }

	    if (!Array.isArray(storageDataParsed)) {
	    	return;
	    }

	    this.items = [];
	    for (let i = 0; i < storageDataParsed.length; i++) {
	    	this.addItem(new CartItem(
	    		storageDataParsed[i].guid,
	    		storageDataParsed[i].name,
	    		storageDataParsed[i].price,
	    		storageDataParsed[i].quantity,
	    		storageDataParsed[i].img
    		));	
	    }
	}

}