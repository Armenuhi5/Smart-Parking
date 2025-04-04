import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function AvailableScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Available Parking Spots</Text>
      </View>

      {/* Available Spots List */}
      <View style={styles.spotsContainer}>
        <Text style={[styles.spotText, { color: '#4CAF50' }]}>Spot 1: Available</Text>
        <Text style={[styles.spotText, { color: '#4CAF50' }]}>Spot 2: Available</Text>
        <Text style={[styles.spotText, { color: '#FF5252' }]}>Spot 3: Occupied</Text>
        <Text style={[styles.spotText, { color: '#4CAF50' }]}>Spot 4: Available</Text>
        <Text style={[styles.spotText, { color: '#FF5252' }]}>Spot 5: Occupied</Text>
      </View>

      {/* Reserve Spot Button */}
      <TouchableOpacity style={styles.reserveButton}>
        <MaterialIcons name="check-circle" size={24} color="white" />
        <Text style={styles.buttonText}>Reserve Spot</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to bottom, #76b852, #8DC26F)', // Gradient background
    padding: 20,
  },
  header: {
    backgroundColor: '#4682B4', // change it
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  headerText: {
    fontSize: 24, // Smaller, less dominant text
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  spotsContainer: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 6,
  },
  spotText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    paddingVertical: 8,
  },
  reserveButton: {
    backgroundColor: '#FF9800', // Bright orange button color
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
    transform: [{ scaleX: 1.05 }, { scaleY: 1.05 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 12,
    fontWeight: '600',
  },
});

export default AvailableScreen;
