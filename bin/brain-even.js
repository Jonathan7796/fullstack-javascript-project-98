#!/usr/bin/env node

import playGame from '../src/index.js'; // Lógica común
import gameEvenLogic from '../games/even.js'; // Lógica específica del juego

// Ejecutar el juego del numero par
playGame(gameEvenLogic, 'Responde "yes" si el número es par, de lo contrario responde "no".');
