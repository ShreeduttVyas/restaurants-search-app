import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import SwiperFlatList from "react-native-swiper-flatlist";

const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width;
const imageHeight = Math.round((dimensions.height * 9) / 22);

export default function PhotoSwiper({ data }) {
  return (
    <View
      style={{
        borderBottomWidth: 3,
        borderBottomColor: "darkgrey",
      }}
    >
      <SwiperFlatList
        showPagination
        paginationStyleItem={{ width: 8, height: 8 }}
        data={data}
        renderItem={({ item }) => (
          <View style>
            <Image
              source={{ uri: item }}
              style={{
                height: imageHeight,
                width: imageWidth,
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
