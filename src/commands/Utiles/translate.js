const Discord = require('discord.js')
const { ar } = require('@vitalets/google-translate-api/languages');
const langs = require('@vitalets/google-translate-api/languages');

module.exports = {
  name: 'translate',
  description: 'Sirve para traducir el texto introducido',
  aliases: ['tr', 'traductor', 'traducir'],
  categoria: 'Utiles',
  execute(message, client, args) {
    const Traductor = require('@vitalets/google-translate-api')
    let prefix = process.env.prefix

    if(!args[0]) return message.channel.send('Para usar este comando solo escriba: `' + prefix + 'translate [lenguaje al que quiere traducir] | [texto que desea traducir]`');

    baseTranslate = args.join(' ').split(' | ')
    lenguaje = baseTranslate[0] || 'en'
    texto = baseTranslate[1]

    if(!texto) return message.channel.send('Por favor introduzca el lenguaje y el texto a traducir separados por un ` | `.')
      Traductor(texto, {
        to: lenguaje
      }).then(res => {
      let embed = new Discord.MessageEmbed()
        .setTitle('Traductor')
        .setColor('RANDOM')
        .setFooter('Pedido por ' + message.author.username)
        .addField('> Texto Original: ', texto)
        .addField('> Lenguaje de traduccion: ', lenguaje)
        .addField('> Texto Traducido: ', res.text)
      message.channel.send(embed)
    })
  }
}