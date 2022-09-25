//importar o express
//ECMAScript models
import express from 'express'

//criar aplicação
const app = express() 

//criar rota com método get('endereço', função)
//endereço -> www.minhaapi.com/ads
//função () => {}, função que vai exectuar quando o usuário acessar a rota

//localhost:3333/ads

//função express recebe dois parametros
//request -> buscar dados de requisição -> informações de acesso
//response -> devolver uma resposta

app.get('/ads', (request, response) => {
    return response.json([
        {
            id: 1,
            name: 'Anúncio 1'
        },
        {
            id: 2,
            name: 'Anúncio 2'
        },
        {
            id: 3,
            name: 'Anúncio 3'
        },
        {
            id: 4,
            name: 'Anúncio 4'
        },
    ])
})

//passar porta para diferenciar no localhost
app.listen(3333)

