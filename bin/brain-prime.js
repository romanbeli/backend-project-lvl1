#!/usr/bin/env node
import prime from '../src/games/prime.js';
import { gameFlow } from '../src/index.js';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameFlow(prime, gameInstruction);
