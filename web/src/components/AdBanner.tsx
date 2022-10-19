import {MagnifyingGlassPlus} from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';

export function AdBanner() {
    return(
        <div className='pt-1 bg-nlw-gradiant self-stretch rounded-lg overflow-hidden mt-8'>
            <div className='bg-[#2A2634] px-8 py-6 rounded-lg flex justify-between items-center'>
                <div>
                    <strong className='text-2xl text-white font--black block'>Não encontrou seu duo?</strong>
                    <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className='text-white bg-violet-500 hover:bg-violet-600 flex items-center rounded-md py-3 px-4 gap-3'>
                    <MagnifyingGlassPlus className="w-6 h-6" />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}