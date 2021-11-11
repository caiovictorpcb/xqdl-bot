import { Client } from "discord.js";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const bot = new Client();

const PREFIX = process.env.PREFIX;

bot.on("ready", () => {
    console.log("XQDL BOT está Online!!");
});

bot.on("message", message => {
    console.log(message)
});

bot.login(process.env.BOT_TOKEN);
