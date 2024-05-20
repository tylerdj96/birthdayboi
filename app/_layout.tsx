import { supabase } from "@/supabase/init";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Session } from "@supabase/supabase-js";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { AppState, StyleSheet } from "react-native";

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

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

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

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  console.log(session);

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="sign-in"
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="sign-up"
          options={{ presentation: "modal", headerShown: false }}
        />
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
