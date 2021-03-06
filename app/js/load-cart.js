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
	let priceAllElement;
	let quantity;
	let clone;
	let castElements;
	let deleteBtn;
	let tr;
	let currentTr;
	let refreshInc;
	let refreshDec; 

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

		refreshInc = listItem.content.querySelector('.form-option__btn-right');
		refreshInc.dataset.guid = itemElemenets[i].guid;

		refreshDec = listItem.content.querySelector('.form-option__btn-left');
		refreshDec.dataset.guid = itemElemenets[i].guid;
		
		let tr = document.querySelector(".basket-first-step__table tbody");
		clone = document.importNode(listItem.content, true);
		tr.appendChild(clone);
	}
	priceAllElement = document.querySelector('.basket-first-step__total-cost');
	priceAllElement.innerHTML = '&#36;' + Cart.getInstance().getTotalSum();




	addRemoveHandlers();
	refreshQuantity();
	refreshTotalSum();
	console.log('render');

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

function refreshTotalSum()
{
	let refreshButtons = document.querySelectorAll('.button-delete, .form-option__btn-right, .form-option__btn-left');
	for (var i = 0; i < refreshButtons.length; i++) {
		refreshButtons[i].addEventListener('click', function() {
			let priceAllElement = document.querySelector('.basket-first-step__total-cost');
			priceAllElement.innerHTML = '&#36;' + Cart.getInstance().getTotalSum();	

		});
	}
}

function refreshQuantity()
{
	let refreshQuantityButtonInc = document.querySelectorAll('.form-option__btn-right');
	let refreshQuantityButtonDec = document.querySelectorAll('.form-option__btn-left');

		console.log(refreshQuantityButtonInc);

	for (var i = 0; i < refreshQuantityButtonInc.length; i++) {
		refreshQuantityButtonInc[i].addEventListener('click', function() {
			Cart.getInstance().incItemQuantity(this.dataset.guid);
			let quantity2 = Cart.getInstance().getItemEntityByGuid(this.dataset.guid).quantity;
			let quantity = document.querySelector('.form-option__input');
			quantity.setAttribute('placeholder', quantity2);
			
			
			clearCartHtml();
			renderCart();

		});
	}
	for (var j = 0; j < refreshQuantityButtonDec.length; j++) {
		refreshQuantityButtonDec[j].addEventListener('click', function() {
			Cart.getInstance().decItemQuantity(this.dataset.guid);
			let quantity1 = Cart.getInstance().getItemEntityByGuid(this.dataset.guid).quantity;
			let quantity = document.querySelector('.form-option__input');
			quantity.setAttribute('placeholder', quantity1);
			

			clearCartHtml();
			renderCart();
		});
	}

}

function clearCartHtml() {
	let tableRows = document.querySelectorAll('table .basket-first-step__line');
	for (let i=0; i < tableRows.length; i++) {
		tableRows[i].remove()
	}
}

renderCart();//если вызвать раньше удаления элемента, то пересчет суммы будет работать не корректно