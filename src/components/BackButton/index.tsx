import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image } from "react-native";

const index = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={require("../../../assets/images/icon-back.png")} />
    </TouchableOpacity>
  );
};

export default index;
