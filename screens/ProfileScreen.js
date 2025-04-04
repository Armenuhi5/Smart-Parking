import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://www.example.com/user-avatar.png' }} // Placeholder image
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      {/* Profile Stats Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Stats</Text>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Total Parked Hours</Text>
          <Text style={styles.statValue}>120 hours</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Total Savings</Text>
          <Text style={styles.statValue}>$250.50</Text>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <MaterialIcons name="exit-to-app" size={24} color="white" />
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to bottom, #8e2de2, #4a00e0)', // Gradient background
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: '#ff4081',
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 10,
  },
  email: {
    fontSize: 18,
    color: '#D1D5DB',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8, // For Android shadow effect
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 15,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 16,
    color: '#6B7280',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
    transform: [{ scaleX: 1.05 }, { scaleY: 1.05 }], // Subtle scaling animation
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#E91E63',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
    transform: [{ scaleX: 1.05 }, { scaleY: 1.05 }], // Subtle scaling animation
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '500',
  },
});

export default ProfileScreen;
