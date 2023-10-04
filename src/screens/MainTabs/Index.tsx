import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  CreateTaskScreen,
  HomeScreen,
  ProfileScreen,
  StatisticsScreen,
  TaskScreen,
} from "..";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import colors from "../../themes/colors";

const Tab = createBottomTabNavigator();
const Index = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Land"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={24} color={color} />
          ),
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="CreateTask"
        component={CreateTaskScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plus" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="barschart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Index;
