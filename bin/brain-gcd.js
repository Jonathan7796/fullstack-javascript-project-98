#!/usr/bin/env node

import playGame from '../src/index.js'; // Lógica común
import gameGcdLogic from '../games/gcd.js'; // Lógica específica del juego

// Ejecutar el juego del numero par
playGame(gameGcdLogic, 'Encuentra el máximo común divisor de los números dados.');
