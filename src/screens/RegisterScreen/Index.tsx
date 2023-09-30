import { View, Text, StyleSheet, TextInput, Image, Modal } from "react-native";
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
// import { register } from "../../utils/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../firebase.config";

const Index = () => {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email: string, password: string) => {
    if (!email || !password) {
      alert("Please populate all fields");
      return;
    }

    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed up
        // const user = userCredential.user;
        alert("Registration successfull");
        navigation.navigate("Home" as never);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Create your Account</Text>

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

      <CustomButton
        title={isLoading ? "Loading..." : "Sign up"}
        onClick={() => {
          signup(email, password);
        }}
      />
      <Separator text="or continue with" />

      <View style={styles.socialContainer}>
        <SocialButton image={facebook} text="" isSmall={true} />
        <SocialButton image={google} text="" isSmall={true} />
        <SocialButton image={apple} text="" isSmall={true} />
      </View>

      <FooterText
        leadingText={strings.alreadyAccount}
        trailingTest={strings.signinOption}
        onPress={() => {
          navigation.navigate("Login" as never);
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
