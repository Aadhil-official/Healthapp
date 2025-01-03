import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import imageHealth from '../../assets/healthcare.png'
import { signInWithCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';
import { SendContext } from '../Context/SendContaxt';
// import { Avatar } from 'react-native-paper';
// import AvatarImage from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';

const Login = ({ navigation }) => {

  const { setGlobename } = useContext(SendContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  // const navigation = useNavigation();

  const validateForm = () => {
    const validationErrors = {};
    if (!username && !password) {
      Alert.alert('Error', 'Please enter username and password');
      return;
    }

    if (!username.trim()) {
      validationErrors.username = 'Username is required';
    } else if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }
    return validationErrors;
  };


  const handleLogin = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      try {
        const userCredential = await signInWithEmailAndPassword(auth, username, password);

        // Login successful
        // const user = userCredential.user;
        // console.log('Login successful:', user);

        setGlobename(username);
        navigation.navigate('Home');
      } catch (error) {
        // console.error('Login failed:', error);
        Alert.alert('Login Failed try again...!');
        return;
      }
    }
  };


  // const handleLogin = async () => {
  //   navigation.navigate("Home");
  // }

  const sendToregister = () => {
    navigation.navigate("Register")
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjusts behavior for iOS and Android
    >
      <View style={styles.container}>
        {/* <AvatarImage  */}
        <Text style={styles.title}>Login</Text>
        {/* // style={styles.imageContainer} */}
        {/* > */}
        <Image source={imageHealth} style={styles.backgroundImage} />
        {/* </AvatarImage> */}
        <TextInput
          style={[styles.input, errors.username && styles.errorInput]}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

        <TextInput
          style={[styles.input, errors.password && styles.errorInput]}
          placeholder="Password"
          value={password}
          label='Passw'
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <View style={{ marginBottom: '60', marginTop: '20' }}>
          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.button}>
              {/* <Button
          onPress={handleLogin}
        > */}
              <Text style={styles.textCont}>Login</Text>
              {/* </Button> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={sendToregister}>
            <View style={styles.button}>
              {/* <Button onPress={() => navigation.navigate('Register')} > */}
              <Text style={styles.textCont}>Register</Text>
              {/* </Button> */}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // imageContainer: {
  // width: 200,
  // marginTop:'0',
  // marginLeft:'auto',
  // marginRight:'auto',
  // height: 200,
  // overflow: 'hidden',
  // position: 'relative',
  // }
  textCont: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  backgroundImage: {
    // position: 'absolute',
    // top: '0',
    // left: 0,
    // right: 0
    // overflow: 'hidden',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '10',
    // bottom: 0
    // resizeMode: 'cover',

    width: '200',
    height: '200',
    // padding:20,
    // opacity: 0.3,
  },
  container: {
    flex: 1,
    // marginBottom:'100',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.5)',
    borderRadius: 5,
    padding: 18,
    marginBottom: 10,
    backgroundColor: '#fff',
  },

  errorInput: {
    borderColor: 'red',
  },

  errorText: {
    color: 'red',
    marginBottom: 10,
  },

  button: {
    backgroundColor: 'rgba(76, 175, 80, 0.8)',
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    width: '80%',
    // textAlign:'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'black',
    textDecorationColor: 'none'
  }
});

export default Login;
