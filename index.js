'use strict'
const chalk = require('chalk')
const border = chalk.yellow
const content = chalk.cyan

function repeater (times, separator) {
  return text => console.log(new Array(times).fill(text).join(separator))
}

module.exports = function (opts) {
  opts = opts || {}
  const times = opts.times || 1
  let text = (opts.text || 'uzhhorod;').slice(0, 9)
  text = text + new Array(10 - text.length).join(' ')
  let separator = opts.separator || ' '

  const repeat = repeater(times, separator)
  repeat(border('@~\\_/~@'))
  repeat(border('_|') + content(text.slice(0, 3)) + border('|_'))
  repeat(border('\\') + content(text.slice(3, 8)) + border('/'))
  repeat(border('  \\') + content(text.slice(8, 9)) + border('/  '))
}
