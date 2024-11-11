import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Profile = () => {
  const user = {
    name: 'April Joy Etang',
    email: 'apriljoyetang3@gmail.com',
    bio: 'Tech enthusiast and creative designer. I love exploring innovative solutions and sharing knowledge.',
    profilePicture: 'https://mir-s3-cdn-cf.behance.net/projects/404/bc87bc152948533.Y3JvcCw4MDgsNjMyLDAsMA.png', // Replace with a valid image URL
    phone: '09480188873', // Add phone number
    address: 'Toledo,City,Cebu', // Add address
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: user.profilePicture }} 
        style={styles.profilePicture} 
        onError={() => {
          console.log('Image failed to load, using placeholder');
        }}
      />
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.details}>{user.email}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      
      {/* Contact Information */}
      <Text style={styles.contactTitle}>Contact Information</Text>
      <Text style={styles.contactDetails}>Phone: {user.phone}</Text>
      <Text style={styles.contactDetails}>Address: {user.address}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6F61', // Red-pink background
    padding: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#fff', // Adjusted text color for better contrast
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: '#fff', // Adjusted text color for better contrast
    textAlign: 'center',
    marginTop: 10,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#fff', // Adjusted text color for better contrast
  },
  contactDetails: {
    fontSize: 16,
    color: '#fff', // Adjusted text color for better contrast
  },
});
