import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Login = () => {
  return (
    <View style={styles.parent}>
      <Image
        style={styles.ImageIcon}
        source={{
          uri: "https://preview.redd.it/milr969373561.jpg?width=640&crop=smart&auto=webp&s=0489105bbefd3decd68950da2334507dc25490fe",
        }}
      />
      <Text style={styles.title}> Beverly Little </Text>
      <Text style={styles.subtitle}>SENIOR PRODUCT DESIGNER </Text>
      <Text style={styles.subtitleone}>
        Create usable interface and designs @GraficSpark{" "}
      </Text>
      <TouchableOpacity style={styles.hiremebutton}>
        <Text style={styles.hiremetext}> Hire Me </Text>
      </TouchableOpacity>

      <View style={styles.line}></View>

      <View style={styles.activitybox}>
        <View>
          <View style={styles.icon}>
            <FontAwesome5 name="basketball-ball" size={24} color="black" />
          </View>

          <Text style={styles.icontext}> 12.8k </Text>
          <Text style={styles.icontext1}> Followers </Text>
        </View>

        <View>
          <View style={styles.icon1}>
            <FontAwesome6 name="behance" size={24} color="black" />
          </View>

          <Text style={styles.icontext}> 12.8k </Text>
          <Text style={styles.icontext1}> Followers </Text>
        </View>

        <View>
          <View style={styles.icon2}>
            <FontAwesome6 name="upwork" size={24} color="black" />
          </View>

          <Text style={styles.icontext}> 12.8k </Text>
          <Text style={styles.icontext1}> Followers </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  ImageIcon: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginBottom: 15,
  },

  title: {
    fontSize: 29,
    fontWeight: "bold",
    marginBottom: 5,
    letterSpacing: 1.5,
  },
  subtitle: {
    color: "grey",
    fontWeight: "600",
    marginBottom: 8,
  },

  subtitleone: {
    fontWeight: "500",
    marginBottom: 8,
    width: "50%",
    textAlign: "center",
  },

  hiremebutton: {
    paddingHorizontal: 36,
    paddingVertical: 11,
    backgroundColor: "#2eb3bf",
    borderRadius: 30,
    marginTop: 10,
  },

  hiremetext: {
    fontWeight: "600",
    letterSpacing: 0.5,
    color: "white",
  },

  line: {
    width: "100%",
    height: 1.2,
    backgroundColor: "grey",
    marginBlock: 22,
  },
  icon: {
    backgroundColor: "#ffdb58",
    borderRadius: 100,
    alignSelf: "center",
    padding: 22,
  },
  icontext: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 10,
    marginBottom: 3,
  },

  activitybox: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  icontext1: {
    color: "grey",
    fontWeight: "500",
  },

  icon1: {
    backgroundColor: "#6efafb",
    borderRadius: 100,
    alignSelf: "center",
    padding: 22,
  },

  icon2: {
    backgroundColor: "#e3ddbc",
    borderRadius: 100,
    alignSelf: "center",
    padding: 22,
  },
});

export default Login;
