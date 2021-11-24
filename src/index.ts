import { Client, ClientUser, Message, Role, User } from "discord.js";
import dotenv from "dotenv";
import axios from "axios";
import { setInfo, getStats } from './commands/userCommands';
import { generateStatsEmbed } from "./utils/generateEmbedStats";

dotenv.config();

const bot = new Client();

const PREFIX = process.env.PREFIX;


bot.on("ready", () => {
    console.log("XQDL BOT está Online!!");
});



bot.on("message", async (message:Message) => {
    if(message.author.bot) return;
    console.log("MESSAGE")
    const mensagem = message.content.split(' ')
    const comando = mensagem[1]
    const discordId = message.author.id
    const nickname = mensagem[mensagem.length - 2]
    const platform = mensagem[mensagem.length - 1]
    if(message.mentions.has('805104755658457108')){
      if(comando === "set"){
        const data = await setInfo({discordId, nickname, platform})
        message.reply(data)
      }
      else if(comando === "stats"){
        const data = await getStats(discordId)
        message.reply(data)
      }
    }
  });

bot.login(process.env.BOT_TOKEN);