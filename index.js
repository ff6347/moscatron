require('ts-node').register({
  project: './tsconfig.main.json'
}); // This will register the TypeScript compiler
// @ts-ignore
require('./src-main'); // This will load our Typescript application