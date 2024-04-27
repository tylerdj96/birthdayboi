import FontAwesome from "@expo/vector-icons/FontAwesome";
import "@tamagui/core/reset.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "@/components/useColorScheme";
import { ClerkProvider, SignedIn, useAuth, useSignIn } from "@clerk/clerk-expo";
import { config } from "@/constants";
import { SafeAreaView, StyleSheet } from "react-native";
import { tokenCache } from "@/utils";
import { TamaguiProvider, View } from "@tamagui/core";
import tamaguiConfig from "@/tamagui.config";

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
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
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
    <TamaguiProvider
      config={tamaguiConfig}
      defaultTheme={colorScheme ?? undefined}
    >
      {/* <SafeAreaView style={styles.container}> */}
      <Stack>
        {signIn?.status === "complete" && (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        )}
        {signIn?.status !== "complete" && (
          <Stack.Screen name="login" options={{ presentation: "modal" }} />
        )}
      </Stack>
      {/* </SafeAreaView> */}
    </TamaguiProvider>
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
