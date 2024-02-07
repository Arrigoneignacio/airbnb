import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { defaultStyles } from "@/constants/Styles";
import { ListingGeo } from "@/interfaces/listingGeo";
import { useRouter } from "expo-router";

interface Props{
    listings: any;
}
const INITIAL_REGION = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 9,
    longitudeDelta: 9,
  };

const ListingsMap =  ({listings}: Props ) => {
  const router = useRouter();
  const onMarketSelected = (item: ListingGeo) => {
    router.push(`/listing/${item.properties.id}`);
  };
  
return (
        <View style= {defaultStyles.container}>
            <MapView style= {StyleSheet.absoluteFill} 
            provider= {PROVIDER_GOOGLE} 
            showsUserLocation 
            showsMyLocationButton
            initialRegion={INITIAL_REGION}>

                 {listings.features.map((item:ListingGeo) => (
          <Marker 
          key={item.properties.id}
          onPress={() => onMarketSelected(item)}
          coordinate={{
              latitude: +item.properties.latitude,
              longitude: +item.properties.longitude,
            }}>
            <View style={styles.marker}>
              <Text style={styles.markerText}>€ {item.properties.price}</Text>
              </View>
              </Marker>
                 ))}
            </MapView>
                
        </View>
);
      
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    marker: {
      backgroundColor: '#fff',
      padding:6,
    },
    markerText: {
      fontSize: 14,
      fontFamily: 'mon-sb',
    },
    
  

}); 

export default ListingsMap;