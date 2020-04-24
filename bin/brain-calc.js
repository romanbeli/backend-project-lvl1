#!/usr/bin/env node
import { gameFlow } from '../src/index.js';
import calc from '../src/games/calc.js';

const gameInstruction = 'What is the result of the expression?';
gameFlow(calc, gameInstruction);
