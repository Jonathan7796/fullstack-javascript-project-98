// Lógica del juego "Calculadora"

// Función para obtener un número aleatorio entre min y max (inclusive)
import getRandomInt from '../utils/random-number.js';

// Lógica del juego "Calculadora"
const gameCalcLogic = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];

  let question;
  let correctAnswer;

  // Dependiendo del operador, calculamos la respuesta
  switch (operator) {
    case '+':
      question = `${num1} + ${num2}`;
      correctAnswer = num1 + num2;
      break;
    case '-':
      question = `${num1} - ${num2}`;
      correctAnswer = num1 - num2;
      break;
    case '*':
      question = `${num1} * ${num2}`;
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error('Operador desconocido');
  }

  return { question, correctAnswer };
};

export default gameCalcLogic;
