const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Selecione para deletar o ticket!')
					.addOptions([
						{
							label: '🗑️ Excluir Ticket',
							value: 'excluir',
						}
					])
                );
                
                
        let catégorie = "" // Categoria onde será criado o ticket
        let roleStaff = interaction.guild.roles.cache.get('') // Cargo que respondera o ticket

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "excluir") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '❌ Você já tem um ticket aberto no servidor.', ephemeral: true})
            if (interaction.values[0] == "compra") {
                interaction.guild.channels.create(`💸・Compra ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const partenariat = new MessageEmbed()
                    .setTitle('Compras | Nome do seu servidor') // Nome do seu servidor
                    .setDescription('Qual produto você tem interesse em comprar ?')
                    .setFooter('')
                    c.send({embeds: [partenariat], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Seu ticket foi aberto com sucesso. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "suporte") {
                interaction.guild.channels.create(`📞・Suporte ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },                    
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const plainte = new MessageEmbed()
                    .setTitle('Suporte | Nome do seu servidor') // Nome do seu servidor 
                    .setDescription('Por favor, fale seu problema para que o suporte possa te ajudar ')
                    .setFooter('')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Seu ticket foi aberto com sucesso. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "denuncia") {
                interaction.guild.channels.create(`🚨・Denúncia de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Denúncia | Nome do seu servidor') // Nome do seu servidor
                    .setDescription('Por favor, fale o ocorrido, mande id do membro ou staff, foto ou video com provas.')
                    .setFooter('')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Seu ticket foi aberto com sucesso. <#${c.id}>`, ephemeral: true})
                })
                           
                
            
            }
        }
    }
} // Brancola Community