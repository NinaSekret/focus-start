export class CartItem {
	constructor(guid, name, price, quantity, img) {
		this.guid = guid;
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.img = img;
	} 

	getTotalPrice() {	
		return this.quantity * this.price;
	}

	incQuantity() {
		this.quantity++;
	}
	
	decQuantity() {
		this.quantity--;
	}
}