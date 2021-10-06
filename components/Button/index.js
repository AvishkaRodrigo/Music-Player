import React from 'react'
import { StyleSheet, Text, View,Button, Alert, TouchableOpacity} from 'react-native'

const Buttons = () => {
    return (
        <View style= {styles.btnarray}>
            {/* <Button  
                title='Subscribe'
                color = "orange"
                style={styles.btnsub}
                onPress={() => Alert.alert('පොඩ්ඩක් ඉන්නකෝ.....')}
            />
            <Button
                style={styles.btnchat}
                title='Start Chat'
                
                onPress={() => Alert.alert('කතා කරන්නේ වැඩේ ඉවරද?')}
                
            /> */}

            <TouchableOpacity onPress={() => Alert.alert('\n\nපොඩ්ඩක් ඉන්නකෝ.....')} >
                <View >
                    <Text style={styles.btnsub}>
                        Subscribe
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('\nකතා කරන්නේ වැඩේ ඉවරද?')}>
                <View >
                    <Text style={styles.btnchat}>
                        Start Chat
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons

const styles = StyleSheet.create({
    btnsub:{
        backgroundColor : 'orange',
        fontSize : 20,
        fontWeight : 'bold', 
        color : 'black', 
        borderRadius :8 ,
        height : 40,
        width : 170,
        textAlign : 'center',
        paddingTop : 7 
    },
    
    btnchat:{
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold', 
        borderColor : 'white',
        borderWidth : 1,
        borderRadius : 8,
        height : 40,
        width : 170,
        textAlign : 'center',
        paddingTop : 7
    },

    btnarray:{
        flexDirection:'row',
        justifyContent : 'space-evenly',
        
    }

})
