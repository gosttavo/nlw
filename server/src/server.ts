import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minute'
import { convertMinuteStringToHours } from './utils/convert-minute-string-to-hour'

//criar aplicação
const app = express() ;

app.use(express.json());
app.use(cors());

//conexão com banco de dados
const prisma = new PrismaClient({
    log: ['query']
});

//criar rota com método get('endereço', função)
//endereço -> www.minhaapi.com/ads
//função () => {}, função que vai executar quando o usuário acessar a rota

//função express recebe dois parametros
//request -> buscar dados de requisição -> informações de acesso
//response -> devolver uma resposta

//HTTP Methods / API RESTful / HTTP Codes
//GET, POST, PUT, PATCH, DELETE

//rota de listagem de games
//Assync await
app.get('/games', async (request, response) => {
    //buscar todos os games
    const games = await prisma.game.findMany({
        include:{
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    }) 

    return response.json([games]);
});

//rota de criação de ads -> precisa passar o id do game
app.post('/games/:id/ads', async (request, response) => {
    //acessar o game id
    const gameId = request.params.id;
    //acessar o corpo da requisição
    const body: any = request.body;
    console.log(body);

    //vai criar o anúncio
    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','), //separa por vírgula
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        },
    })

    return response.status(201).json(ad);
});

//listas games com id x seus anúncios
app.get('/games/:id/ads', async (request, response) => {

    //acesso ao parâmetro
    const gameId = request.params.id;

    //vai listar os ads
    const ads = await prisma.ad.findMany({
        //vai dizer quais registros serão mostrados
        select:{
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        //
        where:{
            gameId,
        },
        orderBy: {
            createdAt: 'desc',
        }
    })

    return response.json(ads.map((ad : any)=> {
        return{
            //substituir informação no objeto p/ retornar os dias de forma certa
            //tudo de ads menos weekdays
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinuteStringToHours(ad.hourStart),
            hourEnd: convertMinuteStringToHours(ad.hourEnd),
        }
    }))
})

//rota para pegar o discord de um ad
app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;

    //encontrar um unico ad
    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    })

    //const adId = request.params.id;
    return response.json({
        discord: ad.discord,
    })
})

//passar porta para diferenciar no localhost
app.listen(3333)

