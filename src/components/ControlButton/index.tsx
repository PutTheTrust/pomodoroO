import { ReactNode } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import colors from "../../themes/colors";

interface ControlButtonProps {
  children: ReactNode;
  isPlay?: boolean;
  onPress: VoidFunction;
}

const index = ({ children, isPlay, onPress }: ControlButtonProps) => {
  return (
    // <View >
    <TouchableOpacity
      style={[styles.button, isPlay && styles.playButton]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
    // </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 54,
    height: 54,
    backgroundColor: colors.gray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  playButton: {
    backgroundColor: colors.primary,
    width: 100,
    height: 100,
  },
});

export default index;
