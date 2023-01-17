const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const terminal = readline.createInterface({ input, output });
const template = require('../templateConstructor');

console.log(`
--------- PEDAC Template builder ---------
`);

terminal.question('Title: ', (answer) => {
  template.variable = { title: answer.trim() };
  terminal.emit('end-title');
});

terminal.on('end-title', () => {
  terminal.question('\nPlatform: ', (answer) => {
    template.variable = { platform: answer.trim() };
    terminal.emit('end-platform');
  });
});

terminal.on('end-platform', () => {
  terminal.question('\nDifficulty: ', (answer) => {
    template.variable = { difficulty: answer.trim() };
    terminal.emit('end-difficulty');
  });
});

terminal.on('end-difficulty', () => {
  template.create('pedac');
  terminal.close();
});
