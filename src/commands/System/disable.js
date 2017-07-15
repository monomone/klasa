const { Command } = require('../../index');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, 'disable', {
			permLevel: 10,
			description: 'Re-disables or temporarily disables a command/inhibitor/monitor/finalizer. Default state restored on reboot.',
			usage: '<Command:cmd|Inhibitor:inhibitor|Monitor:monitor|Finalizer:finalizer>'
		});
	}

	async run(msg, [piece]) {
		piece.disable();
		return msg.sendCode('diff', `+ Successfully disabled ${piece.type}: ${piece.name || piece.help.name}`);
	}

};