// CONSTANTS
const COLORS_ = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// VARIABLES
let boxes = [];
let dots = [[], [], [], [], [], []];
let colors = ['red', 'yellow', 'green', 'blue'];
let colorsAmount = [...colors, ...colors]; //needs to be number of colors set for the round
let boxCount = 0;
let dotCount = 0;

// ELEMENT CREATORS
const boxDiv = document.createElement('div');
const dotDiv = document.createElement('div');
boxDiv.classList.add('container');
dotDiv.classList.add('dot');

//QUERY SELECTORS
//mod operator

// FUNCTIONS

function createBox() {
	const boxDiv = document.createElement('div');
	boxDiv.classList.add('container');
	document.getElementById('gameboard').appendChild(boxDiv);

	return boxDiv;
}

function createDot(event) {
	const dotDiv = document.createElement('div');
	dotDiv.classList.add('dot');
	dotDiv.style.backgroundColor =
		colorsAmount[Math.floor(Math.random() * colorsAmount.length)];
	event.appendChild(dotDiv);
}

// function addColorsToArray() {

// }

function init(numOfColors) {
	//adding containers based off of the num of colors a user selects
	for (let i = 0; i < numOfColors; i++) {
		boxes.push(createBox());
		boxCount++;

		//adding 4 dots for each container
		for (let j = 0; j < 4; j++) {
			dots[i].push(createDot(boxes[boxCount - 1]));
		}
	} //empty boxes
	for (let k = 0; k < 2; k++) {
		boxes.push(createBox());
		boxCount++;
	}
}
init(4);

//amount of arrays that are created varies off of user input

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

//SHUFFLE FUNCTIONALITY

const lastDot = document.getElementsByClassName('dot');
console.log(lastDot);
console.log(gameboard);
console.log(lastDot[0]);

const container = document.getElementsByClassName('container');
console.log(container);

// EVENT LISTENERS
lastDot[0].addEventListener('click', function () {
	console.log('last dot clicked');
	lastDot.style.border = 'black';
});

// MOVING FUNCTIONALITY
// On first click the border is changed to a new color. 
// Next, the user will click the container they wish to move the dot to
// Once moved to new container, border will chance back to normal

function moveDots(box) {
	const lastDot = box.lastElementChild;
	lastDot.pop(box);
	lastDot.push(box);
	box.append(box);
}
function selectDot(lastDot) {
	lastDot[0].style.border = 'black';
}
