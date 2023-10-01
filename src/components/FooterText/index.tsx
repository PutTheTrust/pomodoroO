import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../themes/colors";

interface FooterTextProps {
  leadingText: string;
  trailingTest: string;
  onPress: VoidFunction;
}

const index = ({ leadingText, trailingTest, onPress }: FooterTextProps) => {
  return (
    <View style={styles.footer}>
      <Text>{leadingText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.footerBtn}>{trailingTest}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  footerBtn: {
    color: colors.primary,
    fontWeight: "700",
    // marginLeft: 14,
  },
});

export default index;
