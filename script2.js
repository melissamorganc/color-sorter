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

// ALL GAMEBOARD MATERIAL CREATION
// Making my boxes
let boxCount = 0;
let boxes = [];
let dots = [];
let colors = ['red', 'green', 'yellow', 'blue'];
let colorsAmount = [...colors, ...colors, ...colors, ...colors];

//global variable is dark is true, dark colors and background -

const boxDiv = document.createElement('div');
boxDiv.classList.add('container');

function createBox() {
	const boxDiv = document.createElement('div');
	boxDiv.classList.add('container');
	document.getElementById('gameboard').appendChild(boxDiv);
	return boxDiv;
}
// create 4 boxes for level 1 //init to push more colors into array, create more containers
for (let i = 0; i < 4; i++) {
	boxes.push(createBox());
	boxCount++;
	for (let j = 0; j < 4; j++) {
		dots.push(createDot(boxes[boxCount - 1]));
	}
}
function emptyBoxes() {
	for (let i = 0; i < 2; i++) {
		boxes.push(createBox());
		boxCount++;
	}
}
emptyBoxes();
console.log(boxes[1]);

console.log(boxDiv);

// Making the dots

let dotCount = 0;

const dotDiv = document.createElement('div');
dotDiv.classList.add('dot');

function createDot(box) {
	const dotDiv = document.createElement('div');
	dotDiv.classList.add('dot');
	dotDiv.style.backgroundColor =
		colorsAmount[Math.floor(Math.random() * colors.length)]; // iterate through the colorsAmount
	// shuffle(...colors);
	box.appendChild(dotDiv);
	console.log(dotDiv);
}
//shuffle through the array https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

//dark theme
// function changeTheme() {
//     isDarkTheme = !isDarkTheme;
//     isDarkTheme
//     ?
// }

//creating a deck of cards example
//13 ranks - 4 dots
//4 suits - # of colors

let exDots = ['dot1', 'dot2', 'dot3', 'dot4'];
let exColors = ['red', 'green', 'yellow', 'blue'];
let exEmptyArr = [];

for (let dotCounter = 0; dotCounter < 4; dotCounter++) {
	for (let colorCounter = 0; colorCounter < 4; colorCounter++) {
		console.log(exDots[dotCounter] + exColors[colorCounter]);
		exEmptyArr.push(exDots[dotCounter] + exColors[colorCounter]);
	}
}
console.log(exEmptyArr);

function shuffle(colorsArray) {
	let currentIndex = colorsArray.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	return array;
}
