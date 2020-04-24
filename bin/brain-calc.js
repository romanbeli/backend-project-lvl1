#!/usr/bin/env node
import { gameExecute } from '../src/index.js';
import calculateExpression from '../src/games/calc.js';

const gameInstruction = 'What is the result of the expression?';
gameExecute(calculateExpression, gameInstruction);
