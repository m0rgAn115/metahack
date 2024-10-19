import React, { useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import MapView, { Marker, Region, PROVIDER_GOOGLE } from 'react-native-maps';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const INITIAL_REGION: Region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const MapScreen: React.FC = () => {
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (result !== RESULTS.GRANTED) {
        await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      }
    } else if (Platform.OS === 'android') {
      const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (result !== RESULTS.GRANTED) {
        await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      }
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Mi ubicación"
          description="Este es un marcador en el mapa"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 30,  // Cambia este valor según el nivel de redondez deseado
    overflow: 'hidden',  // Asegura que el contenido se ajuste a los bordes redondeados
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
