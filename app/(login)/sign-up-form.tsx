import { Button, Words } from "@/components";
import Input from "@/components/styled/input";
import { supabase } from "@/supabase/init";
import React, { useCallback, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUpWithEmail = useCallback(async () => {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }, [email, password]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Words style={headerStyles.createYourAccountText}>
          Create your account
        </Words>
      </View>
      <View style={styles.formContainer}>
        <View style={{ flexDirection: "row" }}>
          <Input
            value={firstName}
            placeholder="First Name"
            onChangeText={(firstName) => setFirstName(firstName)}
            style={{ width: "50%" }}
          />
          <Input
            value={lastName}
            placeholder="Last Name"
            onChangeText={(lastName) => setLastName(lastName)}
            style={{ width: "50%" }}
          />
        </View>
        <Input
          value={birthday}
          autoComplete="birthdate-full"
          placeholder="Birthday"
          onChangeText={(birthday) => setBirthday(birthday)}
        />
        <Input
          value={email}
          autoComplete="email"
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.footerContainer}>
        <Button
          variant="secondary"
          style={footerStyles.signUpButton}
          onPress={signUpWithEmail}
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
    gap: 15,
    padding: 30,
    justifyContent: "space-evenly",
    height: "100%",
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    gap: 15,
  },
  formContainer: {
    gap: 15,
    width: "100%",
  },
  footerContainer: {
    gap: 15,
  },
});

const headerStyles = StyleSheet.create({
  createYourAccountText: {
    fontSize: 36,
    fontFamily: "ExtraBold",
  },
});

const footerStyles = StyleSheet.create({
  signUpButton: {
    borderRadius: 60,
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  signUpButtonText: {
    fontSize: 36,
    fontFamily: "ExtraBold",
  },
});

export default SignUpForm;
