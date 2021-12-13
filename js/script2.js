// VARIABLES
let boxes = [];
let dots = [[], [], [], [], [], [], []];
let colors = ['red', 'yellow', 'green', 'blue', 'purple'];
let colorsAmount = [...colors, ...colors, ...colors, ...colors]; //needs to be number of colors set for the round
let boxCount = 0;
let dotCount = 0;
let currentDot;
// let newArray = fisherYates(colorsAmount);

// ELEMENT CREATORS
const boxDiv = document.createElement('div');
const dotDiv = document.createElement('div');
const gameboard = document.querySelector('#gameboard');
boxDiv.classList.add('container');
dotDiv.classList.add('dot');

//if no dot is grabbed use grabadot, if not, move dot when clicked
//grab a dot function
gameboard.addEventListener('click', function (event) {
	// event.preventDefault();
	if (!currentDot) {
		if (event.target.classList.contains('container')) {
			currentDot = event.target.firstElementChild;
			currentDot.style.border = '2px solid black';
		} else if (event.target.classList.contains('dot')) {
			currentDot = event.target.parentNode.firstElementChild;
			currentDot.style.border = '2px solid black';
			currentDot.classList.add('grabbed');
		}
	} else if (currentDot && event.target.classList.contains('container')) {
		currentDot.remove(); // remove it from the dom on second click
		currentDot.style.border = 'none';
		event.target.prepend(currentDot);
		currentDot = null;
	}
});

// FUNCTIONS

function createBox(i) {
	const boxDiv = document.createElement('div');
	boxDiv.classList.add('container');
	boxDiv.setAttribute('id', i);
	gameboard.appendChild(boxDiv);

	return boxDiv;
}

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
let newArray = fisherYates(colorsAmount);

function createDot(box) {
	const dotDiv = document.createElement('div');
	dotDiv.classList.add('dot');
	dotDiv.style.backgroundColor = newArray[0];
	newArray.shift(1);
	box.appendChild(dotDiv);
	return dotDiv;
}

function init(numOfColors) {
	//adding containers based off of the num of colors a user selects
	for (let i = 0; i < numOfColors; i++) {
		boxes.push(createBox(i));
		boxCount++;

		//adding 4 dots for each container
		for (let j = 0; j < 4; j++) {
			dots[i].push(createDot(boxes[boxCount - 1]));
		}
	}
	for (let k = 4; k < 6; k++) {
		boxes.push(createBox(k));
		boxCount++;
	} //empty boxes
}
init(5);

//RESTART BUTTON
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

// setTimeout(openModal, 2000);

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
