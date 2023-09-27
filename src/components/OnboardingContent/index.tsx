import { Dimensions, FlatList, StyleSheet, View } from "react-native";

import OnboardingItem from "../OnboardingItem";
import { useRef, useState } from "react";
import CustomButton from "../CustomButton";
import onboardingData from "../../constants/onboardingData";

const index = () => {
  const [active, setActive] = useState(0);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    setActive(viewableItems[0].item.id);
  };

  // const swipe = () => {
  //   if (active < 2) {
  //     setActive(active + 1);
  //   }
  // };

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);
  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        renderItem={({ item }) => (
          <OnboardingItem url={item.url} title={item.title} />
        )}
      />

      <View style={styles.progressContainer}>
        <View style={active === 0 ? styles.progressActive : styles.progress} />
        <View style={active === 1 ? styles.progressActive : styles.progress} />
        <View style={active === 2 ? styles.progressActive : styles.progress} />
      </View>

      <View style={styles.btnContainer}>
        <CustomButton
          title={active === 2 ? "Get Started" : "Next"}
          onClick={() => swipe()}
        />
      </View>

      <View style={{ marginTop: 40 }} />
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
  progressContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    marginBottom: 60,
  },
  progress: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: "lightgray",
  },
  progressActive: {
    width: 32,
    height: 10,
    borderRadius: 100,
    backgroundColor: "red",
  },
  btnContainer: {
    // marginHorizontal: 24,
    width: Dimensions.get("window").width - 24,
  },
});

export default index;
