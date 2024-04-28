import { useThemeColor } from "@/hooks/useThemeColor";
import { Text as RNText, View as DefaultView } from "react-native";

export function Words(props: RNText["props"]) {
  const { style, ...otherProps } = props;
  const color = useThemeColor("onPrimary");

  return (
    <RNText style={[{ color, fontFamily: "Regular" }, style]} {...otherProps} />
  );
}
