import React, { useEffect } from "react";
import { FlatList, Text, View, Image, Dimensions } from "react-native";
import useRestaurant from "../Hooks/useRestaurant";
import NavigationHeader from "../Components/Shared/NavigationHeader";
import PhotoSwiper from "../Components/Restaurant/PhotoSwiper";

export default function RestaurantScreen({ navigation, route }) {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();
  //console.log(route.params.id);
  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.height * 9) / 16);
  useEffect(() => {
    if (route.params?.id) searchRestaurant(route.params.id);
  }, []);

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>{error}</Text>;
  //console.log({ data, loading, error });
  return (
    <View>
      {data &&
        (console.log(data.photos),
        (
          <>
            <NavigationHeader navigation={navigation} title={data.name} />
            {/* <FlatList
              data={data.photos}
              keyExtractor={(photo) => photo}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item }}
                  style={{ height: imageHeight, width: imageWidth }}
                />
              )}
            /> */}
            <PhotoSwiper data={data.photos} />
          </>
        ))}
    </View>
  );
}
