export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b

export const mapOperation = {
	"+": add,
	"-": subtract,
	"×": multiply,
	"÷": divide
}

function toPostfix(infix) {
	const output = [];
	const operators = [];
	const precedence = { '+': 1, '-': 1, "×": 2, '÷': 2 };

	for (const token of infix.match(/\d+|[+\-×÷]/g)) {
		if (!isNaN(token)) {
			output.push(token);
		} else {
			while (operators.length &&
				precedence[operators[operators.length - 1]] >= precedence[token]) {
				output.push(operators.pop());
			}
			operators.push(token);
		}
	}

	while (operators.length) {
		output.push(operators.pop());
	}

	return output;
}

function evaluatePostfix(postfix) {
	const stack = [];

	for (const token of postfix) {
		if (!isNaN(token)) {
			stack.push(Number(token));
		} else {
			const b = stack.pop();
			const a = stack.pop();
			stack.push(mapOperation[token](a, b));
		}
	}

	return stack[0];
}

export function calculate(expression) {
	return evaluatePostfix(toPostfix(expression));
}