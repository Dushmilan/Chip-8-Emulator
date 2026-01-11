import Renderer from './renderer.js';
const renderer  = new Renderer(10);

let loop;

let fps = 60 , fpsInterval, startTime, now, then, elapsed;