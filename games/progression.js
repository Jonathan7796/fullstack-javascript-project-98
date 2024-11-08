import getRandomInt from '../utils/random-number.js';

// Función principal del juego de la progresion
const gameProgressionLogic = () => {
  const longitud = getRandomInt(5, 10);
  const razon = getRandomInt(2, 5);
  const primerNumero = getRandomInt(1, 20);
  // Generar Progresion
  const progresion = [];
  for (let i = 0; i < longitud; i++) {
    progresion.push(primerNumero + i * razon);
  }
  // Elegir aleatoriamente el índice donde se va a ocultar el número

  const indiceFaltante = Math.floor(Math.random() * longitud);
  // Guardamos la respuesta correcta y reemplazamos el número por '..'
  const correctAnswer = progresion[indiceFaltante];
  progresion[indiceFaltante] = '..';
  const question = progresion;

  return { question, correctAnswer };
};

export default gameProgressionLogic;
