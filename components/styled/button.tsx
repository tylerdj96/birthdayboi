import { useThemeColor } from "@/hooks/useThemeColor";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  variant: "primary" | "secondary";
}
export function Button(props: ButtonProps) {
  const { style, children, variant, ...otherProps } = props;
  const color = useThemeColor(variant);

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: color,
          borderRadius: 15,
          paddingHorizontal: 15,
          paddingVertical: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 15,
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </TouchableOpacity>
  );
}
