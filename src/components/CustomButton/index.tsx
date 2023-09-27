import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../themes/colors";

interface CustomButtonProps {
  title: string;
  onClick: VoidFunction;
}

const CustomButton = ({ title, onClick }: CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",
  },
  text: {
    color: "white",
    fontWeight: "700",
  },
});

export default CustomButton;
