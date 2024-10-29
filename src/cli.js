// Importar la biblioteca readline-sync
import readlineSync from 'readline-sync';

export const startGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = readlineSync.question('¿Cuál es tu nombre? ');

  // Salida ocn el nombre del usuario
  console.log(`¡Hola, ${userName}!`);
};
