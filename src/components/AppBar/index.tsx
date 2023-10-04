import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageProps,
} from "react-native";

import logo from "../../../assets/images/small-logo.png";
import BackButton from "../BackButton";

interface AppBarProps {
  text: string;
  image: ImageProps;
  isBack?: boolean;
}

const index = ({ text, image, isBack }: AppBarProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        {isBack ? <BackButton /> : <Image style={styles.logo} source={logo} />}
        <Text style={styles.logoText}>{text}</Text>
      </View>
      <TouchableOpacity>
        <Image style={styles.image} source={image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    borderRadius: 10,
  },
  logoText: {
    fontWeight: "900",
    fontSize: 18,
  },

  image: {
    height: 32,
    width: 32,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
  },
});

export default index;
