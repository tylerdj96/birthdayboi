import { View, Text } from "@/components/Themed";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import SignUpForm from "./(login)/sign-up-form";
import { Button } from "tamagui";

const Page = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Text>Log me in baby</Text>
      <Button
        onPress={() => router.replace("/(tabs)")}
        style={{ fontFamily: "InterBold" }}
      >
        <Text>Go back</Text>
      </Button>
      <SignUpForm />
    </View>
  );
};

export default Page;
