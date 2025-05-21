import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{uri:'https://www.worldhistory.org/uploads/images/17858.jpg?v=1693462371-1693550544'}}
        style={styles.cardImg}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Badshahi Masjid</Text>
            <Text style={styles.cardLocation}>Lahore Pakistan</Text>
            <Text style={styles.cardDescription}>Badshahi mosque, built by the Mughal emperor Aurangzeb (r. 1658-1707 CE) in 1673-74 CE, in Lahore, Pakistan.</Text>
            <Text style={styles.cardFooter}>15 minutes away</Text>

        </View>

        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
       fontSize:24,
        fontWeight:'bold',
        marginHorizontal:8,
        marginBottom:6
    },
    card:{
        height:360,
        width:410,
        paddingHorizontal:16,
        paddingVertical:8,
        marginBottom:8
    },
    cardElevated:{
        elevation:3,
        shadowOffset:{
            height:1,
            width:1
        }
    },
    cardImg:{
        height:200,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        backgroundColor:'#c8dceb',
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        paddingHorizontal:8
    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:6,
        marginBottom:6,
    },
    cardLocation:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:3,
    },
    cardDescription:{
        fontSize:16,
        marginTop:4,
        marginBottom:8,
        flexShrink:1

    },
    cardFooter:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:8,
    }

})