import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

export default function ContactList() {
  const developers = [
    {
      id: 1,
      name: 'Alice Johnson',
      status: 'Frontend Web Developer',
      githubImg: 'https://github.com/alicejohnson.png',
    },
    {
      id: 2,
      name: 'Brian Lee',
      status: 'Full Stack Developer',
      githubImg: 'https://github.com/brianlee.png',
    },
    {
      id: 3,
      name: 'Sajjad Afzaal',
      status: 'React Developer',
      githubImg: 'https://github.com/SajjadAfzaal.png',
    },
    {
      id: 4,
      name: 'Daniel King',
      status: 'Backend Developer',
      githubImg: 'https://github.com/danielking.png',
    },
    {
      id: 5,
      name: 'Eva Adams',
      status: 'MERN Stack Developer',
      githubImg: 'https://github.com/evaadams.png',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {developers.map(({id, name, status, githubImg}) => (
          <View key={id} style={styles.userCard}>
            <Image
              source={{
                uri: githubImg,
              }}
              style={styles.userImg}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#c8dceb',
    borderRadius: 8,
  },
  userImg: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userStatus: {
    fontSize: 12,
  },
});
