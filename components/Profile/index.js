import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const Profile = () => {
    return (
        <View style ={styles.content}>
            <View style ={styles.imageContainer}>
                <Image
                    style ={styles.image}
                    source={require('../../assets/artist.jpg')}
                />
            </View>
            <View style ={styles.details}>
                <Text  style ={styles.detailDiscription}>PRO SELLER</Text>
                <Text style ={styles.detailName}>Tailor Swift</Text>
                <Text  style ={styles.detailLocation}>Canada</Text>
                <View style={styles.TAS}>
                    <View style ={styles.disAttributes}>
                        <Text style={styles.attributeNum}>54</Text>
                        <Text style={styles.attributeName}>Tracks</Text>
                    </View>
                    <View style ={styles.disAttributes}>
                        <Text style={styles.attributeNum}>3</Text>
                        <Text style={styles.attributeName}>Albums</Text>
                    </View>
                    <View style ={styles.disAttributes}>
                        <Text style={styles.attributeNum}>102K</Text>
                        <Text style={styles.attributeName}>Subscribes</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    content : {
        flexDirection : 'row',
        paddingTop : 15
        //backgroundColor : 'red'
    },
    
    image:{
        height: 100,
        width : 100,
        borderRadius : 50,
        marginRight:30,
        
    },


    imageContainer:{
        padding : 20,
        //backgroundColor : 'blue'
    },

    detailName :{
        color : 'white',
        fontWeight : 'bold',
        fontSize : 25
    },

    detailDiscription:{
        color : 'orange',
        fontStyle : 'italic',
        fontSize : 15,
        borderWidth : 1,
        borderColor : 'orange',
        borderRadius : 5,
        paddingLeft:20,
        width : 110

    },

    detailLocation:{
        color: 'white',
        paddingLeft : 5,
        fontStyle : 'italic'

    },

    TAS :{
        flexDirection : 'row',
        justifyContent : 'space-around',
        paddingTop : 10 
    },

    disAttributes :{
        marginRight : 20
    },

    attributeName:{
        color : 'white'
    },

    attributeNum : {
        fontSize : 20,
        fontWeight : 'bold',
        color : 'white',
        paddingLeft : 10,
    }
})
