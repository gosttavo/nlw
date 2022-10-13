 //componente básico react native
 import { ImageBackground } from 'react-native';
 
 import { styles } from './styles';

 import backgroundImg from '../../assets/background-galaxy.png'
 
 //tipagem pra criar o background
 //children vai servir pra pegar tudo o que tiver dentro do background e renderizar
 interface Props {
    children: React.ReactNode;
 }
 
 export function Background({children}: Props) {
   return (
     <ImageBackground 
        source={backgroundImg}
        defaultSource={backgroundImg}
        style={styles.container}>
        {children}
     </ImageBackground>
   );
 }