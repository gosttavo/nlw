import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

//interface pra tornar as imagens do cartão dinâmicas
export interface GameCardProps {
    id: string;
    title: string;
    _count: {
      ads: number;
    };
    bannerUrl: string;
}

//interface pra facilitar a centralização das informações do gamecardprops
//uso interno
interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground
         style={styles.cover}
         source={{ uri: data.bannerUrl }}
        >
          <LinearGradient         
            colors={THEME.COLORS.FOOTER}
            style={styles.footer}
          >
            <Text style={styles.name}>
              {data.title}
            </Text>

            <Text style={styles.ads}>
              {data._count.ads} anúncio(s)
            </Text>
          </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  );
}