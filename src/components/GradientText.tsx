import React from 'react';
import { Text, StyleSheet, View, TextProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps extends TextProps {
  colors: string[];
  text: string;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const GradientText: React.FC<GradientTextProps> = ({
  colors,
  text,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={colors} start={start} end={end} style={styles.gradient}>
        <Text {...props} style={[style, styles.text]}>
          {text}
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Asegura que el contenedor tenga un tamaño adecuado
    overflow: 'hidden', // Recorta el contenido que se desborda
  },
  gradient: {
    position: 'absolute', // Asegura que el gradiente esté detrás del texto
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'transparent', // El texto debe ser transparente
  },
});

export default GradientText;
