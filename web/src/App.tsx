import './styles/main.css';
import {MagnifyingGlassPlus} from 'phosphor-react'

import logoImg from './assets/logo-nlw-esports.svg'

function App(){
    return(
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
            <img src={logoImg}></img>

            <h1 className='text-6xl text-white font-black mt-20'>
                Seu <span className='text-transparent bg-nlw-gradiant bg-clip-text'>duo</span> está aqui.
            </h1>

            <div className='grid grid-cols-6 gap-6 mt-16'>
                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/bg-lol.png' alt='Logo League of Legends'></img>

                    <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
                        <strong className='font-bold text-white block'>League Of Legends</strong>
                        <span className='text-zinc-300 text-sm block'>4 anúncios</span>
                    </div>
                </a>

                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/bg-apex.png' alt='Logo Apex Legends'></img>

                    <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
                        <strong className='font-bold text-white block'>Apex Legends</strong>
                        <span className='text-zinc-300 text-sm block'>4 anúncios</span>
                    </div>
                </a>

                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/bg-dota.png' alt='Logo Dota 2'></img>

                    <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
                        <strong className='font-bold text-white block'>Dota 2</strong>
                        <span className='text-zinc-300 text-sm block'>4 anúncios</span>
                    </div>
                </a>

                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/bg-cs.png' alt='Logo Counter Strike'></img>

                    <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
                        <strong className='font-bold text-white block'>Counter-Strike: Global Offensive</strong>
                        <span className='text-zinc-300 text-sm block'>4 anúncios</span>
                    </div>
                </a>

                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/bg-warcraft.png' alt='Logo World of Warcraft'></img>

                    <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
                        <strong className='font-bold text-white block'>World of Warcraft</strong>
                        <span className='text-zinc-300 text-sm block'>4 anúncios</span>
                    </div>
                </a>

                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/bg-fortnite.png' alt='Logo Fornite'></img>

                    <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
                        <strong className='font-bold text-white block'>Fortnite</strong>
                        <span className='text-zinc-300 text-sm block'>4 anúncios</span>
                    </div>
                </a>
            </div>

            <div className='pt-1 bg-nlw-gradiant self-stretch rounded-lg overflow-hidden mt-8'>
                <div className='bg-[#2A2634] px-8 py-6 rounded-lg flex justify-between items-center'>
                    <div>
                        <strong className='text-2xl text-white font--black block'>Não encontrou seu duo?</strong>
                        <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
                    </div>
                
                    <button className='bg-violet-500 hover:bg-violet-600 text-white rounded-md px-4 py-3 flex items-center gap-3'>
                        <MagnifyingGlassPlus size={24} />
                        Publicar anúncio
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App