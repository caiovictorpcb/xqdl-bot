import { Client, ClientUser, Role, User } from "discord.js";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const bot = new Client();

const PREFIX = process.env.PREFIX;


bot.on("ready", () => {
    console.log("XQDL BOT está Online!!");
});



bot.on("message", (message) => {
    if(message.author.bot) return;
    if(message.mentions.has('805104755658457108')) message.reply('ME MARCOU');
    const mensagem = message.content.split(' ')
    const comando = mensagem[1]
    const discordId = message.author.id
    const nick = mensagem[mensagem.length - 2]
    const platform = mensagem[mensagem.length - 1]
    console.log(discordId)
    console.log(comando)
    console.log(nick)
    console.log(platform)
  });

bot.login(process.env.BOT_TOKEN);