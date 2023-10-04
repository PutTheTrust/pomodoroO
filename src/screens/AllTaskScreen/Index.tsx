import { View, Text, StyleSheet, FlatList } from "react-native";
import AppBar from "../../components/AppBar";
import BackButton from "../../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";

import more from "../../../assets/images/icon-more.png";
import { FlashList } from "@shopify/flash-list";
import tasks from "../../constants/tasks";
import TaskItem from "../../components/TaskItem";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar text={"Todays Tasks (16)"} isBack={true} image={more} />

      <FlatList
        data={tasks}
        style={styles.list}
        contentContainerStyle={styles.innerList}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TaskItem icon={more} title={item.title} time={item.time} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  list: {
    marginTop: 39,
  },
  innerList: {
    gap: 16,
    paddingBottom: 50,
  },
});

export default Index;
