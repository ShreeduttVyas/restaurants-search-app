import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import useUserprofile from "../Hooks/useUserprofile";
import { getAuth } from "firebase/auth";
import { Card } from "react-native-elements";
import { AddFirestore_rid, DeleteFirestore_rid } from "../Hooks/useCreateUser";
import { elevation } from "../SharedStyles/Styles";

export default function ProfileScreen() {
  const user = getAuth().currentUser;
  const [profileData, getProfile] = useUserprofile();
  useEffect(() => {
    if (user) {
      getProfile({ uid: user.uid });
    }
  }, []);

  return (
    <View style={styles.container}>
      {profileData && (
        <Card>
          <Card.Title style={styles.Title}>Profile</Card.Title>
          <Card.Divider />
          <View style={[styles.subContainer, elevation]}>
            <Text style={styles.subHeader}>Username:</Text>
            <Text style={styles.Text}>{profileData.username}</Text>
          </View>
          <View style={[styles.subContainer, elevation]}>
            <Text style={styles.subHeader}>Mail:</Text>
            <Text style={styles.Text}>{profileData.email}</Text>
          </View>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    padding: 10,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 15,
  },
  Title: {
    fontSize: 30,
  },
  subHeader: {
    fontSize: 15,
    backgroundColor: "lightgrey",
    fontWeight: "450",
  },
  Text: {
    marginStart: 20,
  },
});
