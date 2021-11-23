import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={require("../assets/logo-airbnb-2.jpg")}
        resizeMode="contain"
        style={StyleSheet.logo}
      />
      <Text>Welcome home!</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate("Profile", { userId: 123 });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
  },
});
