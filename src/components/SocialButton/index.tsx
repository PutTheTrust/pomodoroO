import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import colors from "../../themes/colors";

interface SocialButtonProps {
  image: ImageSourcePropType;
  text: string;
  isSmall: boolean;
}

const index = ({ text, image, isSmall }: SocialButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { width: isSmall ? 88 : "auto" }]}
      onPress={() => {}}
    >
      <Image source={image} />
      {!isSmall ? <Text style={styles.text}> {text}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 15,
    borderColor: colors.gray,
    borderWidth: 3,
    gap: 12,
  },
  text: {
    fontWeight: "600",
  },
});

export default index;
