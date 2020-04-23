#!/usr/bin/env node
import { gameFlow } from '../src/index.js';
import progression from '../game/progression.js';

const gameInstruction = 'What number is missing in the progression?';
gameFlow(progression, gameInstruction);
