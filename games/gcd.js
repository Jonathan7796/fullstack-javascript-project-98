import getRandomInt from '../utils/random-number.js';
// Función para calcular el MCD de dos números
const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// Función principal del juego
const gameGcdLogic = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1}  ${num2}`;
  // Calcular el MCD correcto
  const correctAnswer = gcd(num1, num2);

  return { question, correctAnswer };
};

export default gameGcdLogic;
