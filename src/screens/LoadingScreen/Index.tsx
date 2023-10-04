import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { auth } from "../../../firebase.config";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in
        // setLoggedIn(true);
        navigation.navigate("Home" as never);
      } else {
        navigation.navigate("Login" as never);
      }
    });

    // Clean up the subscription
    return unsubscribe;
  }, []);
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default Index;
