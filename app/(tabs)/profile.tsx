import { View, Text } from "@/components/Themed";
import { Link } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const Page = () => {
  return (
    <View>
      <Text>Here is some user info</Text>
      <Link href="/login">Login</Link>
    </View>
  );
};

export default Page;
