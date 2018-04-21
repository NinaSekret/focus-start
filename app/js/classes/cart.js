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
			console.log('cart is created');
		}


		console.log('cart is returned');
		return cartInstance;
	}

	addItem(cartItem) {
		let quantityIsInc = false;

		for (var i = 0; i < this.items.length; i++) {
			if (cartItem.guid == this.items[i].guid){
				this.items[i].incQuantity();
				quantityIsInc = true;
			}
		}

		if (!quantityIsInc) {
			this.items.push(cartItem);
		}
		
		this.saveItemsToLocalStorage();
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