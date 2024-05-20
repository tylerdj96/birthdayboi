import { Button, Words } from "@/components/styled";
import Circle from "@/components/styled/circle";
import Input from "@/components/styled/input";
import { colors } from "@/constants";
import { supabase } from "@/supabase/init";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { default as React, useCallback, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

const SignInForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signInWithEmail = useCallback(async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    else router.navigate("/profile");
    setLoading(false);
  }, [email, password, router]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Words style={headerStyles.signInHeaderText}>Sign in</Words>
        <View style={headerStyles.logos}>
          <Circle
            style={{
              backgroundColor: colors.secondary,
            }}
            size={40}
          >
            <FontAwesome5 size={20} name="facebook-f" />
          </Circle>
          <Circle
            style={{
              backgroundColor: colors.secondary,
            }}
            size={40}
          >
            <FontAwesome5 size={20} name="google" />
          </Circle>
          <Circle
            style={{
              backgroundColor: colors.secondary,
            }}
            size={40}
          >
            <FontAwesome5 size={20} name="apple" />
          </Circle>
        </View>
        <Words style={headerStyles.orUseYourEmailText}>
          or use your email to login
        </Words>
      </View>
      <View style={styles.formContainer}>
        <Input
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          autoComplete="email"
          placeholderTextColor={colors.primaryVariant}
          style={{ height: 75 }}
        />
        <Input
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          autoComplete="current-password"
          secureTextEntry={true}
          placeholderTextColor={colors.primaryVariant}
          style={{ height: 75 }}
        />
      </View>
      <Words style={footerStyles.forgotYourPasswordText}>
        Forgot your password?
      </Words>
      <View style={styles.footerContainer}>
        <Button
          variant="primary"
          style={footerStyles.signInButton}
          onPress={signInWithEmail}
        >
          <Words style={footerStyles.signInButtonText}>Submit</Words>
        </Button>
        <Button
          variant="secondary"
          style={footerStyles.signUpButton}
          onPress={() => router.navigate("/sign-up")}
        >
          <Words style={footerStyles.signUpButtonText}>Sign up</Words>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 30,
    flex: 1,
    gap: 15,
    width: "100%",
  },
  headerContainer: {
    flex: 3,
    marginVertical: 20,
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 4,
    gap: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 4,
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

const headerStyles = StyleSheet.create({
  signInHeaderText: {
    fontSize: 48,
    fontFamily: "ExtraBold",
  },
  logos: {
    flexDirection: "row",
    gap: 25,
  },
  orUseYourEmailText: {
    fontWeight: "100",
  },
});

const footerStyles = StyleSheet.create({
  forgotYourPasswordText: {
    textDecorationLine: "underline",
  },
  signInButton: {
    borderRadius: 60,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  signInButtonText: {
    fontSize: 36,
    fontFamily: "ExtraBold",
  },
  signUpButton: {
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  signUpButtonText: {
    fontSize: 30,
    fontFamily: "SemiBold",
  },
});

export default SignInForm;
