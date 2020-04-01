import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        borderRadius:10,
        elevation:5,
        backgroundColor:'#FFF',
        shadowOffset:{width:1,height:1},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:5,
        marginHorizontal:5,
        marginVertical:5,
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:10,

    }
});