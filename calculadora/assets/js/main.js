import { calculate, mapOperation } from '../../node_modules/@labsjavascript/calculator/index.js';

const input = document.getElementById('input'),
	number = document.querySelectorAll('.numbers div'),
	operators = document.querySelectorAll('.operators div'),
	result = document.getElementById('result'),
	clear = document.getElementById('clear')

let resultDisplayed = false;

number.forEach((buttonNumber) => {
	buttonNumber.addEventListener("click", function (e) {
		const lastChar = input.innerHTML[input.innerHTML.length - 1];
		if (resultDisplayed === false) {
			input.innerHTML += e.target.innerHTML;
		} else if (resultDisplayed === true && Object.keys(mapOperation).includes(lastChar)) {
			resultDisplayed = false;
			input.innerHTML += e.target.innerHTML;
		} else {
			resultDisplayed = false;
			input.innerHTML = "";
			input.innerHTML += e.target.innerHTML;
		}

	});
});

operators.forEach((buttonOperator) => {
	buttonOperator.addEventListener("click", function (e) {
		const lastChar = input.innerHTML[input.innerHTML.length - 1];
		if (Object.keys(mapOperation).includes(lastChar)) {
			const newString = input.substring(0, input.length - 1) + e.target.innerHTML;
			input.innerHTML = newString;
		} else if (input.length == 0) {
			alert("Primero ingrese un número");
		} else {
			input.innerHTML += e.target.innerHTML;
		}
	});
});

result.addEventListener("click", function () {
	input.innerHTML = calculate(input.innerHTML);
	resultDisplayed = true;
});

clear.addEventListener("click", function () {
	input.innerHTML = "";
})