import { View, Text, StyleSheet, ScrollView } from "react-native";
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
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../firebase.config";
import { SafeAreaView } from "react-native-safe-area-context";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";

const Index = () => {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [name, onChangeName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email: string, password: string) => {
    if (!email || !password || !name || !lastName) {
      alert("Please populate all fields");
      return;
    }

    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const userEmail = userCredential.user.email;
        try {
          const docRef = doc(db, "users", userEmail!); // Create a reference with the custom ID
          setDoc(docRef, {
            name: name,
            last_name: lastName,
            email: userEmail,
          });
        } catch (e) {
          alert(e);
        }
        alert("Registration successfull");
        navigation.navigate("Home" as never);
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
    <SafeAreaView style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Create your Account</Text>

      <View style={{ height: 296 }}>
        <ScrollView
          style={styles.inputContainer}
          contentContainerStyle={{ gap: 24 }}
        >
          <CustomInput
            onChangeEmail={onChangeName}
            email={name}
            placeholder="Name"
            icon={LockIcon}
          />

          <CustomInput
            onChangeEmail={onChangeLastName}
            email={lastName}
            placeholder="Lastname"
            icon={LockIcon}
          />

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
        </ScrollView>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  // inputContainer: {
  // gap: 20,
  // paddingVertical: 24,
  // flex: 1,
  // gap: 24,
  // backgroundColor: "green",
  // },
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
