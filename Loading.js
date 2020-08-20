import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Loading() {
    return(
    <View style = {styles.container}>
         <Text stlye = {styles.text}>Here is Racists!🤬🤬</Text>
         <Image style = {{width: `50%`, height: `50%`, resizeMode: `contain`}} source = {require(`./LoadingPicture.jpg`)}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(244, 225, 215)"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30,
        fontWeight: "900"
        
    }
});