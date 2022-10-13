import * as Dialog from '@radix-ui/react-dialog';

interface ButtonProps{
    imgButton?: any;
    title: string;
}

export function Button(props: ButtonProps){
    return(
        <Dialog.Trigger>
            {props.imgButton}
            {props.title}
        </Dialog.Trigger>
    )
}