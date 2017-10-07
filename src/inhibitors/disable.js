const { Inhibitor } = require('klasa');

module.exports = class extends Inhibitor {

	async run(msg, cmd) {
		const settings = await msg.fetchGuildSettings();
		if (cmd.enabled && settings.disabledCommands.includes(cmd.name) === false) return;
		throw await msg.fetchLanguageCode('INHIBITOR_DISABLED');
	}

};
