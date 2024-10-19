import { Animated, Dimensions, Easing, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import React, { Component, useEffect, useRef, useState } from 'react'
import GradientText from '../components/GradientText'
import { Nota } from '../components/Nota';
import TextCarousel from '../components/TextCarousel';
import Mapa from '../components/Mapa';
import MapView, { Marker } from 'react-native-maps';
import MapScreen from '../components/Mapa';

const data = [
  { title: 'Texto 1' },
  { title: 'Texto 2' },
  { title: 'Texto 3' },
  { title: 'Texto 4' },
  { title: 'Texto 5' },
];


export const Main = () => {

    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const [SlideState, setSlideState] = useState<boolean>(false)  
  

    const animatedHeight = useRef(new Animated.Value(0)).current; // Valor inicial para la altura
  const animatedBackgroundColor = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: SlideState ? 1 : 0, // 1 si SlideState es true, 0 si es false
      duration: 300, // Duración de la animación en milisegundos
      easing: Easing.ease, // Tipo de easing para una transición suave
      useNativeDriver: false, // Necesario ya que estamos animando height y backgroundColor
    }).start();

    Animated.timing(animatedBackgroundColor, {
      toValue: SlideState ? 1 : 0, // 1 para activar el color de fondo
      duration: 300, // Duración de la animación
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [SlideState]);

  // Mapeo de valores animados para height y backgroundColor
  const heightInterpolation = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '80%'], // De 0% a 80% de altura cuando cambia el SlideState
  });

  const backgroundColorInterpolation = animatedBackgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', '#232525'], // De transparente a gris cuando SlideState cambia
  });

    return (
      <View style={{ backgroundColor: '#000000', flex: 1, justifyContent: 'space-between' }} >

        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 80  }} >
        <View  
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#1C1C1F',
              borderRadius: 100,
              marginLeft: 10

            }}
          />

          <View style={{ flexDirection: 'row' }} >
            <View  
              style={{
                width: 100,
                height: 50,
                backgroundColor: '#1C1C1F',
                borderRadius: 2000,
                marginLeft: 10,
                justifyContent: 'center',
                alignContent: 'center',
                borderColor: '#1028c4',
                borderWidth: 1

              }}
            >
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', textAlign: 'center' }} >Gratis</Text>

            </View>
            <View  
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#1C1C1F',
                borderRadius: 200,
                marginLeft: 10,
                justifyContent: 'center',
                alignContent: 'center'

              }}
            >
              <Text style={{ color: 'white', fontSize: 20, fontWeight: '500', textAlign: 'center' }} >A</Text>

              </View>
            </View>
        </View>

            <View style={{  justifyContent: 'center', position: 'absolute', top: screenWidth/1.5 }} >
            <View style={{  justifyContent: 'center', flexDirection: 'row', alignItems: 'center', alignContent: 'center', overflow: 'hidden'}} >
              <Text style={{ color: 'white', fontSize: 40, fontWeight: '200'  }} >Hola</Text>
              <Text style={{ color: '#1028c4', fontSize: 40, fontWeight: '500'  }} > Morgan</Text>
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 50 }} >

              <ScrollView 
                horizontal={true}
                style={{
                  paddingVertical: 10,
                }}
              >
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
              


              </ScrollView>

              <ScrollView 
                horizontal={true}
                style={{
                  paddingVertical: 10,

                }}
              >
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
              


              </ScrollView>

              <ScrollView 
                horizontal={true}
                style={{
                  paddingVertical: 10,

                }}
              >
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
                  <Nota text={"¿Como puedo tramitar mi beca?"} />
              


              </ScrollView>
            </View>

            <MapScreen />
          </View>

        

        <Animated.View 
        style={{  position:  'absolute',width: '100%' , paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row',   backgroundColor: SlideState ? '#232525' : 'transparent', borderTopLeftRadius: 40, borderTopRightRadius: 40, height: heightInterpolation, bottom: 0  }}
      >
        {SlideState && (
          <Pressable 
            style={{ 
              position: 'absolute',
              marginLeft: 20,
              marginTop: 20, 
              height: 40, 
              width: 40, 
              backgroundColor: '#D9D9D9', 
              borderRadius: 50 
            }}
            onPress={() => setSlideState(false)}
          />

        )}


        <View style={{ width: '100%', flexDirection: 'row', alignSelf: 'flex-end', marginBottom: 10 }}>
          <TextInput  
            value='Pregunta algo...'
            style={{
              flex: 1,
              height: 50,
              fontWeight: '500',
              color: '#595959',
              borderRadius: 100,
              backgroundColor: '#1C1C1F',
              paddingHorizontal: 20, 
              fontSize: 16
            }}
            onPress={() => setSlideState(true)}
          />
          <Pressable  
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#1C1C1F',
              borderRadius: 100,
              marginLeft: 10
            }}
            onPress={() => setSlideState(prev => !prev)}
          />
        </View>
      </Animated.View>
      </View>
    )
  }

  export default Main;