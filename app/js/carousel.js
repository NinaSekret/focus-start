
document.getElementById('slider-left').onclick = function () {
	slidermMove(TO_LEFT);
};
document.getElementById('slider-right').onclick = function () {
	slidermMove(TO_RIGHT);
};

let allDots = document.querySelectorAll('.app-pack__slider>div');
const TO_LEFT = 1;
const TO_RIGHT =-1;
let left = 0;

function slidermMove(direction){
	let allImagesInDiv = document.querySelector('#imgContainer').querySelectorAll('.app-pack__icon-image');
	let imgContainer = document.getElementById('imgContainer');
	let leftPrepare = left + direction * 362;

	if (leftPrepare > 0) {
		return ;
	}
	if (leftPrepare < -1 * (allImagesInDiv.length-3) * 362) {
		return ;
	}

	left = leftPrepare;
	imgContainer.style.left = left +'px';

	console.log( imgContainer.style.left);
	console.log(left);
}

function sliderSet(dotsNum){
	 left=-1*(dotsNum-1)*362;
	 imgContainer.style.left = left +'px';

}

onclick(allDots);
function onclick (allDots){

	for (var i = 0; i < allDots.length; i++) {
		allDots[i].dataset.dotNumber = i;
		allDots[i].onclick = function () {
			sliderSet(this.dataset.dotNumber);
		};
	}

}