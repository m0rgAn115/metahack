import { Animated, Dimensions, Easing, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import React, { Component, useEffect, useRef, useState } from 'react'
import GradientText from '../components/GradientText'
import { Nota } from '../components/Nota';
import TextCarousel from '../components/TextCarousel';
import Mapa from '../components/Mapa';
import MapView, { Marker } from 'react-native-maps';
import MapScreen from '../components/Mapa';
import Svg, { Defs, Path, Stop } from 'react-native-svg';
import { MingcuteCloseFill } from '../assets/cierre';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  { title: '🏫 ¿Como puedo tramitar mi beca?' },
  { title: '🏋🏽‍♀️ Recomiendame un gimnasio' },
  { title: '🌮 ¿Cual es el restaurante más cercan?' },
];

const data2 = [
  { title: '📚 ¿Dónde puedo encontrar libros gratuitos?' },
  { title: '🎨 ¿Cuáles son los mejores museos de la ciudad?' },
  { title: '🎓 ¿Cómo puedo inscribirme en un curso online?' },
];

const data3 = [
  { title: '🍕 ¿Cuál es la mejor pizzería en mi área?' },
  { title: '🛒 ¿Dónde puedo hacer compras económicas?' },
  { title: '🚍 ¿Cómo puedo llegar a la universidad en transporte público?' },
];


export function MyGradientSvg(props:any) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 14 14" {...props}>
      <Defs>
        <LinearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#1028c4" stopOpacity="1" />
          <Stop offset="100%" stopColor="#ff5722" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Path fill="url(#myGradient)" fillRule="evenodd" d="M8.5.5a.5.5 0 0 0-.912-.283l-5.5 8A.5.5 0 0 0 2.5 9h3v4.5a.5.5 0 0 0 .912.283l5.5-8A.5.5 0 0 0 11.5 5h-3z" clipRule="evenodd" />
    </Svg>
  );
}


