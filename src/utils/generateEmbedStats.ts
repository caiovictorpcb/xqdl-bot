import { ApiResponse} from "../types/apiresponse.types";
import { MessageEmbed } from "discord.js";
import Arredondar from './arrendodarKD'

export const generateStatsEmbed = (player:ApiResponse) => {
    const Embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(player.username)
        .setAuthor('Teus Stats')
        .setThumbnail(player.avatar_url_256)
        .addFields(

            { name: 'Sobre',
            value: `Level: ${player.progression.level}
                    Playtime: ${player.stats.general.playtime/3600} horas
            `,
            inline: true
            },

            { name: 'Geral',
            value: `Kills: ${player.stats.general.kills}
                    Deaths: ${player.stats.general.deaths}
                    KD: ${player.stats.general.kd}
            `,
            inline:true
            },
        )
        .setTimestamp()
        .setFooter('Stats tirados diretamente do XQDL BOT', 'https://i.imgur.com/1YXeT6M.png');
        return Embed
}