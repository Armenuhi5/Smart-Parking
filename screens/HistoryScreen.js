import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Parking History</Text>

      {/* First history record */}
      <TouchableOpacity style={styles.historyCard}>
        <MaterialIcons name="local-parking" size={28} color="#34D399" />
        <View style={styles.textContainer}>
          <Text style={styles.location}>Downtown Garage</Text>
          <Text style={styles.details}>March 30, 2025 - $5.00</Text>
        </View>
      </TouchableOpacity>

      {/* Second history record */}
      <TouchableOpacity style={styles.historyCard}>
        <MaterialIcons name="local-parking" size={28} color="#60A5FA" />
        <View style={styles.textContainer}>
          <Text style={styles.location}>Mall Parking</Text>
          <Text style={styles.details}>March 29, 2025 - $3.50</Text>
        </View>
      </TouchableOpacity>

      {/* Third history record */}
      <TouchableOpacity style={styles.historyCard}>
        <MaterialIcons name="local-parking" size={28} color="#FBBF24" />
        <View style={styles.textContainer}>
          <Text style={styles.location}>Airport Parking</Text>
          <Text style={styles.details}>March 25, 2025 - $10.00</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',  // Soft background color
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1F2937',  // Darker text color for header
    textAlign: 'center',
    marginBottom: 20,
  },
  historyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // For Android shadow effect
    overflow: 'hidden', // Ensures content stays within the rounded corners
  },
  textContainer: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  location: {
    fontSize: 18,
    fontWeight: '600',  // Slightly lighter weight for the title
    color: '#374151',  // Dark gray for text
  },
  details: {
    fontSize: 14,
    color: '#6B7280',  // Lighter gray for details
    marginTop: 4, // Space between location and details
  },
});

export default HistoryScreen;
