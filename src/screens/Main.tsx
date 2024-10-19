import { Dimensions, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import React, { Component, useState } from 'react'
import GradientText from '../components/GradientText'
import { Nota } from '../components/Nota';
import TextCarousel from '../components/TextCarousel';

const data = [
  { title: 'Texto 1' },
  { title: 'Texto 2' },
  { title: 'Texto 3' },
  { title: 'Texto 4' },
  { title: 'Texto 5' },
];


export const Main = () => {

    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const [val, setfirst] = useState<boolean>(false)  
  
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

        <View style={{  justifyContent: 'center'}} >
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
        </View>

        <View 
          
        style={{  position:  val ? 'absolute' : 'relative',width: '100%' , paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row',   backgroundColor: val ? '#232525' : 'transparent', borderTopLeftRadius: 40, borderTopRightRadius: 40, height: '80%',  }}
          
        >

          <View style= {{ width: '100%', flexDirection: 'row', alignSelf: 'flex-end' }} >
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
              onPress={() => setfirst(true)}
            />
            <Pressable  
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#1C1C1F',
                borderRadius: 100,
                marginLeft: 10
                
              }}
              onPress={() => setfirst(prev => !prev)}
            />
            
          </View>
          
        </View>
      </View>
    )
  }

  export default Main;