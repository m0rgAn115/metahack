import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';

interface TextCarouselProps {
  texts: string[];
  interval?: number;
}

const { width } = Dimensions.get('window');

const TextCarousel: React.FC<TextCarouselProps> = ({ texts, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animate = () => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -width,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        slideAnim.setValue(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      });
    };

    const timer = setInterval(animate, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  const nextIndex = (currentIndex + 1) % texts.length;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.textContainer,
          {
            transform: [{ translateX: slideAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        <Text style={styles.text}>{texts[currentIndex]}</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.textContainer,
          {
            position: 'absolute',
            transform: [{ 
              translateX: slideAnim.interpolate({
                inputRange: [-width, 0],
                outputRange: [0, width],
              }) 
            }],
            opacity: opacityAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      >
        <Text style={styles.text}>{texts[nextIndex]}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50, // Altura fija
    overflow: 'hidden',
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232525', borderRadius: 5, height: 30, width: 'auto', alignSelf: 'flex-start', paddingHorizontal: 20
  },
  text: {
    color: 'white', fontSize: 18, textAlign: 'center', textAlignVertical: 'center'
  },
});

export default TextCarousel;