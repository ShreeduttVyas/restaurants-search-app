import { getAuth, signOut } from "firebase/auth";
export const UserSignOut = () => {
  return new Promise(function (resolve, reject) {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        resolve("You are Signed out");
      })
      .catch((error) => {
        reject(`Sign-out Error: ${error}`);
      });
  });
};
