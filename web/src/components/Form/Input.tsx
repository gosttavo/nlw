import { InputHTMLAttributes } from 'react'

//vai referenciar o input do html
//o input vai recebar TODAS as propriedades q um input receberia
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
    return(
        <input 
         {...props}
         className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500" 
        />
    )
}