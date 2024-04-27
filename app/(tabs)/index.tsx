import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import {
  Circle,
  Paragraph,
  SizableText,
  Square,
  XStack,
  YStack,
} from "tamagui";

function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <XStack
        flex={1}
        flexWrap="wrap"
        backgroundColor="#fff"
        hoverStyle={{
          backgroundColor: "red",
        }}
        // media query
        $gtSm={{
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <YStack gap="$3">
          <Text>Hello</Text>
          <Text>World</Text>
          <Square size={100} backgroundColor="$color" elevation="$4"></Square>
          <Circle size={100} backgroundColor="$color" elevation="$4"></Circle>
        </YStack>
        <YStack space="$2" alignItems="center">
          <SizableText size="$3">SizableText</SizableText>
          <XStack space>
            <SizableText theme="alt1" size="$3">
              alt1
            </SizableText>
            <SizableText theme="alt2" size="$3">
              alt2
            </SizableText>
          </XStack>
          <Paragraph size="$2" fontWeight="800">
            Paragraph
          </Paragraph>
        </YStack>
      </XStack>
    </View>
  );
}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
