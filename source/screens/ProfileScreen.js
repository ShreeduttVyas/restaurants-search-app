import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import useUserprofile from "../Hooks/useUserprofile";
import { getAuth } from "firebase/auth";
import { AddFirestore_rid, DeleteFirestore_rid } from "../Hooks/useCreateUser";

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
        <>
          <TouchableOpacity
            style={{ backgroundColor: "red" }}
            onPress={() => {
              console.log("touch");
            }}
          >
            <Text>ProfileScreen</Text>
          </TouchableOpacity>
          <Text>Username: {profileData.username}</Text>
          <Text>email: {profileData.email}</Text>
          <Text>Rid: {profileData.rid}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
