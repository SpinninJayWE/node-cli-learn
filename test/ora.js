const ora = require('ora')

const spinner = ora('loading unicorns').start()

setTimeout(() => {
	spinner.color = 'blue'
	spinner.text = 'loading rainbows'

	setTimeout(() => {
		spinner.succeed('download success')
	}, 1000)
}, 3000)
