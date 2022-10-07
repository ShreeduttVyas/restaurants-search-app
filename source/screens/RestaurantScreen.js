import React, { useEffect } from "react";
import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import useRestaurant from "../Hooks/useRestaurant";
import NavigationHeader from "../Components/Shared/NavigationHeader";
import PhotoSwiper from "../Components/RestaurantScreen/PhotoSwiper";

export default function RestaurantScreen({ navigation, route }) {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();

  useEffect(() => {
    if (route.params?.id) searchRestaurant(route.params.id);
  }, []);

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>{error}</Text>;

  return (
    <View>
      {data &&
        (console.log(data.hours),
        (
          <>
            <NavigationHeader navigation={navigation} title={data.name} />
            <PhotoSwiper data={data.photos} />
            {}
            <View>
              <Pressable
                style={styles.conatainer}
                onPress={() => {
                  var lat = data.coordinates.latitude;
                  var lng = data.coordinates.longitude;
                  var scheme =
                    Platform.OS === "ios"
                      ? "https://maps.apple.com/?daddr="
                      : "https://maps.google.com/maps?daddr=";
                  var url = scheme + `${lat},${lng}`;
                  console.log(url);
                  Linking.openURL(url);
                }}
              >
                <MaterialIcons
                  name="location-pin"
                  size={30}
                  style={styles.icon}
                />
                <Text style={styles.addressText}>
                  {data.location.display_address.join(", ")}
                </Text>
              </Pressable>
            </View>
            {}
            <View>
              <Pressable
                style={styles.conatainer}
                onPress={() => {
                  Linking.openURL(`tel:${data.phone}`);
                }}
              >
                <MaterialIcons name="phone" size={30} style={styles.icon} />
                <Text style={styles.addressText}>{data.phone}</Text>
              </Pressable>
            </View>
            {}
            <View>
              <View style={styles.conatainer}>
                <MaterialIcons
                  name="access-time"
                  size={30}
                  style={styles.icon}
                />
                <Text style={styles.addressText}>
                  {data.location.display_address.join(",")}
                </Text>
              </View>
            </View>
            {}
          </>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    flexDirection: "row",
    alignContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(217,217,217)",
  },
  icon: {
    marginLeft: 5,
    marginRight: 20,
  },
  addressText: {
    flex: 1,
    fontSize: 13,
    padding: 6,
    textAlignVertical: "center",
  },
});
