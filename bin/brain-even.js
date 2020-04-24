#!/usr/bin/env node
import isItEven from '../src/games/even.js';
import { gameFlow } from '../src/index.js';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';
gameFlow(isItEven, gameInstruction);
