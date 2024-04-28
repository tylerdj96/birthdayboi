import { colors } from "@/constants";
import React from "react";
import { TextInput, TextInputProps } from "react-native";

const Input = (props: TextInputProps) => {
  const { style, children, ...rest } = props;
  return (
    <TextInput
      style={[
        {
          backgroundColor: colors.primaryLightVariant,
          borderRadius: 25,
          padding: 15,
          width: "100%",
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default Input;
