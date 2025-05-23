import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <SafeAreaView>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.ElevatedCard]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.ElevatedCard]}>
          <Text>to</Text>
        </View>
        <View style={[styles.ElevatedCard]}>
          <Text>see</Text>
        </View>
        <View style={[styles.ElevatedCard]}>
          <Text>more</Text>
        </View>
        <View style={[styles.ElevatedCard]}>
          <Text>on</Text>
        </View>
        <View style={[styles.ElevatedCard]}>
          <Text>right</Text>
        </View>
        <View style={[styles.ElevatedCard]}>
          <Text>side</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
// ScrollView horizontal ={true} works the same

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  ElevatedCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 6,
    backgroundColor: '#cad5e2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
