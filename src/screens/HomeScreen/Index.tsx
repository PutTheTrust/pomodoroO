import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import logo from "../../../assets/images/small-logo.png";
import bell from "../../../assets/images/icon-bell.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import getUsername from "../../actions/getUsername";

const Index = () => {
  const [firstName, setFirstName] = useState("");
  useEffect(() => {
    // try {
    //   const currentU = await getUsername();
    //   console.log("USERNAME _>", currentU);
    // } catch (error) {
    //   console.log(error);
    // }

    const getName = async () => {
      await getUsername()
        .then((res) => {
          setFirstName(res!);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getName();
    console.log(firstName);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 17 }}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.logoText}>Pomo</Text>
        </View>
        <TouchableOpacity>
          <Image style={styles.image} source={bell} />
        </TouchableOpacity>
      </View>

      <Text style={styles.greetingText}>Morning, {firstName} 👋</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    borderRadius: 10,
  },
  logoText: {
    fontWeight: "900",
    fontSize: 18,
  },

  image: {
    height: 32,
    width: 32,
  },

  greetingText: {
    fontWeight: "700",
    fontSize: 28,
  },
});

export default Index;
