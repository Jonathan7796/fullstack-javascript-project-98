// Logica del Juego brain-prime
import getRandomInt from '../utils/random-number.js';
// Función para verificar si un número es primo
const esPrimo = (numero) => {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i += 1) {
    if (
      numero % i === 0
    ) return false; // Si el número es divisible por algún número entre 2 y su raíz cuadrada
  }
  return true;
};
const gamePrimeLogic = () => {
  const question = getRandomInt(1, 1000);
  const correctAnswer = esPrimo(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};
export default gamePrimeLogic;
