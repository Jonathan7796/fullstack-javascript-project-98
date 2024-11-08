#!/usr/bin/env node

import playGame from '../src/index.js'; // Lógica común
import gameCalcLogic from '../games/calc.js'; // Lógica específica del juego

// Ejecutar el juego de la calculadora
playGame(gameCalcLogic, '¿Cuál es el resultado de la expresión?');
