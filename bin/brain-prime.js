#!/usr/bin/env node
import checkForPrime from '../src/games/prime.js';
import { gameExecute } from '../src/index.js';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameExecute(checkForPrime, gameInstruction);
