import React,{useState} from 'react'
import { StyleSheet, Text, View, FlatList, Image} from 'react-native'

const Flatlist = () => {
    
    const [artist, setartist] = useState([
        {image : './assets/artist.jpg',music : 'Valetudo Beats' , song:'Fearless', price : '$10', key:'1'},
        {image : './assets/artist.jpg',music : 'Valetudo Beats' , song:'Fifteen', price : '$20', key:'2'},
        {image : './assets/artist.jpg',music : 'Valetudo Beats' , song:'Love Story', price : '$11', key:'3'},
        {image : './assets/artist.jpg',music : 'Valetudo Beats' , song:'Hey Stephen', price : '$15', key:'4'},
        {image : './assets/artist.jpg',music : 'Valetudo Beats' , song:'White Horse', price : '$18', key:'5'},
        {image : './assets/artist.jpg',music : 'Valetudo Beats' , song:'You Belong With Me', price : '$20', key:'6'},
        {image : './assets/artist.jpg',music : 'Valetudo Beats' , song:'Breath', price : '$12', key:'7'},
        {image : './assets/artist.jpg',music : 'Valetudo Beats' , song:'Tell ME Why', price : '$25', key:'8'},
        {image : './assets/artist.jpg',music : 'Valetudo Beats' , song:'The way I loved you', price : '$16', key:'9'},
        {image : './assets/artist.jpg',music : 'Valetudo Beats' , song:'Forever & Always', price : '$17', key:'10'},
    
      ])

    return (
        <View>
            <FlatList
          data={artist}
          renderItem={({item}) => (
            <>
              <View style= {styles.songcontent}>
                <View style ={styles.image}>
                  <Image 
                        style ={styles.image}
                        source={require('../../assets/artist1.jpg')}
                  />
                </View>
                <View style={styles.songdetails}>                
                  <Text style={[styles.whiteText,styles.snameTopMargin]}>
                      {item.song}
                  </Text>  
                  <View style={styles.spriceTopMargin,{flexDirection:"row"}}>
                      <Text style={{ color:'white'}}>
                        {item.music}
                      </Text>
                      
                      <Text style={{ marginLeft : 10,color:'white'}}>
                        {item.price}
                      </Text>
                  </View> 
                </View>
                <View style ={styles.image}>
                  
                </View>
                
              </View>
            </>
          )}  
        />
        </View>
    )
}

export default Flatlist

const styles = StyleSheet.create({

    whiteText :{
        color : 'white',
        marginLeft : 0,
        fontSize:20,
        fontWeight : 'bold'
       
      },
    
      snameTopMargin : {
        paddingTop: 20,
      },
    
      spriceTopMargin : {
        paddingTop: 5,
        paddingBottom : 20
      },
    
      songcontent : {
        flexDirection : 'row',
        marginTop : 10,
        
        paddingLeft : 15
      },
    
      directioncolumn : {
        flexDirection : 'column'
      },
    
      image:{
        height: 70,
        width : 70,
        paddingTop : 5,
        borderRadius : 50,
        marginRight:30,
        
    },

})
