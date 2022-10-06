import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Loginform({ navigation }) {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(8, "Your password has to have 8 characters"),
  });

  const onLogin = async (email, password) => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error.message), Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={false}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 8
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                textContentType="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#6BB0F5" }}>Forgot password?</Text>
            </View>
            <Pressable
              titlesize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity
                style
                onPress={() => navigation.navigate("Signup")}
              >
                <Text style={{ color: "#6BB0F5" }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
  },
  inputField: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 5,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});
