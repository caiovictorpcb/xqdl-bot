import axios from 'axios'
import fs from 'fs'
import { ApiResponse } from '../types/apiresponse.types'
import { generateStatsEmbed } from '../utils/generateEmbedStats'


const UserAPI = axios.create({baseURL:"http://localhost:5000/users"})

interface User {
    discordId:string
    nickname:string
    platform:string
}

export const setInfo = async (user:User) => {
    const response = await UserAPI.post("/", user)
    if(response.status === 201) return `${user.nickname} cadastrado no DB.`
    return "Tu já tá Setado."
}

export const getStats = async (discordId:string) => {
    const response = await UserAPI.get(`/stats/${discordId}`)
    if(response.status === 200) return generateStatsEmbed(response.data)
    return "ERRO"
}

export const unsetInfo = async (discordId:string) => {
    const response = await UserAPI.post(`/delete`, {discordId})
    if(response.status === 200) return `APAGADO`
    return "ERRO"
}