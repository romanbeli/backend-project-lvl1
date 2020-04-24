#!/usr/bin/env node
import calculateGCD from '../src/games/gcd.js';
import { gameExecute } from '../src/index.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';
gameExecute(calculateGCD, gameInstruction);
