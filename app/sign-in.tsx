import { Button, View, Words } from "@/components/styled";
import Circle from "@/components/styled/circle";
import Input from "@/components/styled/input";
import { colors } from "@/constants";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const Page = () => {
  const router = useRouter();
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
        <View style={formStyles.inputContainer}>
          <Input
            placeholder="Email"
            autoComplete="email"
            placeholderTextColor={colors.primaryVariant}
          />
          <Ionicons name="mail-outline" size={24} color="black" />
        </View>
        <View style={formStyles.inputContainer}>
          <Input
            placeholder="Password"
            autoComplete="current-password"
            placeholderTextColor={colors.primaryVariant}
          />
          <Ionicons name="mail-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Words style={formStyles.forgotYourPasswordText}>
          Forgot your password?
        </Words>
        <Button variant="primary" style={footerStyles.signInButton}>
          <Words style={footerStyles.signInButtonText}>Submit</Words>
        </Button>
        <Button variant="secondary" style={footerStyles.signUpButton}>
          <Words style={footerStyles.signUpButtonText}>Sign up</Words>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 80,
    paddingVertical: 120,
    gap: 50,
  },
  headerContainer: {},
  formContainer: {
    gap: 15,
    width: "100%",
  },
  footerContainer: {
    gap: 25,
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

const formStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    backgroundColor: colors.primaryLightVariant,
    borderRadius: 25,
    padding: 15,
    height: "auto",
  },
  forgotYourPasswordText: {
    textDecorationLine: "underline",
  },
});

const footerStyles = StyleSheet.create({
  signInButton: {
    borderRadius: 60,
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  signInButtonText: {
    fontSize: 36,
    fontFamily: "ExtraBold",
  },
  signUpButton: {
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  signUpButtonText: {
    fontSize: 30,
    fontFamily: "SemiBold",
  },
});

export default Page;
