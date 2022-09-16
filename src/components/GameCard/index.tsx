import { 
  TouchableOpacity, ImageBackground, ImageSourcePropType , TouchableOpacityProps
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import { styles } from './styles';

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface DataProps extends TouchableOpacityProps{
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: DataProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground 
        source={data.cover}
        style={styles.cover}
      />
      <LinearGradient/>

    </TouchableOpacity>
  );
}