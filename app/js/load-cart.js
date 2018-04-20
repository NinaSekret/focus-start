import {Cart} from './classes/cart.js';
import {CartItem} from './classes/cart-item.js';

function renderCart() {

	//Cart.getInstance().addItem(new CartItem(1,2,3,1,'/assets/img/shot-2.jpg'));
	//Cart.getInstance().addItem(new CartItem(1,2,3,1,'/assets/img/shot-2.jpg'));
	document.createElement('template');

	let itemElemenets = Cart.getInstance().getItems();
	let listItem = document.querySelector('#render-template');
	let name;
	let link;
	let priceItem;
	let priceTotal;
	let quantity;
	let clone;
	let castElements;
	let deleteBtn;
	let tr;
	let currentTr;

	for (var i = 0; i < itemElemenets.length; i++) {
		currentTr = listItem.content.querySelector('.basket-first-step__line');
		currentTr.dataset.guid = itemElemenets[i].guid;

		name = listItem.content.querySelector('.basket-first-step__cell-name-app');
		name.innerHTML = itemElemenets[i].name;
		link = listItem.content.querySelector('.basket-first-step__img');
		link.setAttribute('src', itemElemenets[i].img);
		priceItem = listItem.content.querySelector(".basket-first-step__cell-cast");
		priceItem.innerHTML = '&#36;' + itemElemenets[i].price;

		quantity = listItem.content.querySelector('.form-option__input');
		quantity.setAttribute('placeholder', itemElemenets[i].quantity);

		castElements = listItem.content.querySelectorAll(".basket-first-step__cell-cast");
		priceTotal = castElements[castElements.length - 1];
		priceTotal.innerHTML = '&#36;' + itemElemenets[i].getTotalPrice();

		deleteBtn = listItem.content.querySelector('.button-delete');
		deleteBtn.dataset.guid = itemElemenets[i].guid;
		
		let tr = document.querySelector(".basket-first-step__table");
		clone = document.importNode(listItem.content,true);
		tr.appendChild(clone);
	}
}

function addRemoveHandlers()
{
	let removeButtons = document.querySelectorAll('.button-delete');
	for (let i = 0; i < removeButtons.length; i++) {
		removeButtons[i].onclick = function() {
			removeCartItem(removeButtons[i].dataset.guid);
		}
	}
}

function removeCartItem(guid)
{
	Cart.getInstance().deleteItem(guid);
	let cartItemElement = document.querySelector('tr[data-guid="' + guid + '"]');
	cartItemElement.remove();
}

renderCart();
addRemoveHandlers();
