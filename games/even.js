//Logica del Juego brain-even
// Función para obtener un número aleatorio entre min y max (inclusive)
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
// Funcion para determinar si es par
const isEven = (number) => number % 2 === 0;
// Funcion principal del juego
const gameEvenLogic = () => {
    const question = getRandomInt(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  }; 

export default gameEvenLogic;

