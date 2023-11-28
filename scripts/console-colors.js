const colors = {
  red: (str) => `\x1b[31m${str}\x1b[0m`,
  green: (str) => `\x1b[32m${str}\x1b[0m`,
  yellow: (str) => `\x1b[33m${str}\x1b[0m`,
  blue: (str) => `\x1b[34m${str}\x1b[0m`,
};

function addSeparator(str, length = str.length) {
  const separator = '-'.repeat(length);

  return `\n${separator}\n${str}\n${separator}\n`;
}

function consoleColor(str, color) {
  const colorize = colors[color] || ((sourceStr) => sourceStr);

  return console.log(colorize(addSeparator(str)));
}

module.exports = { consoleColor };
