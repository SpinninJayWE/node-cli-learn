const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const donwlaodFunc = (url, projectName) => {
	const spinner = ora(`Downloading...`).start()
	spinner.color = 'yellow'
	download(url, projectName, function (err) {
		if (err) {
			spinner.fail('Failed to download repository: ' + err.message.trim())
		} else {
			spinner.succeed('Repository downloaded successfully!')
			console.log(chalk.blue('Done! you run:'))
			console.log(chalk.blue('cd ' + projectName))
		}
	})
}

module.exports = donwlaodFunc
