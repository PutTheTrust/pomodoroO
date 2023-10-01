import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import getUsername from "../../actions/getUsername";
import colors from "../../themes/colors";

import logo from "../../../assets/images/small-logo.png";
import bell from "../../../assets/images/icon-bell.png";
import book from "../../../assets/images/icon-book.png";
import TaskItem from "../../components/TaskItem";
import tasks from "../../constants/tasks";

const Index = () => {
  const [firstName, setFirstName] = useState("Christina");
  useEffect(() => {
    // const getName = async () => {
    //   await getUsername()
    //     .then((res) => {
    //       setFirstName(res!);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // getName();
    // console.log(firstName);
  }, [firstName]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 17 }}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.logoText}>Pomo</Text>
        </View>
        <TouchableOpacity>
          <Image style={styles.image} source={bell} />
        </TouchableOpacity>
      </View>

      {firstName ? (
        <Text style={styles.greetingText}>Morning, {firstName} 👋</Text>
      ) : (
        <ActivityIndicator />
      )}

      {/* TODO */}
      <View style={styles.progress}></View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 37,
          }}
        >
          <Text style={styles.todayText}>Today Tasks (16)</Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{ flex: 1, backgroundColor: "blue" }}> */}
        {/* <ScrollView contentContainerStyle={{ gap: 16 }}>
          <TaskItem icon={book} title="Reading Books" time="50 minutes" />
          <TaskItem icon={book} title="Reading Books" time="50 minutes" />
          <TaskItem icon={book} title="Reading Books" time="50 minutes" />
          <TaskItem icon={book} title="Reading Books" time="50 minutes" />
          <TaskItem icon={book} title="Reading Books" time="50 minutes" />
          <TaskItem icon={book} title="Reading Books" time="50 minutes" />
        </ScrollView> */}
        <View>
          <FlatList
            data={tasks}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(task) => task.id}
            contentContainerStyle={{
              gap: 16,
            }}
            renderItem={({ task }: any) => (
              <TaskItem icon={book} title="Reading Books" time="50 minutes" />
            )}
          />
        </View>

        {/* <Text>Hell</Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    // backgroundColor: colors.background,
  },
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
  greetingText: {
    fontWeight: "700",
    fontSize: 28,
    marginVertical: 38,
  },
  progress: {
    height: 160,
    backgroundColor: "lightgreen",
    borderRadius: 30,
  },
  todayText: {
    fontWeight: "700",
    fontSize: 18,
  },
  seeAll: {
    color: colors.primary,
    fontWeight: "700",
  },
});

export default Index;
