import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import SocialButton from "../../components/SocialButton";
import Separator from "../../components/Separator/Separator";
import colors from "../../themes/colors";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import FooterText from "../../components/FooterText";

const Index = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Let's you in</Text>

        <View style={styles.btnContainer}>
          <SocialButton
            image={require("../../../assets/images/icon-facebook.png")}
            text={"Facebook"}
            isSmall={false}
          />
          <SocialButton
            image={require("../../../assets/images/icon-google.png")}
            text={"Google"}
            isSmall={false}
          />
          <SocialButton
            image={require("../../../assets/images/icon-apple.png")}
            text={"Apple"}
            isSmall={false}
          />
        </View>

        <Separator text="or" />

        <View>
          <CustomButton title="Sign in with password" onClick={() => {}} />
        </View>
      </View>

      <FooterText
        leadingText="Don't have an account?"
        trailingTest="Sign up"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />

      <View style={{ marginBottom: 53 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 84,
    paddingHorizontal: 24,
  },
  //   image: {
  //     marginLeft: 24,
  //   },

  contentContainer: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "space-around",
  },

  btnContainer: {
    gap: 16,
    // marginHorizontal: 24,
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Index;
