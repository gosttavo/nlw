import {MagnifyingGlassPlus} from 'phosphor-react'
import { Button } from './Button'

export function CreateBanner() {
    return(
        <div className='pt-1 bg-nlw-gradiant self-stretch rounded-lg overflow-hidden mt-8'>
            <div className='bg-[#2A2634] px-8 py-6 rounded-lg flex justify-between items-center'>
                <div>
                    <strong className='text-2xl text-white font--black block'>Não encontrou seu duo?</strong>
                    <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
                </div>
            
                <Button 
                    imgButton={<MagnifyingGlassPlus />}
                    title="Publicar anúncio"
                />
            </div>
        </div>
    )
}