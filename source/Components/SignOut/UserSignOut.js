import { getAuth, signOut } from "firebase/auth";
import { Alert } from "react-native";
export const UserSignOut = () => {
  return new Promise(function (resolve, reject) {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        //   Alert.alert(Alert, "You are Signed out");
        resolve("You are Signed out");
      })
      .catch((error) => {
        reject(`Sign-out Error: ${error}`);
      });
  });
};
