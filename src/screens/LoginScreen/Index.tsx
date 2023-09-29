import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import BackButton from "../../components/BackButton";
import CustomButton from "../../components/CustomButton";
import Separator from "../../components/Separator/Separator";
import SocialButton from "../../components/SocialButton";

import facebook from "../../../assets/images/icon-facebook.png";
import google from "../../../assets/images/icon-google.png";
import apple from "../../../assets/images/icon-apple.png";
import FooterText from "../../components/FooterText";
import { useState } from "react";
import CustomInput from "../../components/CustomInput";

import EmailIcon from "../../../assets/images/icon-mail.png";
import LockIcon from "../../../assets/images/icon-lock.png";
import { useNavigation } from "@react-navigation/native";
import strings from "../../constants/strings";

const Index = () => {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Login to your Account</Text>

      <View style={styles.inputContainer}>
        <CustomInput
          onChangeEmail={onChangeEmail}
          email={email}
          placeholder="Email"
          icon={EmailIcon}
        />

        <CustomInput
          onChangeEmail={onChangePassword}
          email={password}
          placeholder="Password"
          icon={LockIcon}
        />
      </View>

      <CustomButton title="Sign in" onClick={() => {}} />
      <Separator text="or continue with" />

      <View style={styles.socialContainer}>
        <SocialButton image={facebook} text="" isSmall={true} />
        <SocialButton image={google} text="" isSmall={true} />
        <SocialButton image={apple} text="" isSmall={true} />
      </View>

      <FooterText
        leadingText={strings.noAccount}
        trailingTest={strings.signupOption}
        onPress={() => {
          navigation.navigate("Register" as never);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 24,
    marginVertical: 24,
  },
  inputContainer: {
    gap: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "700",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 19,
  },
});

export default Index;
