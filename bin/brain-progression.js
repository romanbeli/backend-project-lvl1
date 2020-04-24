#!/usr/bin/env node
import { gameExecute } from '../src/index.js';
import repairProgression from '../src/games/progression.js';

const gameInstruction = 'What number is missing in the progression?';
gameExecute(repairProgression, gameInstruction);
