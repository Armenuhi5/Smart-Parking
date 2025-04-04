// import { useContext, useState } from 'react';
// import { Alert } from 'react-native';

// import AuthContent from '../components/Auth/AuthContent';
// import LoadingOverlay from '../components/ui/LoadingOverlay';
// import { AuthContext } from '../store/auth-context';
// import { createUser } from '../util/auth';

// function SignupScreen() {
//   const [isAuthenticating, setIsAuthenticating] = useState(false);

//   const authCtx = useContext(AuthContext);

//   async function signupHandler({ email, password }) {
//     setIsAuthenticating(true);
//     try {
//       const token = await createUser(email, password);
//       authCtx.authenticate(token);
//     } catch (error) {
//       Alert.alert(
//         'Authentication failed',
//         'Could not create user, please check your input and try again later.'
//       );
//       setIsAuthenticating(false);
//     }
//   }

//   if (isAuthenticating) {
//     return <LoadingOverlay message="Creating user..." />;
//   }

//   return <AuthContent onAuthenticate={signupHandler} />;
// }

// export default SignupScreen;

import { useContext, useState } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../util/auth';

function SignupScreen() {
  const navigation = useNavigation();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const authCtx = useContext(AuthContext);

  async function signupHandler() {
    setIsAuthenticating(true);
    try {
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        error.message || 'Could not create user, please check your input and try again later.'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={styles.inactiveTab}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.inactiveTabText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Enter your details to get started</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="your.email@example.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="........"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="........"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      
      <TouchableOpacity style={styles.signupButton} onPress={signupHandler}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
        <View style={styles.dividerLine} />
      </View>
      
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>© 2025 Smart Parking App. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  activeTab: {
    flex: 1,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF', // Blue color for active tab
    alignItems: 'center',
  },
  inactiveTab: {
    flex: 1,
    paddingBottom: 16,
    alignItems: 'center',
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF', // Blue color for active tab text
  },
  inactiveTabText: {
    fontSize: 16,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  signupButton: {
    backgroundColor: '#007AFF', // Blue button color
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 8,
    color: '#666',
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 16,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  loginText: {
    fontSize: 16,
    color: '#666',
  },
  loginLink: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 32,
    fontSize: 12,
  },
});

export default SignupScreen;