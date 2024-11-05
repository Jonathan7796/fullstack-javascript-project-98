#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('¡Bienvenido a Brain Games!');
const userName = readlineSync.question('¿Cual es tu nombre? ');
console.log(`¡Hola, ${userName}!`);

console.log('Responde "yes" si el número es par, de lo contrario responde "no".');
// Funcion para generar numero aleatorio
const getRandomNumber = () => Math.floor(Math.random() * 100);
// Funcion para determinar si es par
const isEven = (number) => number % 2 === 0;
// Funcion principal del juego
const playGame = () => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = getRandomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    const userAnswer = readlineSync.question(`Pregunta: ${number}\nTu respuesta: `);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return; // Termina el juego si la respuesta es incorrecta
    }

    console.log('¡Correcto!');
    correctAnswers += 1;
  }

  console.log(`¡Felicidades, ${userName}!`);
};

// Inicia el juego
playGame();
