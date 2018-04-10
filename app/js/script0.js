function getRandomElement()
{
	var allElements = document.querySelectorAll('*');
	var randIndex = getRandInt(0, allElements.length - 1);
	var randElement = allElements[randIndex];

	return randElement;
}

function getRandomColor()
{
	var rgbArr = [getRandInt(0, 256), getRandInt(0, 256), getRandInt(0, 256)];

	return 'rgb('.concat(rgbArr.join(','), ')');
}


function getRandInt(min, max)
 {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);

    return rand;
  }

 setInterval( function() {

 	var element = getRandomElement();
 	element.style.backgroundColor = getRandomColor();

 },200);

 setInterval( function() {

 	var element = getRandomElement();
 	element.style.backgroundColor = 'white';

 },200);

// var element = getRandomElement();
// element.style.backgroundColor = getRandomColor();
// console.log(element.style);
