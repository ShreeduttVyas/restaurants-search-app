/*
    Yelp API is inconsistent with the data and many times the data is null or certain objects are undefined 
    added validation for data where inconsistency found :-))

*/
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import RestaurantHours from "./RestaurantHours";

const RestaurantTiming = ({ data }) => {
  const [showHours, setShowHours] = useState(false);
  /////////
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setShowHours(!showHours);
        }}
        style={{ flexDirection: "row" }}
      >
        <MaterialIcons name="access-time" size={30} style={styles.icon} />
        {/* subcontainer for hours, checking if we have the values or not */}
        {data.hours === undefined ? (
          <Text style={styles.Text}>Info not Available</Text>
        ) : (
          <View style={{ flexDirection: "row" }}>
            {/* showHours state to show single day hours or list of week hours */}
            {!showHours ? (
              <>
                <Text style={styles.hoursText(data.hours.is_open_now)}>
                  {data.hours.is_open_now ? "Open" : "Closed"}
                </Text>
                <RestaurantHours hours={data.hours[0].open} list={false} />
              </>
            ) : (
              <View style={{ flexDirection: "column", width: "80%" }}>
                <RestaurantHours hours={data.hours[0].open} list={true} />
              </View>
            )}
            <MaterialIcons
              name={!showHours ? "arrow-drop-down" : "arrow-drop-up"}
              size={30}
            />
          </View>
          ///
        )}
      </Pressable>
    </View>
  );
};

export default RestaurantTiming;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(217,217,217)",
  },

  icon: {
    marginLeft: 5,
    marginRight: 20,
  },
  hoursText: (isOpen) => ({
    fontSize: 13,
    padding: 6,
    textAlignVertical: "center",
    color: isOpen ? "green" : "red",
  }),
  Text: {
    fontSize: 13,
    padding: 6,
    textAlignVertical: "center",
  },
});
