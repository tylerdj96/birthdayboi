import { useThemeColor } from "@/hooks/useThemeColor";
import { View as RNView } from "react-native";

export function View(props: RNView["props"]) {
  const { style, ...otherProps } = props;
  const backgroundColor = useThemeColor("background");

  return (
    <RNView
      style={[
        {
          backgroundColor,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
