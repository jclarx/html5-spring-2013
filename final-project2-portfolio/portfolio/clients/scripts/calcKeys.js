(function () {
    'use strict';

    var display = document.getElementById('display'),
        controls = document.getElementById('controls'),
        numberBtns = controls.querySelectorAll('.number'),
        operatorBtns = controls.querySelectorAll('.operator'),
        enterBtn = controls.querySelector('#enter'),
        clearBtn = controls.querySelector('#clear'),
        displayText = '0',
        operand1 = '',
        operand2 = '',
        operator = '',
        updateDisplay = function () {
            display.innerHTML = displayText;
        },
        handleNumber = function (e) {
            var num = e.target.textContent;
            if (operator === '') {
                operand1 += num;
                displayText = operand1;
            } else {
                operand2 += num;
                displayText = operand2;
            }
            updateDisplay();
        },
        handleOperator = function (e) {
            var op = e.target.textContent;
            if (operator === '') {
                operator = op;
            }
        },

        computeAnswer = function () {
            var result = 0;

            if (operand1 !== '' && operator !== '' && operand2 !== '') {
                operand1 = parseInt(operand1, 10);
                operand2 = parseInt(operand2, 10);

                switch (operator) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
				case '√':
					result = Math.sqrt(operand1);
					break;
                case 'ex':
					result = Math.pow(operand1, operand2);
					break;

                } //end of switch

                if (result.toString().length > 10) {
                    displayText = result.toPrecision(10).toString();
                } else {
                    displayText = result.toString();
                }

                updateDisplay();

                operand1 = '';
                operand2 = '';
                operator = '';
            }
        },
        reset = function () {
            operand1 = '';
            operand2 = '';
            operator = '';

            displayText = '0';
            updateDisplay();
        },
// These two functions process keyboard entries
        handlekeyboardNumber = function (num) {
			var result = 0;
			if (operand1 === '' && operator !== '' && operand2 === '') {
				operand1 = result.toString();
			}
			if (operator === '') {
				operand1 += num;
				displayText = operand1;
			} else {
				operand2 += num;
				displayText = operand2;
			}
			updateDisplay();
		},
        handlekeyboardOperator = function (op) {
			if (operand1 !== '' && operator !== '' && operand2 !== '') {
				computeAnswer();
			}
			operator = op;
        }, //;

        ii = 0,
        len = 0;

// end of var statements 
    for (ii = 0, len = numberBtns.length; ii < len; ii += 1) {
        numberBtns[ii].addEventListener('click', handleNumber, false);
    }

    for (ii = 0, len = operatorBtns.length; ii < len; ii += 1) {
        operatorBtns[ii].addEventListener('click', handleOperator, false);
    }

    enterBtn.addEventListener('click', computeAnswer, false);
    clearBtn.addEventListener('click', reset, false);

// This is the code that activates the keyboard entry.
	document.addEventListener('keypress', function (evt) {
		var keyPressed;
		if (window.event) {
			keyPressed = evt.keyCode;
		} else if (evt.which) {
			keyPressed = evt.which;
		}
		evt.preventDefault();
		switch (keyPressed) {
		case 13:
			// Enter Key
			computeAnswer();
			break;
		case 42:
			// Multiplication Key
			handlekeyboardOperator('*');
			break;
		case 43:
			// Addition Key
			handlekeyboardOperator('+');
			break;
		case 45:
			// Subtraction Key
			handlekeyboardOperator('-');
			break;
		case 47:
			// Division Key
			handlekeyboardOperator('/');
			break;
		case 48:
			// Number 0 Key
			handlekeyboardNumber('0');
			break;
		case 49:
			// Number 1 Key
			handlekeyboardNumber('1');
			break;
		case 50:
			// Number 2 Key
			handlekeyboardNumber('2');
			break;
		case 51:
			// Number 3 Key
			handlekeyboardNumber('3');
			break;
		case 52:
			// Number 4 Key
			handlekeyboardNumber('4');
			break;
		case 53:
			// Number 5 Key
			handlekeyboardNumber('5');
			break;
		case 54:
			// Number 6 Key
			handlekeyboardNumber('6');
			break;
		case 55:
			// Number 7 Key
			handlekeyboardNumber('7');
			break;
		case 56:
			// Number 8 Key
			handlekeyboardNumber('8');
			break;
		case 57:
			// Number 9 Key
			handlekeyboardNumber('9');
			break;
		case 61:
			// Equal Key
			computeAnswer();
			break;
		case 12:
			// clear key on number pad to reset
			reset();
			break;
		case 32:
			// use spacebar to reset
			reset();
			break;
		case 67:
			// uc C Key to reset
			reset();
			break;
		case 99:
			// lc c Key to reset
			reset();
			break;
		}

    });
}());