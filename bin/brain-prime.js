#!/usr/bin/env node

import playGame from '../src/index.js'; // Lógica común
import gamePrimeLogic from '../games/prime.js'; // Lógica específica del juego

// Ejecutar el juego del numero par
playGame(gamePrimeLogic, 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".');
