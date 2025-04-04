// import { useContext, useState } from 'react';
// import { Alert } from 'react-native';

// import AuthContent from '../components/Auth/AuthContent';
// import LoadingOverlay from '../components/ui/LoadingOverlay';
// import { AuthContext } from '../store/auth-context';
// import { login } from '../util/auth';

// function LoginScreen() {
//   const [isAuthenticating, setIsAuthenticating] = useState(false);

//   const authCtx = useContext(AuthContext);

//   async function loginHandler({ email, password }) {
//     setIsAuthenticating(true);
//     try {
//       const token = await login(email, password);
//       authCtx.authenticate(token);
//     } catch (error) {
//       Alert.alert(
//         'Authentication failed!',
//         'Could not log you in. Please check your credentials or try again later!'
//       );
//       setIsAuthenticating(false);
//     }
//   }

//   if (isAuthenticating) {
//     return <LoadingOverlay message="Logging you in..." />;
//   }

//   return <AuthContent isLogin onAuthenticate={loginHandler} />;
// }

// export default LoginScreen;
import { useContext, useState } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../store/auth-context';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function LoginScreen() {
  const navigation = useNavigation();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler() {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.inactiveTab}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.inactiveTabText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Enter your credentials to access your account</Text>
      
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
      
      <View style={styles.rememberContainer}>
        <TouchableOpacity 
          style={styles.checkboxContainer}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkbox, rememberMe && styles.checkedBox]}>
            {rememberMe && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.rememberText}>Remember me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.loginButton} onPress={loginHandler}>
        <Text style={styles.loginButtonText}>Log In</Text>
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
      
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.registerLink}>Register now</Text>
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
    borderBottomColor: '#e91b32',
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
    color: '#e91b32',
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
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#f0f0f0',
  },
  checkmark: {
    fontSize: 14,
    color: '#000',
  },
  rememberText: {
    fontSize: 16,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#007AFF',
  },
  loginButton: {
    backgroundColor: '#1E90FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
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
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  registerText: {
    fontSize: 16,
    color: '#666',
  },
  registerLink: {
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

export default LoginScreen;