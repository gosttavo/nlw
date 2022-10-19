import { useState, useEffect } from 'react'
import axios from 'axios';

import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg'

import { GameBanner } from './components/GamerBanner';
import { AdModal } from './components/Form/AdModal';
import { AdBanner } from './components/AdBanner';

//interface para declarar o que eu vou retornar da API
interface Game {
    bannerUrl: string;
    id: string;
    title: string;
    _count: {
        ads: number;
    }
}

function App(){
    //variável games ela é um array de objetos
    const [games, setGames] = useState<Game[]>([])
 
    //qual função vou executar / quando que eu quero executar
    useEffect(() => {
        axios('http://localhost:3333/games').then(response => {setGames(response.data)})
    }, [])
 
    //metódo map percorre um array e retorna algo dele
    return(
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
            <img src={logoImg}></img>

            <h1 className='text-6xl text-white font-black mt-20'>
                Seu <span className='text-transparent bg-nlw-gradiant bg-clip-text'>duo</span> está aqui.
            </h1>

            <div className='grid grid-cols-6 gap-6 mt-16'>
                {games.map(game => {
                    return(
                        <GameBanner 
                            key={game.id}
                            bannerUrl={game.bannerUrl}
                            title={game.title}
                            adsCount ={game._count.ads}
                        /> 
                    )
                })}
            </div>

            <Dialog.Root>
                <AdBanner />        
                <AdModal />
            </Dialog.Root>
            
        </div>
    )
}

export default App