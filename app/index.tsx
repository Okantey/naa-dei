import { router } from "expo-router";
import {
  Text,
  TouchableOpacity,
  View,
  Pressable,
  StyleSheet,
  TextInput
} from "react-native";

const Index = () => {
  return (
    <View style={styles.parent}>
      <Text>Hi this is the index page</Text>
      <TouchableOpacity
        style={styles.firstButton}
        // onPress={() => {
        //   router.push("/login");
        // }}
      >
        <Text style={styles.firstButtonText}>Go to login page</Text>
      </TouchableOpacity>

      {/* this is a pressable */}
      <Pressable>
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
  },

  firstButton: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 15,
  },
  firstButtonText: {
    color: "white",
  },
});

export default Index;
