import {
  OnboardingScreen,
  AuthScreen,
  RegisterScreen,
  LoginScreen,
  HomeScreen,
} from "./src/screens";
import MainTabs from "./src/screens/MainTabs/Index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    //     <Stack.Screen name="Auth" component={AuthScreen} />
    //     <Stack.Screen name="Register" component={RegisterScreen} />
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <MainTabs />
  );
}
