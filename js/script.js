// VARIABLES
let boxes = [];
let dots = [[], [], [], [], [], []];
let colors = ['red', 'yellow', 'green', 'blue'];
let colorsAmount = [...colors, ...colors, ...colors, ...colors]; //this shows the number of dots displayed
let boxCount = 0;
let dotCount = 0;
let currentDot;
let userInput;
const plopSound = new Audio('plop.mp3');

// ELEMENT CREATORS
const boxDiv = document.createElement('div');
const dotDiv = document.createElement('div');
const gameboard = document.querySelector('#gameboard');
boxDiv.classList.add('container');
dotDiv.classList.add('dot');

//add the event listener to the gameboard so it can hear all the clicks accross the board. Ref - Julio
gameboard.addEventListener('click', function (event) {
	event.preventDefault();
	//if no dot is grabbed use first if statement, if so, move dot on second click
	if (!currentDot) {
		//inside event listener, before check to see if a dot is already clicked
		if (event.target.classList.contains('container')) {
			//save it as the current dot
			currentDot = event.target.firstElementChild;
			currentDot.style.border = '2px solid black';
		} else if (event.target.classList.contains('dot')) {
			//so user can click the container or dot
			currentDot = event.target.parentNode.firstElementChild;
			currentDot.classList.add('grabbed');
			currentDot.style.border = '2px solid black';
		}
	} else if (currentDot && event.target.classList.contains('container')) {
		currentDot.remove(); // remove it from the dom on second click
		//https://mixkit.co/free-sound-effects/discover/plop/
		plopSound.play();
		currentDot.style.border = 'none';
		//add it to new target
		event.target.prepend(currentDot);
		//deselect current dot
		currentDot = null;
	}
});

// FUNCTIONS

//create a box
function createBox(i) {
	const boxDiv = document.createElement('div');
	boxDiv.classList.add('container');
	boxDiv.setAttribute('id', i);
	gameboard.appendChild(boxDiv);

	return boxDiv;
}

//shuffle the colors - https://bost.ocks.org/mike/shuffle/
function fisherYates(array) {
	var count = array.length,
		randomnumber,
		temp;
	while (count) {
		randomnumber = (Math.random() * count--) | 0;
		temp = array[count];
		array[count] = array[randomnumber];
		array[randomnumber] = temp;
	}
	return array;
}
//set a new array to call the appropriate amound of each color randomly
let newArray = fisherYates(colorsAmount);

//create dot function
function createDot(box) {
	const dotDiv = document.createElement('div');
	dotDiv.classList.add('dot');
	//call array to choose random color
	dotDiv.style.backgroundColor = newArray[0];
	//shift to move to next set of colors (this happens until you create all the dots in the init function and covers all the ones listed in the array)
	newArray.shift(1);
	box.appendChild(dotDiv);
	return dotDiv;
}

//game initialization
function init(numOfColors) {
	//add the number of containers for the level (stretch goal, will be user selected instead of multiple sheets. GA Dots game referenced on how to switch between JS and HTML files)
	for (let i = 0; i < numOfColors; i++) {
		boxes.push(createBox(i));
		boxCount++;

		//adding 4 dots for each container
		for (let j = 0; j < 4; j++) {
			dots[i].push(createDot(boxes[boxCount - 1]));
		}
	}
	//create 2 empty dots
	for (let k = 4; k < 6; k++) {
		boxes.push(createBox(k));
		boxCount++;
	}
}
init(4);

//RESTART BUTTON
//https://stackoverflow.com/questions/30347724/refresh-page-with-reset-button
const restartBtn = document.querySelector('.restartBtn');
restartBtn.addEventListener('click', function () {
	document.location.reload(true);
});

// MODAL - HOW TO PLAY FUNCTIONS

const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

const openModal = () => {
	modal.style.display = 'block';
};
const closeModal = () => {
	modal.style.display = 'none';
};

openBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

setTimeout(openModal, 2000);

// Light and Dark Background
// Assistance from Landon :)

const toggleTheme = document.querySelector('.switch');

toggleTheme.addEventListener('click', darkTheme);

function darkTheme() {
	let theme = document.getElementById('theme');
	if (theme.getAttribute('href') == `./css/style.css`) {
		theme.setAttribute('href', `./css/dark.css`);
	} else {
		theme.setAttribute('href', `./css/style.css`);
	}
}
