const myAction = require('./action')

const mycommander = function (program) {
	program
		.command('create <project> [ohter...]')
		.alias('crt')
		.description('创建项目')
		.action(myAction)
}

module.exports = mycommander
