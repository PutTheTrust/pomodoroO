import { View, StyleSheet, TextInput, Image, ImageProps } from "react-native";
import colors from "../../themes/colors";

interface ICustomInputProps {
  onChangeEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  placeholder: string;
  icon: ImageProps;
}

const index = ({
  onChangeEmail,
  email,
  placeholder,
  icon,
}: ICustomInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Image source={icon} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder={placeholder}
        inputMode="email"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: colors.gray,
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 22,
  },
  input: {
    // backgroundColor: "green",
    width: "90%",
    height: "auto",
  },
});

export default index;