export const Main = () => {

    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const [SlideState, setSlideState] = useState<boolean>(false)  

    const [inputValue, setinputValue] = useState("")
    const [tituloValue, settituloValue] = useState("")
  

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

  const handleEnviarPregunta = () => {
    setSlideState(true);
    settituloValue(inputValue)
    setinputValue("")
  }

    return (
      <View style={{ backgroundColor: '#000000', flex: 1, justifyContent: 'space-between' }} >

        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 80  }} >
        <View  
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              marginLeft: 10,
              justifyContent: 'center',
              alignItems: 'center'

            }}
          >
              <Svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 14 14"><Path fill="#1028c4" fill-rule="evenodd" d="M8.5.5a.5.5 0 0 0-.912-.283l-5.5 8A.5.5 0 0 0 2.5 9h3v4.5a.5.5 0 0 0 .912.283l5.5-8A.5.5 0 0 0 11.5 5h-3z" clip-rule="evenodd"/></Svg>

          </View>

          <View style={{ flexDirection: 'row' }} >
            <View  
              style={{
                width: 120,
                height: 50,
                backgroundColor: '#1C1C1F',
                borderRadius: 2000,
                marginLeft: 10,
                justifyContent: 'center',
                alignContent: 'center',
                borderColor: '#1028c4',
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                

              }}
            >
              <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><Path fill="#1028c4" d="M12 0L9.798 1.266l-6 3.468L1.596 6v12l2.202 1.266l6.055 3.468L12.055 24l2.202-1.266l5.945-3.468L22.404 18V6l-2.202-1.266l-6-3.468zM6 15.468V8.532l6-3.468l6 3.468v6.936l-6 3.468z"/></Svg>

              <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', textAlign: 'center', marginLeft: 10 }} >Gratis</Text>

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

                {
                  data.map(texto => (
                    <Pressable key={texto.title}

                    style = { ({pressed}) => ({
                      backgroundColor: '#232525', borderRadius: 5, justifyContent: 'center' ,height: 40, width: 'auto', alignSelf: 'flex-start', paddingHorizontal: 20, marginRight: 20,
                      opacity: (pressed) ? 0.6 : 1,
                      
                    })}
                    onPress={() => setinputValue(texto.title)}
                    >
                      <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', textAlignVertical: 'center' }} >{texto.title}</Text>
                    </Pressable>
                  ))
                }
              


              </ScrollView>

              <ScrollView 
                horizontal={true}
                style={{
                  paddingVertical: 10,

                }}
              >

                {
                  data2.map(texto => (
                    <Pressable key={texto.title}
                    style = { ({pressed}) => ({
                      backgroundColor: '#232525', borderRadius: 5, justifyContent: 'center' ,height: 40, width: 'auto', alignSelf: 'flex-start', paddingHorizontal: 20, marginRight: 20,
                      opacity: (pressed) ? 0.6 : 1,
                      
                    })}
                    onPress={() => setinputValue(texto.title)}
                    >
                      <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', textAlignVertical: 'center' }} >{texto.title}</Text>
                    </Pressable>
                  ))
                }
              


              </ScrollView>

              <ScrollView 
                horizontal={true}
                style={{
                  paddingVertical: 10,

                }}
              >

                {
                  data3.map(texto => (
                    <Pressable key={texto.title}

                    style = { ({pressed}) => ({
                      backgroundColor: '#232525', borderRadius: 5, justifyContent: 'center' ,height: 40, width: 'auto', alignSelf: 'flex-start', paddingHorizontal: 20, marginRight: 20,
                      opacity: (pressed) ? 0.6 : 1,
                      
                    })}
                    onPress={() => setinputValue(texto.title)}
                    >
                      <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', textAlignVertical: 'center' }} >{texto.title}</Text>
                    </Pressable>
                  ))
                }
              


              </ScrollView>

            </View>

            <MapScreen />
          </View>


        <Animated.View 
        style={{  position:  'absolute',width: '100%' , paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row',   backgroundColor: SlideState ? '#232525' : 'transparent', borderTopLeftRadius: 40, borderTopRightRadius: 40, height: heightInterpolation, bottom: 0  }}
      >

        {/* Contenido de respuesta */}
        
        {
          SlideState &&
        <View style={{ position: 'absolute', justifyContent: 'center', width: '110%', alignItems: 'center', top: 20, alignSelf: 'center', marginHorizontal: 'auto' }} >
          {/* Titulo de respuesta */}
          <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', width: '70%' }} >{ tituloValue }</Text>
          
          {/* Contenido de respuesta */}
          <View style={{ padding: 10, marginTop: 10 }} >
            <Text style={{ color: 'white', fontSize: 22, textAlign: 'left' }} >ddaddsdasd dasdasdas sadasdad sdas dsassa</Text>
          </View>

        </View> 
        }
       
        {SlideState && (
          <Pressable 
          style={{ 
            position: 'absolute',
            marginLeft: 20,
            marginTop: 20, 
            height: 40, 
            width: 40, 
            backgroundColor: '#8a8a8a', 
            borderRadius: 50, 
            justifyContent: 'center', // Centrar el contenido verticalmente
            alignItems: 'center'      // Centrar el contenido horizontalmente
          }}
          onPress={() => setSlideState(false)}
        >
          <MingcuteCloseFill  />
        </Pressable>
        


        )}



        <View style={{ width: '100%', flexDirection: 'row', alignSelf: 'flex-end', marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }} >
          <TextInput  
            value={inputValue}
            style={{
              flex: 1,
              height: 50,
              fontWeight: '500',
              color: '#ffffff',
              borderRadius: 100,
              backgroundColor: '#1C1C1F',
              paddingHorizontal: 20, 
              fontSize: 16,
              textAlign: 'left'
            }}
            
            onChangeText={setinputValue }
            placeholder='Pregunte algo...'
            placeholderTextColor={"#595959"}
          />
            <Pressable 
            style = { ({pressed}) => ({
              position: 'absolute', right: 10, alignItems: 'center',
              opacity: (pressed) ? 0.6 : 1,
              
            })}
            onPress={handleEnviarPregunta}
            >
            <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><Path fill="#cacaca" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"/></Svg>
            </Pressable>
          </View>
          
          <Pressable  
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#1C1C1F',
              borderRadius: 100,
              marginLeft: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => setSlideState(prev => !prev)}
          >

            <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" >
              <Path fill="white" d="M19 9a1 1 0 0 1 1 1a8 8 0 0 1-6.999 7.938L13 20h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3v-2.062A8 8 0 0 1 4 10a1 1 0 1 1 2 0a6 6 0 0 0 12 0a1 1 0 0 1 1-1m-7-8a4 4 0 0 1 4 4v5a4 4 0 1 1-8 0V5a4 4 0 0 1 4-4" />
            </Svg>

          </Pressable>
        </View>
      </Animated.View>
      </View>
    )
  }

  export default Main;