import React, { useEffect } from "react";
import { Text, View } from "react-native";
import useRestaurant from "../Hooks/useRestaurant";
import NavigationHeader from "../Components/Shared/NavigationHeader";
import PhotoSwiper from "../Components/RestaurantScreen/PhotoSwiper";
import Address from "../Components/RestaurantScreen/Address";
import ContactInfo from "../Components/RestaurantScreen/ContactInfo";
import RestaurantTiming from "../Components/RestaurantScreen/RestaurantTimings";

export default function RestaurantScreen({ navigation, route }) {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();

  useEffect(() => {
    if (route.params?.id) {
      console.log(route.params?.id);
      searchRestaurant(route.params.id);
    }
  }, []);

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>{error}</Text>;

  return (
    <View>
      {data && (
        <>
          <NavigationHeader navigation={navigation} title={data.name} />
          <PhotoSwiper photos={data.photos} />
          <Address address={data.location} coordinates={data.coordinates} />
          <ContactInfo phoneNum={data.phone} />
          <RestaurantTiming data={data} />
        </>
      )}
    </View>
  );
}
