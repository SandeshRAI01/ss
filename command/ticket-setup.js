const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Selecione uma opção...')
					.addOptions([
						{
							label: 'Realizar uma compra',
							emoji: '💲',
							value: 'compra',
						},
						{
							label: 'Falar com o suporte',
							emoji: '🛡️',
							value: 'suporte',
						},
						{
							label: 'Fazer uma denúncia',
							emoji: '🚨',
							value: 'denuncia',
						},

					]),
			);

        message.channel.send({
            embeds: [{
                title: '', //Nome do seu servidor
                description: '> Está precisando de ajuda relacionada a nossa Familia? abra um ticket! assim poderemos te ajudar!', //Texto da sua preferência
                color: "FF0000", //Pesquise no navegador uma cor de sua preferência em HEX
				image: {url: ''}, //Banner da sua preferencia
				footer: {text: ''} //Nome embaixo da sua preferencia
            }],
            components: [row]            
        })
    }
} //by: /brancola