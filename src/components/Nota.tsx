import { Text, View } from 'react-native'
import React, { Component } from 'react'

interface properties {
  text: string;
}

export const Nota = ( {text}:properties ) => {


    return (
      <View style={{ backgroundColor: '#232525', borderRadius: 5, justifyContent: 'center' ,height: 40, width: 'auto', alignSelf: 'flex-start', paddingHorizontal: 20, marginRight: 20 }} >
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', textAlignVertical: 'center' }} >{text}</Text>
      </View>
    )
}