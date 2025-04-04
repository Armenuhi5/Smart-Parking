import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Signup'); // Navigate to SignupScreen
    }, 6500); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/carmot.gif')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreen;