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
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../firebase.config";

const Index = () => {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signin = async () => {
    if (!email || !password) {
      alert("Please populate all fields");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        // const user = userCredential.user;
        alert("Succesfully logged in");
        navigation.navigate("Home" as never);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    setIsLoading(false);
  };
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
          isPassword={false}
        />

        <CustomInput
          onChangeEmail={onChangePassword}
          email={password}
          placeholder="Password"
          icon={LockIcon}
          isPassword={true}
        />
      </View>

      <CustomButton title="Sign in" onClick={() => signin()} />
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
