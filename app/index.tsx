

// import { useContext, useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AppLoading from 'expo-app-loading';

// import LoginScreen from '../screens/LoginScreen';
// import SignupScreen from '../screens/SignupScreen';
// import WelcomeScreen from '../screens/WelcomeScreen';
// import { Colors } from '../constants/styles';
// import AuthContextProvider, { AuthContext } from '../store/auth-context';
// import IconButton from '../components/ui/IconButton';
// import { View } from 'react-native';

// const Stack = createNativeStackNavigator();

// function AuthStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Colors.primary500 },
//         headerTintColor: 'white',
//         contentStyle: { backgroundColor: Colors.primary100 },
//       }}
//     >
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Signup" component={SignupScreen} />
//     </Stack.Navigator>
//   );
// }

// function AuthenticatedStack() {
//   const authCtx = useContext(AuthContext);
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Colors.primary500 },
//         headerTintColor: 'white',
//         contentStyle: { backgroundColor: Colors.primary100 },
//       }}
//     >
//       <Stack.Screen
//         name="Welcome"
//         component={WelcomeScreen}
//         options={{
//           headerRight: ({ tintColor }) => (
//             <IconButton
//               icon="exit"
//               color={tintColor}
//               size={24}
//               onPress={authCtx.logout}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function Navigation() {
//   const authCtx = useContext(AuthContext);

//   return (
//     // <NavigationContainer>
//     <View>
//       {!authCtx.isAuthenticated && <AuthStack />}
//       {authCtx.isAuthenticated && <AuthenticatedStack />}
//     </View>
//     // </NavigationContainer>
//   );
// }

// function Root() {
//   const [isTryingLogin, setIsTryingLogin] = useState(true);

//   const authCtx = useContext(AuthContext);

//   useEffect(() => {
//     async function fetchToken() {
//       const storedToken = await AsyncStorage.getItem('token');

//       if (storedToken) {
//         authCtx.authenticate(storedToken);
//       }

//       setIsTryingLogin(false);
//     }

//     fetchToken();
//   }, []);

//   if (isTryingLogin) {
//     return <AppLoading />;
//   }

//   return <Navigation />;
// }

// export default function Homepage() {
  
//   return (
//     <>
//       <StatusBar style="light" />
//       <AuthContextProvider>
//         <Root />
//       </AuthContextProvider>
//     </>
//   );
// }





import { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ReservationScreen from '../screens/ReservationScreen';
import HistoryScreen from '../screens/HistoryScreen';
import AvailableScreen from '../screens/AvailableScreen';
import SavedMoneyScreen from '../screens/SavedMoneyScreen';
import { Colors } from '../constants/styles';
import AuthContextProvider, { AuthContext } from '../store/auth-context';
import IconButton from '../components/ui/IconButton';
import { View } from 'react-native';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Reservation"
        component={ReservationScreen}
        options={{ title: 'Reserve Parking' }}
      />
       <Stack.Screen
        name="Profile"
        component={ProfileScreen} 
        options={{ title: 'My Profile' }}
      />
        <Stack.Screen
        name="History"
        component={HistoryScreen} 
        options={{ title: 'Parking History' }}
      />
      <Stack.Screen
        name="Available"
        component={AvailableScreen} 
        options={{ title: 'Available Spots' }}
      />
      <Stack.Screen
        name="SavedMoney"
        component={SavedMoneyScreen} 
        options={{ title: 'Saved Money' }}
      />
       
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    // <NavigationContainer>
    <View>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </View>
    // </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function Homepage() {
  
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
