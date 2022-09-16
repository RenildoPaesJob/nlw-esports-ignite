import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
  title: string;
  subtitle: string
}

export function Heading({ title, subtitle, ...rest } : Props) {
  return (
    <View 
      style={styles.container}
      {...rest}
    >
      {/* TITLE MAIN */}
      <Text style={styles.title}>
        {title}
      </Text>

      {/* SUBTITLE */}
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}