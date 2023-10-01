import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageProps,
} from "react-native";

import colors from "../../themes/colors";
import play from "../../../assets/images/icon-play.png";

interface TaskItemProps {
  icon: ImageProps;
  title: string;
  time: string;
}

const index = ({ icon, title, time }: TaskItemProps) => {
  return (
    <View style={styles.taskContainer}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <View style={styles.taskIcon}>
          <Image source={icon} />
        </View>

        <View>
          <Text style={styles.taskTitle}>{title}</Text>
          <Text style={styles.taskTime}>{time}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.play}>
        <Image source={play} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    height: 100,
    backgroundColor: "lightgreen",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  taskIcon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 60,
    width: 60,
    borderRadius: 20,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  taskTime: {
    color: "gray",
  },
  play: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: colors.darkGreen,
    height: 44,
    width: 44,
  },
});

export default index;
