#!/usr/bin/env node
import gcd from '../src/games/gcd.js';
import { gameFlow } from '../src/index.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';
gameFlow(gcd, gameInstruction);
