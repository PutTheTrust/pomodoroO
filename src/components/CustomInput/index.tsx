import { View, StyleSheet, TextInput, Image, ImageProps } from "react-native";
import colors from "../../themes/colors";

interface ICustomInputProps {
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  placeholder: string;
  icon?: ImageProps;
  rightIcon?: ImageProps;
  isPassword: boolean;
}

const index = ({
  onChangeText,
  value,
  placeholder,
  icon,
  isPassword,
  rightIcon,
}: ICustomInputProps) => {
  return (
    <View style={styles.inputContainer}>
      {icon && <Image source={icon} />}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType="default"
        secureTextEntry={isPassword}
      />
      {rightIcon && <Image source={rightIcon} />}
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
