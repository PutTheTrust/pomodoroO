import {
  TouchableOpacity,
  Image,
  Text,
  ImageProps,
  StyleSheet,
} from "react-native";
import colors from "../../themes/colors";

interface ProfileButtonProps {
  image: ImageProps;
  text: string;
  onTap: VoidFunction;
  isLogout?: boolean;
}

const Index = ({
  image,
  text,
  onTap,
  isLogout = false,
}: ProfileButtonProps) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onTap}>
      <Image style={styles.image} source={image} />
      <Text style={[styles.text, isLogout && styles.logoutBtn]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 28,
  },
  text: {
    fontWeight: "600",
    fontSize: 17,
  },
  logoutBtn: {
    color: colors.primary,
  },
});
export default Index;
