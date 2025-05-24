import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(link: string) {
    Linking.openURL(link).catch(err =>
      console.error('Failed to open link:', err),
    );
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevation]}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            What's new in Modern JavaScript ES21
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://www.inkoop.io/static/84a6024aed371ff1212483ac3af176cf/e64c7/banner.webp',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3}>
            ECMAScript keeps evolving with the introduction of cool new features
            every year. The 12th edition of ES has simplified essential coding
            functionalities with its enhanced features.
          </Text>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://royalisms.medium.com/javascript-es2021-new-es21-features-you-need-to-see-8ed2884254a3',
                )
              }>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 8,
    marginBottom: 6,
  },
  card: {
    height: 380,
    width: 350,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#a3a0a9',
  },
  cardElevation: {
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
    marginBottom: 6,
    flexDirection: 'row',
  },
  cardImage: {
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardBody: {
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  footerContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  socialLinks: {
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: '#ffffff',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
