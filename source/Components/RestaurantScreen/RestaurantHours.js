import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HourFormater from "./Helperfunction/HourFormatter";

export default function RestaurantHours({ hours, list }) {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const Today = new Date().getDay();

  const currentWeek = weekdays
    .slice(Today - 1, weekdays.length)
    .concat(weekdays.slice(0, Today - 1));

  const WeekfromToday = hours
    .slice(Today - 1, hours.length)
    .concat(hours.slice(0, Today - 1));
  if (list) {
    return WeekfromToday.map((hour, index) => {
      return (
        <View key={index} style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.Text}>{currentWeek[index]}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.Text}>
              {HourFormater(hour.start)}
              {" - "}
              {HourFormater(hour.end)}
            </Text>
          </View>
        </View>
      );
    });
  } else {
    return (
      <Text style={styles.Text}>
        {weekdays[Today - 1]} {HourFormater(WeekfromToday[0].start)}
        {" - "}
        {HourFormater(WeekfromToday[0].end)}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 13,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
  },
});
