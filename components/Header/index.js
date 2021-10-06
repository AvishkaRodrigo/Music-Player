import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View >
            <View style = {styles.header}>
                <Image
                        style ={styles.imageback}
                        source={require('../../assets/back.png')}
                />
                <Text style={styles.headerText}>Tailor Swift Profile</Text>
                <TouchableOpacity onPress={()=> Alert.alert('\nMore options will be display here')}>
                <Image
                    style ={styles.imagemore}
                    source={require('../../assets/more.png')}
                />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerText : {
        color : 'white',
        fontSize: 20,
        alignContent: 'space-around'
    },

    imageback:{
        height: 50,
        width : 50,
        // marginRight:30,
        
    },

    imagemore:{
        height: 30,
        width : 30,
        marginTop : 10,
        marginRight : 10
       
    },

    header : {
        marginTop : 50,
        flexDirection: 'row',
        
        justifyContent : 'space-between'
        
    }
})


