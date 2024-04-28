import { colors } from "@/constants";

export function useThemeColor(colorName: keyof typeof colors) {
    return colors[colorName];
  }
  