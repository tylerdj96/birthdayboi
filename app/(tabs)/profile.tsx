import { Words, View } from "@/components";
import { Link } from "expo-router";
import React from "react";

const Page = () => {
  return (
    <View>
      <Words>Here is some user info</Words>
      <Link href="/sign-in">Login</Link>
    </View>
  );
};

export default Page;
