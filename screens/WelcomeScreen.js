// import axios from 'axios';
// import { useContext, useEffect, useState } from 'react';

// import { StyleSheet, Text, View } from 'react-native';
// import { AuthContext } from '../store/auth-context';

// function WelcomeScreen() {
//   const [fetchedMessage, setFetchedMesssage] = useState('');

//   const authCtx = useContext(AuthContext);
//   const token = authCtx.token;

//   // useEffect(() => {
//   //   axios
//   //     .get(
//   //       'https://test-1-b274f-default-rtdb.firebaseio.com/message.json?auth=' +
//   //         token
//   //     )
//   //     .then((response) => {
//   //       setFetchedMesssage(response.data);
//   //     });
//   // }, [token]);

//   useEffect(() => {
//     console.log('Token:', token); // Check if the token is available
//     if (!token) {
//       return;
//     }
  
//     // axios
//     //   .get(
//     //     'https://test-1-b274f-default-rtdb.firebaseio.com/message.json?auth=' +
//     //       token
//     //   )
//     //   .then((response) => {
//     //     setFetchedMesssage(response.data);
//     //   })
//     //   .catch((error) => {
//     //     console.error('Error fetching message:', error.response?.data || error.message);
//     //   });
//     axios
//   .get(
//     'https://test-1-b274f-default-rtdb.firebaseio.com/message.json?auth=' +
//       token
//   )
//   .then((response) => {
//     console.log('Response:', response.data);
//     setFetchedMesssage(response.data);
//   })
//   .catch((error) => {
//     console.error('Error fetching message:', error.response?.data || error.message);
//   });
//   }, [token]);
  

//   return (
//     <View style={styles.rootContainer}>
//       <Text style={styles.title}>Welcome!</Text>
//       <Text>You authenticated successfully!</Text>
//       <Text>{fetchedMessage}</Text>
//     </View>
//   );
// }

// export default WelcomeScreen;

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 32,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
// });


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.backgroundContainer}>
      <BlurView intensity={50} style={styles.blurContainer}>
        <View style={styles.contentContainer}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.welcomeText}>Welcome back!</Text>
            
            <View style={styles.statusContainer}>
              <View style={styles.statusItem}>
                <MaterialIcons name="check-circle" size={20} color="#34D399" />
                <Text style={styles.statusText}>Authentication successful!</Text>
              </View>
              
              <View style={styles.statusItem}>
                <MaterialIcons name="access-time" size={20} color="#60A5FA" />
                <Text style={styles.statusText}>Last login: Today, 10:45 AM</Text>
              </View>
              
              <View style={styles.statusItem}>
                <MaterialIcons name="local-parking" size={20} color="#FBBF24" />
                <Text style={styles.statusText}>Nearest parking: Downtown Garage (0.3 miles)</Text>
              </View>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Main CTA Button */}
          <TouchableOpacity 
  style={styles.reserveButton}
  onPress={() => navigation.navigate('Reservation')} // Ensure this line is correct
>
  <Text style={styles.reserveButtonText}>Reserve Parking Space</Text>
</TouchableOpacity>


          {/* Menu Options */}
          <View style={styles.menuContainer}>
            <View style={styles.menuRow}>
              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigation.navigate('Profile')}
              >
                <MaterialIcons name="person" size={24} color="#60A5FA" />
                <Text style={styles.menuItemText}>My Profile</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigation.navigate('History')}
              >
                <MaterialIcons name="history" size={24} color="#60A5FA" />
                <Text style={styles.menuItemText}>Parking History</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.menuRow}>
              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigation.navigate('Available')}
              >
                <MaterialIcons name="local-parking" size={24} color="#60A5FA" />
                <Text style={styles.menuItemText}>Available Spots</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigation.navigate('Savings')}
              >
                <MaterialIcons name="savings" size={24} color="#60A5FA" />
                <Text style={styles.menuItemText}>Saved Money</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Stats Cards */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Available spots</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>$45.20</Text>
              <Text style={styles.statLabel}>Saved this month</Text>
            </View>
          </View>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#F3F4F6',  // Light gray background for a cleaner look
  },
  blurContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  contentContainer: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  statusContainer: {
    backgroundColor: 'rgba(229, 231, 235, 0.7)',
    borderRadius: 12,
    padding: 16,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 24,
  },
  reserveButton: {
    backgroundColor: '#4682B4',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  reserveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuContainer: {
    marginBottom: 24,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  menuItemText: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: '500',
    marginLeft: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 24,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default WelcomeScreen;
