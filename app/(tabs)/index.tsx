import { StyleSheet } from "react-native";
import { Words, View } from "@/components";
import { colors } from "@/constants";

function Page() {
  return (
    <View>
      <Words style={styles.title}>Tab One</Words>
    </View>
  );
}

export default Page;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "Bold",
  },
  separator: {
    color: colors.primaryVariant,
  },
});
