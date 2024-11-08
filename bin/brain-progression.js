#!/usr/bin/env node

import playGame from '../src/index.js'; // Lógica común
import gameProgressionLogic from '../games/progression.js'; // Lógica específica del juego

// Ejecutar el juego de la progresion
playGame(gameProgressionLogic, '¿Qué número falta en la progresión?');
