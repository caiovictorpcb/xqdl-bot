import { ApiResponse} from "../types/apiresponse.types";
import { MessageEmbed } from "discord.js";

export const generateStatsEmbed = (player:ApiResponse) => {
    const Embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(player.username)
        .setAuthor('Teus Stats')
        .setThumbnail(player.avatar_url_256)
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter('Stats tirados diretamente do XQDL BOT', 'https://i.imgur.com/1YXeT6M.png');
        return Embed
}