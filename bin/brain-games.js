#!/usr/bin/env node
import { getInfoFromUser } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const frase = 'May I have your name? ';
const name = getInfoFromUser(frase);
console.log(`Hello, ${name}!`);
