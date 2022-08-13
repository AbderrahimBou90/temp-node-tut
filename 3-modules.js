
// node uses CommonJs library under the hood, and every file in node is a module (by default)
// Modules  - Encapsulated Code (only share minimum (what we would want))

const names = require('./names_module')
// always always always start with one dot './', sometimes you will be two levels up or more but always start with './'
// console.log(names)

const sayHi = require('./function_module')

const data = require('./alternative_module')
// console.log(data)

require('./mind_grenade')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

