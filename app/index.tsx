import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
const Index = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: "https://cdn.create.microsoft.com/catalog-assets/en-us/000073ea-001c-0000-f5dc-2e078ad4524f/thumbnails/600/picture-perfect-profile-yellow-organic%252C-clean%252C-floral%252C-natural%252C-botanical%252C-circle-1-e4d399704e03.webp",
          }}
        />
        <View style={styles.iconContainer}>
          <AntDesign name="check-circle" size={24} color="white" />
        </View>
      </View>

      <Text style={styles.title}>Beverly Little</Text>
      <Text style={styles.subTitle}>SENIOR PRODUCT DESIGNER</Text>
      <Text style={styles.caption}>
        Create usable interface and designs @GraphicSpark
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={styles.hireMeButton}
      >
        <Text>Hire Me</Text>
      </TouchableOpacity>

      <View style={styles.thinLine}></View>

      {/* parent container */}
      <View style={styles.activityBox}>
        {/* container 1 */}
        <View style={styles.firstContainer}>
          <View style={styles.globeContainer}>
            <Entypo name="globe" size={60} color="white" />
          </View>

          <Text style={styles.textOne}>12.8k</Text>
          <Text style={styles.textTwo}>Followers</Text>
        </View>
        {/* container 2 */}
        <View style={styles.firstContainer}>
          <View style={styles.beContainer}>
            <AntDesign name="behance" size={60} color="white" />
          </View>

          <Text style={styles.textOne}>12.8k</Text>
          <Text style={styles.textTwo}>Followers</Text>
        </View>
        {/* container 3 */}
        <View style={styles.firstContainer}>
          <View style={styles.upContainer}>
            <FontAwesome6 name="stumbleupon-circle" size={60} color="white" />
          </View>

          <Text style={styles.textOne}>12.8k</Text>
          <Text style={styles.textTwo}>Followers</Text>
        </View>
      </View>
    </View>
  );
};

// relative and absolute positioning

const styles = StyleSheet.create({
  firstContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },

  imageContainer: {
    position: "relative",
  },

  iconContainer: {
    backgroundColor: "green",
    width: 30,
    height: 30,
    borderRadius: 100,
    position: "absolute",
    right: 0,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  textOne: {
    fontSize: 20,
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
  },
  textTwo: {
    fontSize: 12,
    color: "gray",
  },

  globeContainer: {
    backgroundColor: "yellow",
    alignSelf: "flex-start",
    padding: 20,
    borderRadius: 100,
  },

  beContainer: {
    backgroundColor: "blue",
    alignSelf: "flex-start",
    padding: 20,
    borderRadius: 100,
  },

  upContainer: {
    backgroundColor: "cyan",
    alignSelf: "flex-start",
    padding: 20,
    borderRadius: 100,
  },

  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
    paddingHorizontal: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 14,
    color: "gray",
    fontWeight: "500",
    marginTop: 5,
    marginBottom: 10,
  },
  caption: {
    fontSize: 12,
    color: "#D3D3D3",
  },
  hireMeButton: {
    backgroundColor: "white",
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 50,
    marginBlock: 20,
  },
  thinLine: {
    width: "100%",
    height: 2,
    backgroundColor: "gray",
  },

  activityBox: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Index;
