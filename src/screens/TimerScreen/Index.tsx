import { View, Text, StyleSheet, Image } from "react-native";
import BackButton from "../../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";

import technology from "../../../assets/images/icon-book.png";
import colors from "../../themes/colors";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Ionicons } from "@expo/vector-icons";
import ControlButton from "../../components/ControlButton";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <BackButton />
        <Text style={styles.topText}>Pomodoro Timer</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.taskIcon}>
          <Image source={technology} />
        </View>

        <View>
          <Text style={styles.taskTitle}>Learn UI Design</Text>
          <Text style={styles.taskTime}>120 minutes</Text>
        </View>

        <View>
          <Text style={[styles.taskTitle, styles.right]}>2/4</Text>
          <Text style={styles.taskTime}>25 minutes</Text>
        </View>
      </View>

      <View style={styles.timerContainer}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={1500}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          size={300}
        >
          {({ remainingTime }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={styles.timerText}>
                {Math.floor(remainingTime / 60)} :{" "}
                {Math.round(remainingTime % 60)}
              </Text>

              <Text>2 of 4 sessions</Text>
            </View>
          )}
        </CountdownCircleTimer>
      </View>

      <Text style={{ textAlign: "center" }}>Stay Focused for 25 minutes</Text>

      <View style={styles.controlls}>
        <ControlButton onPress={() => {}}>
          <Ionicons name="refresh-outline" size={24} color="gray" />
        </ControlButton>

        <ControlButton
          isPlay
          onPress={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={24}
            color="white"
          />
        </ControlButton>

        <ControlButton onPress={() => {}}>
          <Ionicons name="stop" size={24} color="gray" />
        </ControlButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    // backgroundColor: "#ebebeb",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
  },
  topText: {
    fontWeight: "800",
    fontSize: 24,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: 100,
    paddingHorizontal: 20,
    borderRadius: 15,
  },

  taskIcon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGreen,
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

  right: {
    textAlign: "right",
  },
  timerContainer: {
    alignItems: "center",
    // backgroundColor: "green",
    height: 300,
  },
  timerText: {
    fontSize: 28,
    fontWeight: "700",
  },
  controlls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
export default Index;
