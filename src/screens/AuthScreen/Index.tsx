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
import strings from "../../constants/strings";

const Index = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{strings.authTitle}</Text>

        <View style={styles.btnContainer}>
          <SocialButton
            image={require("../../../assets/images/icon-facebook.png")}
            text={strings.facebookAuthText}
            isSmall={false}
          />
          <SocialButton
            image={require("../../../assets/images/icon-google.png")}
            text={strings.googleAuthText}
            isSmall={false}
          />
          <SocialButton
            image={require("../../../assets/images/icon-apple.png")}
            text={strings.appleAuthText}
            isSmall={false}
          />
        </View>

        <Separator text="or" />

        <View>
          <CustomButton
            title={strings.signinWithP}
            onClick={() => {
              navigation.navigate("Login" as never);
            }}
          />
        </View>
      </View>

      <FooterText
        leadingText={strings.noAccount}
        trailingTest={strings.signupOption}
        onPress={() => {
          navigation.navigate("Register" as never);
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
