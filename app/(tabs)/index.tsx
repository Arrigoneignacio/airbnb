import { View, Text } from "react-native";
import React from "react";
import { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from '@/components/ExploreHeader';
import Listings from "@/components/Listings";
import listingData from '@/assets/data/airbnb-listings2.json';
import ListingsMaps from "@/components/ListingsMap";
import listingDataGeo from '@/assets/data/airbnb-listings.geo.json';

const Page =  ()  => {
        const [category, setCategory] = useState ('Tiny homes');
        const items =  useMemo (() => listingData as  any , []);

        const onDataChanged = (category: string) => {
          setCategory(category);
        };

return (
         <View style= {{flex: 1, marginTop:130 }}>
        <Stack.Screen
                options={{
                      header: () => <ExploreHeader onCategoryChanged={onDataChanged}/>,  
                }}
                />
                { <Listings listings={items} category={category}/> }
                {/* <ListingsMaps listings={listingDataGeo}/> */}
                       </View>

        );
                };
export default Page;