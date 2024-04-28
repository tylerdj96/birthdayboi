import { useColorScheme } from "@/hooks/useColorScheme";
import { config } from "@/constants";
import { tokenCache } from "@/utils";
import { ClerkProvider, useSignIn } from "@clerk/clerk-expo";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Fun: require("../assets/fonts/LilitaOne-Regular.ttf"),
    Regular: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    Thin: require("../assets/fonts/Poppins/Poppins-Thin.ttf"),
    Light: require("../assets/fonts/Poppins/Poppins-Light.ttf"),
    Italic: require("../assets/fonts/Poppins/Poppins-Italic.ttf"),
    Bold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    Black: require("../assets/fonts/Poppins/Poppins-Black.ttf"),
    ExtraBold: require("../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    SemiBold: require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={config.clerkPublishableKey}
      tokenCache={tokenCache}
    >
      <RootLayoutNav />
    </ClerkProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { signIn } = useSignIn();

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="sign-in"
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen name="sign-up" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
