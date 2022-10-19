import { useState, useEffect, FormEvent } from 'react'
import axios from 'axios';

import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as Toast from '@radix-ui/react-toast';

import { Button } from "../Button";
import { CaretDown, Check, GameController } from "phosphor-react";
import { Input } from "./Input";

//interface para declarar o que eu vou retornar da API
interface Game {
    id: string;
    title: string;
}

export function AdModal(){
    //variável games ela é um array de objetos
    const [games, setGames] = useState<Game[]>([])

    //estado para converter o array de strings em numeros dos dias
    const[weekDays, setWeekDays] = useState<string[]>([])

    //estado para armazenar se o usuário usa chat de voz
    const[useVoiceChannel, setUseVoiceChannel] = useState(false)
 
    //qual função vou executar / quando que eu quero executar
    useEffect(() => {
        axios('http://localhost:3333/games').then(response => {setGames(response.data)})
    }, [])

    //função para criar o anúncio
    async function handleCreateAd(event: FormEvent) {
        //previnir do form fechar ao clicar em enviar
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        //validação
        if (!data.name) {
            return;
        }

        try {
            //criar anúncio
            await axios.post(`http://localhost:3333/games/${data.game}/ads`,{      
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel   
            }) 
            //const success = true
            //alertToast(success);
            alert('Anúncio criado com sucesso!')
        }
        catch (err) {
            console.log(err)
            //const success = false
            //alertToast(success)
            alert('Não foi possível criar sucesso!')
        }

    } 

    function alertToast(success: boolean) {
        return(
            <Toast.Provider>
                <Toast.Root type="foreground" duration={3000} className='w-4 h-3 rounded bg-zinc-900'>
                    <Toast.Title>
                        {success ? 'Anúncio públicado com sucesso!' : 'Erro ao públicar anúncio!'}
                    </Toast.Title>
                    <Toast.Description>Verifique o erro!</Toast.Description>
                    <Toast.Action altText='voltar'>
                        Voltar
                    </Toast.Action>
                    <Toast.Close>Fechar</Toast.Close>
                </Toast.Root>
            
                <Toast.Viewport />
          </Toast.Provider>
        );
    }

    return(
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
                <Dialog.Title className='text-3xl text-white font-black'>Publique um anúncio</Dialog.Title>
        
                <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor='game'>Qual o game?</label>
                        <select 
                            name='game'
                            id='game'
                            className='bg-zinc-900 text-zinc-500 py-3 px-4 rounded text-sm'
                            defaultValue=''
                        >
                            <option disabled value=''>Selecione o game que deseja jogar</option>

                            {games.map(game => {
                                return <option key={game.id} value={game.id}>{game.title}</option>
                            })}
                        </select>
                    </div> 

                    <div className="flex flex-col gap-2">
                        <label htmlFor='name'>Seu nome (ou nickname)</label>
                        <Input name='name' id='name' placeholder='Como te chamam dentro do game?' />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor='yearsPlaying'>Jogou há quantos anos?</label>
                            <Input name='yearsPlaying' id='yearsPlaying' type='number' placeholder='Tudo bem ser ZERO' />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor='discord'>Qual seu Discord?</label>
                            <Input name='discord' id='discord' type='text' placeholder='Usuario#0000' />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor='weekDays'>Quando costuma jogar?</label>

                            <ToggleGroup.Root 
                                type="multiple"
                                className="grid grid-cols-4 gap-2"
                                value={weekDays}
                                onValueChange={setWeekDays}
                            >
                                <ToggleGroup.Item
                                    value="0"                                     
                                    title="Domingo"
                                    className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : ' bg-zinc-900'}`}
                                >
                                    D
                                </ToggleGroup.Item>

                                <ToggleGroup.Item 
                                    value="1"   
                                    title="Segunda"
                                    className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : ' bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="2"
                                    title="Terça"
                                    className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : ' bg-zinc-900'}`}
                                >
                                    T
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="3"
                                    title="Quarta"
                                    className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : ' bg-zinc-900'}`}
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="4"
                                    title="Quinta"
                                    className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : ' bg-zinc-900'}`}
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="5"
                                    title="Sexta"
                                    className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : ' bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="6"
                                    title="Sábado"
                                    className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : ' bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor='hourStart'>Qual horário do dia?</label>
                            <div className="grid grid-cols-2 gap-2">
                                <Input name='hourStart' id='hourStart' type='time' placeholder='De' />
                                <Input name='hourEnd' id='hourEnd' type='time' placeholder='Até' />
                            </div>
                        </div>
                    </div>

                    <label className="mt-2 flex gap-2 items-center text-sm">
                        <Checkbox.Root 
                            className='w-6 h-6 rounded p-1 bg-zinc-900'
                            checked={useVoiceChannel}
                            onCheckedChange={(checked) => {
                                if (checked === true) {
                                    setUseVoiceChannel(true)
                                } else {
                                    setUseVoiceChannel(false)
                                }
                            }}
                        >
                            <Checkbox.Indicator>
                                <Check className='w-4 h-4 text-emerald-400' />
                            </Checkbox.Indicator>
                        </Checkbox.Root> 
                        Costumo me conectar ao chat de voz
                    </label>

                    <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close
                            className='bg-zinc-500 hover:bg-zinc-600 py-3 px-5 h-12 rounded-md font-semibold'
                        >
                            Cancelar
                        </Dialog.Close>
                        
                        <Button 
                            className='bg-violet-500 hover:bg-violet-600 py-3 px-5 h-12 rounded-md font-semibold flex items-center gap-3'
                            >
                            <GameController className="w-6 h-6" />
                            Encontrar duo
                        </Button>
                    </footer>
                </form>
            
            </Dialog.Content>
        </Dialog.Portal>
    )
}