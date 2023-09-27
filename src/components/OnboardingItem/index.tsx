import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ImageSourcePropType,
} from "react-native";

interface OnboardingItemProps {
  url: ImageSourcePropType;
  title: string;
}
const index = ({ url, title }: OnboardingItemProps) => {
  return (
    <View style={styles.listContainer}>
      <Image style={styles.image} source={url}></Image>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 26,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },

  listContainer: {
    width: Dimensions.get("window").width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 59,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
  },
});

export default index;
