import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <View>
      <View style={styles.signInContainer}>
        <View style={styles.subContainer0}>
          <Image
            source={require("../assets/logo-airbnb-2.jpg")}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.pageTitle}>Sign In</Text>
        </View>

        <View style={styles.subContainer}>
          <TextInput placeholder="email" style={styles.input} />
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>

        <View style={styles.subContainer2}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              const userToken = "secret-token";
              setToken(userToken);
            }}
          >
            <Text style={styles.buttonLabel}>SIGN IN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
            // style={styles.button}
          >
            <Text style={styles.fadedText}>No account ? Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 150,
    paddingBottom: 20,
  },
  signInContainer: {
    justifyContent: "space-around",
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    alignItems: "center",
  },
  pageTitle: {
    fontWeight: "bold",
    paddingTop: 10,
    width: 60,
    fontSize: 18,
  },
  input: {
    borderBottomColor: "rgba(237, 96, 104, 0.5)",
    borderStyle: "solid",
    borderBottomWidth: 3,
    marginBottom: 20,
    opacity: 0.8,
    width: 300,
  },
  button: {
    marginTop: 10,
    borderColor: "rgba(237, 96, 104, 0.7)",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 30,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  fadedText: {
    color: "grey",
  },
  buttonLabel: {
    fontSize: 20,
  },
  subContainer: {
    alignItems: "center",
  },
  subContainer2: {
    alignItems: "center",
    marginBottom: 80,
  },
  subContainer0: {
    alignItems: "center",
  },
});
