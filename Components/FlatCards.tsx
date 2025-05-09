import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <SafeAreaView>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.Card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.Card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.Card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        marginHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },
    Card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        borderRadius:6,
        margin:6
    },
    cardOne:{
        backgroundColor:'red'
    },
    cardTwo:{
        backgroundColor:'green'
    },
    cardThree:{
        backgroundColor:'blue'
    }
})