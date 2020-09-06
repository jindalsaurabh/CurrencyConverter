import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, Something went wrong", "Please try again later.");
  });
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          text="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          text="React Native Basics"
          onPress={() => openUrl("https://google.com")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          text="RN by Example"
          onPress={() => openUrl("https://facebook.com")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />
      </ScrollView>
    </SafeAreaView>
  );
};
