import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppBar from "../../components/AppBar";
import colors from "../../themes/colors";
import ProfileButton from "../../components/ProfileButton";

import more from "../../../assets/images/icon-more.png";
import person from "../../../assets/images/icon-person.png";
import bell from "../../../assets/images/icon-bell.png";
import security from "../../../assets/images/icon-security.png";
import info from "../../../assets/images/icon-information.png";
import logout from "../../../assets/images/icon-logout.png";
import favourite from "../../../assets/images/icon-favourite.png";

import { auth } from "../../../firebase.config";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate("Login" as never);
    } catch (e) {
      // an error
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppBar text="Profile" image={more} />

      <View style={styles.infoContainer}>
        <View style={styles.image}>
          <Text style={styles.imageText}>C</Text>
        </View>
        <Text style={styles.name}>Christina Ainsley</Text>
        <Text style={styles.email}>christina_ainsley@yourdomain.com</Text>
      </View>

      <View style={styles.upgrade} />

      <ScrollView
        style={styles.buttonContainer}
        contentContainerStyle={{ gap: 28 }}
      >
        <ProfileButton image={person} text="Edit Profile" onTap={() => {}} />
        <ProfileButton
          image={favourite}
          text="Pomo Settings"
          onTap={() => {}}
        />
        <ProfileButton image={bell} text="Notifications" onTap={() => {}} />
        <ProfileButton image={security} text="Security" onTap={() => {}} />
        {/* <ProfileButton image={info} text="Help" onTap={() => {}} /> */}
        <ProfileButton
          image={logout}
          text="Logout"
          onTap={() => {
            handleLogout();
          }}
          isLogout={true}
        />
        <View style={{ marginTop: 12 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  infoContainer: {
    alignItems: "center",
  },

  image: {
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 39,
  },

  imageText: {
    fontSize: 36,
    color: "white",
    fontWeight: "900",
  },

  name: {
    marginTop: 23,
    fontWeight: "700",
    fontSize: 24,
  },

  email: {
    marginTop: 12,
    fontWeight: "500",
    fontSize: 14,
  },

  upgrade: {
    height: 102,
    backgroundColor: colors.primary,
    borderRadius: 24,
    marginTop: 29,
  },
  buttonContainer: {
    marginTop: 32,
  },
});

export default Index;
