import {
  Dimensions,
  TouchableHighlight,
  Text,
  TouchableHighlightProps,
} from "react-native";
import React from "react";

interface CicleProps extends TouchableHighlightProps {
  size?: number;
}
const Circle = (props: CicleProps) => {
  const { style, children, size, ...rest } = props;

  const circleSize =
    size ?? Dimensions.get("window").width + Dimensions.get("window").height;

  const borderRadius = Math.round(circleSize) / 2;
  const width = size ?? Dimensions.get("window").width * 0.5;
  const height = size ?? Dimensions.get("window").width * 0.5;

  return (
    <TouchableHighlight
      style={[
        {
          borderRadius,
          width,
          height,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
      onPress={() => alert("Yaay!")}
      {...rest}
    >
      {children}
    </TouchableHighlight>
  );
};

export default Circle;
