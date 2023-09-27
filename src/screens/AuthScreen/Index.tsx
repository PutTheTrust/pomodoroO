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

const Index = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require("../../../assets/images/icon-back.png")} />
      </TouchableOpacity>
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

      <View style={styles.footer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.footerBtn}>Signup</Text>
        </TouchableOpacity>
      </View>

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

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  footerBtn: {
    color: colors.primary,
    fontWeight: "700",
    // marginLeft: 14,
  },
});

export default Index;
