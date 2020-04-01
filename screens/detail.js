import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {  Icon } from 'native-base';
import { MaterialIcons,Entypo } from '@expo/vector-icons';
import Communication from 'react-native-communications';
export default function ReviewDetails({navigation,route}){
/*const pressHandler=()=>{
    navigation.goBack();
}*/
    const {email} = route.params;
    const {first_name} = route.params;
    const {last_name} = route.params;
    const {avatar} = route.params;
    
    

    return(
        <View style={styles.container}>
          <ImageBackground style={styles.header} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG6fzeiF2xm8TocNPdPhhS4vu2sYCIj1OXm-vB8fmC5z92P48t&usqp=CAU'}}>
          <View>
          <MaterialIcons name='menu' size={28}  style={styles.icon} />
          </View>
          <Image style={styles.avatar} source={{uri: avatar}}/>
          </ImageBackground>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{first_name} {last_name}</Text>
              <View style={styles.buttonContainer} >
                <MaterialIcons name='email' size={25} color='#000'/>
            <Text style={styles.itemText}>{email}</Text>
              </View>              
              <View style={styles.buttonContainer} 
              >
              <Entypo name='facebook' size={25} color='#000' />
            <Text style={styles.itemText}>{first_name}</Text>
              </View>
            </View>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
  header:{
    
    height:200,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#F00",
  },
  
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    height:60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:250,
    borderRadius:30,
  
  },
  itemText:{
    fontSize: 20,
    marginLeft:10,
},
icon:{
  position:'absolute',
  right:16
},
});

