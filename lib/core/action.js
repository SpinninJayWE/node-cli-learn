const inquirer = require('inquirer')
const { framwork, foramwurkUrl } = require('../../config')
const donwlaodFunc = require('./downlaod')
const myAction = async function (project, args) {
	// 命令行的执行逻辑代码
	const answer = await inquirer.prompt([
		{
			type: 'list',
			name: 'framwork',
			choices: framwork,
			message: '请选择你所使用的框架',
		},
	])
	donwlaodFunc('direct:' + foramwurkUrl[answer.framwork], project)
}

module.exports = myAction
