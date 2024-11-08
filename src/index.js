import readlineSync from 'readline-sync';

// Función común para ejecutar cualquier juego
const playGame = (gameLogic, description) => {
  console.log('¡Bienvenido a Brain Games!');

  // Solicitar el nombre del jugador
  const name = readlineSync.question('¿Cual es tu nombre? ');
  console.log(`¡Hola, ${name}!`);

  // Mostrar la descripción del juego (si se proporciona)
  if (description) {
    console.log(description);
  }

  // Jugar 3 rondas
  for (let round = 0; round < 3; round++) {
    const { question, correctAnswer } = gameLogic();

    // Hacer una pregunta y obtener la respuesta del usuario
    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    // Verificar si la respuesta es correcta
    if (userAnswer === String(correctAnswer)) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentemoslo de nuevo, ${name}!`);
      return; // Fin del juego si la respuesta es incorrecta
    }
  }

  // Si el jugador respondió correctamente a todas las preguntas
  console.log(`¡Felicidades, ${name}!`);
};

export default playGame;
