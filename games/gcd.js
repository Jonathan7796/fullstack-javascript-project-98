// Logica del Juego brain-gcd
import getRandomInt from '../utils/random-number.js';
// Función para calcular el MCD de dos números
const gcd = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

// Función principal del juego
const gameGcdLogic = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  // Calcular el MCD correcto
  const correctAnswer = gcd(num1, num2);

  return { question, correctAnswer };
};

export default gameGcdLogic;
