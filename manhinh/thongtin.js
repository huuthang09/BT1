import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

export default function TrangThongTin({ route }) {
  const { email } = route.params;
  const { first_name } = route.params;
  const { last_name } = route.params;
  const { avatar } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG6fzeiF2xm8TocNPdPhhS4vu2sYCIj1OXm-vB8fmC5z92P48t&usqp=CAU"
        }}
      ></ImageBackground>

      <View style={styles.styleLike}> 
      <Image style={{width: 40, height: 40}} source={{ uri: "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_more_vert_48px-512.png" }} />
      <Image style={{width: 40, height: 40}} source={{ uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-512.png" }} />
      </View>

      
      
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>
            {first_name} {last_name}
          </Text>
          <View style={styles.TextRow}>
            <MaterialIcons name="email" size={25} color="#000" />
            <Text style={styles.itemText}>{email}</Text>
          </View>
          <View style={styles.TextRow}>
            <Entypo name="facebook" size={25} color="#000" />
            <Text style={styles.itemText}>
              {first_name} {last_name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 200
  },

  styleLike: {
    width: 150,
    height: 50,
    marginBottom: 10,
    flexDirection: "row-reverse",
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 200
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 65,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 150
  },

  body: {
    marginTop: 40
  },

  bodyContent: {
    margin: 10,
    alignItems: "center"
  },
  name: {
    fontSize: 28,
    color: "#F00"
  },

  TextRow: {
    margin: 10,
    height: 50,
    flexDirection: "row",
    width: "100%"
  },

  itemText: {
    fontSize: 20,
    marginLeft: 10
  }
});
