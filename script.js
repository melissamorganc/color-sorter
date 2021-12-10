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
const gameboard = document.querySelector('#gameboard');
boxDiv.classList.add('container');
dotDiv.classList.add('dot');

gameboard.addEventListener('click', function (event) {
	if (event.target.classList.contains('container')) {
		console.log(event.target.firstElementChild);
	}
});

//QUERY SELECTORS
//mod operator

// FUNCTIONS

function createBox(i) {
	const boxDiv = document.createElement('div');
	boxDiv.classList.add('container');
	boxDiv.setAttribute('id', i);
	gameboard.appendChild(boxDiv);

	return boxDiv;
}

function createDot(box) {
	const dotDiv = document.createElement('div');
	dotDiv.classList.add('dot');
	dotDiv.style.backgroundColor =
		colorsAmount[Math.floor(Math.random() * colorsAmount.length)];
	// dotDiv.addEventListener// click and move functionality
	box.appendChild(dotDiv);
	return dotDiv;
}
//try to pick up each dot and its array position
// function addColorsToArray() {

// }

function init(numOfColors) {
	//adding containers based off of the num of colors a user selects
	for (let i = 0; i < numOfColors; i++) {
		boxes.push(createBox(i));
		boxCount++;

		//adding 4 dots for each container
		for (let j = 0; j < 4; j++) {
			dots[i].push(createDot(boxes[boxCount - 1]));
			// const dotsPerGroup = dots.length / numOfColors;
			// // numOfColors.map(('', i) => dots.slice(i * dotsPerGroup, (i + 1) * dotsPerGroup));
			// console.log(dotsPerGroup);
		}
	}
	for (let k = 4; k < 6; k++) {
		boxes.push(createBox(k));
		boxCount++;
	} //empty boxes
}
init(4);
console.log(dots);
console.log(boxes);

//RESTART BUTTON
const restartBtn = document.querySelector('.restartBtn');
restartBtn.addEventListener('click', function () {
	document.location.reload(true);
});

//Bug - adds extra empty boxesc

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
//////// CONSOLE LOG TESTS
// const lastDot = document.getElementsByClassName('dot');
// console.log(lastDot);
// console.log(gameboard);
// console.log(lastDot[0]);

// console.log(boxes);
// console.log(boxDiv);

// THIS IS WHAT I DID TO BE ABLE TO SELECT ALL THE BOXES

// let clickAllBoxes = function () {
// 	let attribute = boxes.getAttribute('data-myattribute');
// 	console.log(attribute);
// };
// for (let i = 0; i < boxes.length; i++) {
// 	boxes[i].addEventListener('click', function () {
// 		console.log('you clicked the container');
// 		dots.pop([i][dots.length - 1]);
// 	});
// }
// console.log(boxes);

// 10:12 PM: THIS ONE SELECTED THE DOTS BUT RETURNED A NULL VALUE
// 10:28 PM: I can now select every dot
// const dotTest = document.querySelectorAll('.dot');
// const dotTestArr = [...dotTest];
// console.log(dotTestArr);

// dotTest.forEach((element) =>
// 	element.addEventListener('click', (event) => {
// 		element.setAttribute('style', 'border: 1px solid black')
// 		//cannot set attribute...
// 		// document.body.style.backgroundColor = "red";

// 		// console.log(element.indexOf());
// 		// - this returns "-1" for every dot
// 	})
// );

// let clickAllDots = function() {
// 	let dotAttribute = dots[i].getAttribute("data-mydotattribute");
// 	console.log(dotAttribute);
// }
// console.log(clickAllDots)
// for (let i = 0; i < dots.length; i++) {
// 	dots.addEventListener('click', function() {
// 		console.log('you clickd the dot')
// 	})
// }
//Notes - https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class

// EVENT LISTENERS
// lastDot[0].addEventListener('click', function () {
// 	console.log('last dot clicked');
// 	// lastDot.style.borderColor = 'black';
// });
//ERROR on changing colors

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
// function selectDot(lastDot) {
// 	lastDot[0].style.border = 'black';
// }

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
