let objects = [
	{
		img: "https://pokemonespace.com/jeux/xy/img/ingame/01.png",
		name: "Pokemon № 01",
		date: "01 апреля 2018"
	},
	{
		img: "https://pokemonespace.com/jeux/xy/img/ingame/02.png",
		name: "Pokemon № 02",
		date: "02 апреля 2018"
	},
	{
		img: "https://pokemonespace.com/jeux/xy/img/ingame/03.png",
		name: "Pokemon № 03",
		date: "03 апреля 2018"
	},
	{
		img: "https://pokemonespace.com/jeux/xy/img/ingame/04.png",
		name: "Pokemon № 04",
		date: "04 апреля 2018"
	},
	{
		img: "https://pokemonespace.com/jeux/xy/img/ingame/05.png",
		name: "Pokemon № 05",
		date: "05 апреля 2018"
	},
	{
		img: "https://pokemonespace.com/jeux/xy/img/ingame/06.png",
		name: "Pokemon № 06",
		date: "06 апреля 2018"
	},
	{
		img: "https://pokemonespace.com/jeux/xy/img/ingame/07.png",
		name: "Pokemon № 07",
		date: "07 апреля 2018"
	},
	{
		img: "https://pokemonespace.com/jeux/xy/img/ingame/08.png",
		name: "Pokemon № 08",
		date: "08 апреля 2018"
	},
	{
		img: "https://pokemonespace.com/jeux/xy/img/ingame/09.png",
		name: "Pokemon № 09",
		date: "09 апреля 2018"
	},
	{
		img: "https://pokemonespace.com/jeux/xy/img/ingame/10.png",
		name: "Pokemon № 10",
		date: "10 апреля 2018"
	},
	{
		img: "https://pokemonespace.com/jeux/xy/img/ingame/11.png",
		name: "Pokemon № 11",
		date: "11 апреля 2018"
	}
];

function createElementDiv(objectSettings)
{
	var div = document.createElement('div');
	div.classList.toggle('app-pack__icon-image');

	var image = document.createElement('img');
	image.src = objectSettings.img;
	div.appendChild(image);

	var h4 = document.createElement('h4');
	h4.classList.toggle('caption', 'caption--h4');
	h4.innerHTML = objectSettings.name;
	div.appendChild(h4);

	var time = document.createElement('time');
	time.classList.toggle('time');
	time.innerHTML = objectSettings.date;
	div.appendChild(time);

	return div;
}

function setItems(objects)
{
	var changeElem = document.getElementsByClassName("app-pack__icon")[0];  

		
	for (var i = 0; i < 9; i++) {
		var randIndex = Math.floor(Math.random() * objects.length);	 
		var element = createElementDiv(objects[randIndex]);
		changeElem.appendChild(element);
		objects.splice(randIndex,1);//что бы объекты не повторялись
	}
}

setItems(objects);



