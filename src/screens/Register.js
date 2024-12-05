import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { registerUser } from '../services/api';
import { updateProfile } from 'firebase/auth';
import icon from '../../assets/registerimage.png'

function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('Navigation:', navigation);

  const handleRegister = async () => {


    setLoading(true);

    try {
      const userData = { username, email, password };
      if (username && email && password) {
        const response = await registerUser(userData);
        if (response) {
          await updateProfile(response, { displayName: username })

          Alert.alert('Success', 'User registered successfully');
          navigation.navigate('Login');
        }
        else {
          Alert.alert("User is already registerd...!")
        }
      } else if (!username && !password && !email) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      } else if (!username) {
        Alert.alert('Error', 'Please enter a username.');
      } else if (!email) {
        Alert.alert('Error', 'Please enter an email.');
      } else if (!password) {
        Alert.alert('Error', 'Please enter a password.');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };


  // const handleRegister = () => {
  //   navigation.navigate('Login');
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Image source={icon} style={styles.backgroundImage} />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* <Button title={loading ? 'Registering...' : 'Register'} onPress={handleRegister} /> */}

      <TouchableOpacity onPress={handleRegister}>
        <View style={styles.button}>
          {/* <Button onPress={() => navigation.navigate('Register')} > */}
          <Text style={styles.textCont}>Register</Text>
          {/* </Button> */}
        </View>
      </TouchableOpacity>

    </View>
  );
};



export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom:'100',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },

  input: {
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.5)',
    borderRadius: 5,
    padding: 18,
    marginBottom: 10,
    backgroundColor: '#fff'
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

    width: '300',
    height: '300',
    // padding:20,
    // opacity: 0.3, 
  },

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: -10,
    textAlign: 'center',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
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
  },

  textCont: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  }
});


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import { registerUser } from '../services/api'; // Make sure the api file exists and has the registerUser function.
// import { updateProfile } from 'firebase/auth';

// function Register({ navigation }) {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   console.log('Navigation:', navigation);


//   const handleRegister = async () => {
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});

//       setLoading(true);

//       try {
//         const userData = { username, email, password };

//         if (!username) {
//           Alert.alert('Error', 'Please enter a username');
//           setLoading(false);
//         } else if (!email) {
//           Alert.alert('Error', 'Please enter an email');
//           setLoading(false);
//         } else if (!password) {
//           Alert.alert('Error', 'Please enter a password');
//           setLoading(false);
//         }

//         if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
//           const response = await registerUser(userData);
//           if (response) {
//             await updateProfile(response, { displayName: username })

//             // if (response.success) {
//             Alert.alert('Success', 'User registered successfully');
//             //             navigation.navigate('Login');
//           }
//           else {
//             // Alert.alert('Error', response.message || 'An error occurred');
//             Alert.alert("User is already registerd...!");
//             setLoading(false);
//           }
//         } else {
//           Alert.alert('Error', 'Please fill in all fields');
//           setLoading(false);
//           return;
//         }
//       } catch (error) {
//         Alert.alert('Error', error.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };


//   // const handleRegister = () => {
//   //   navigation.navigate('Login');
//   // };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Register</Text>


//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

//       <TextInput
//         style={[styles.input,]}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

//       {/* <Button title={loading ? 'Registering...' : 'Register'} onPress={handleRegister} /> */}

//       <TouchableOpacity
//         // title={loading ? 'Registering...' : 'Register'}
//         onPress={handleRegister}
//       >
//         <View style={styles.button}>
//           {/* <Button onPress={() => navigation.navigate('Register')} > */}
//           <Text style={styles.textCont}>Register</Text>
//           {/* </Button> */}
//         </View>
//       </TouchableOpacity>

//     </View>
//   );
// };



// export default Register;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // marginBottom:'100',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#f8f8f8',
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: 'rgba(76, 175, 80, 0.5)',
//     borderRadius: 5,
//     padding: 18,
//     marginBottom: 10,
//     backgroundColor: '#fff'
//   },

//   title: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     color: '#333333',
//     marginBottom: 20,
//     textAlign: 'center',
//     shadowColor: '#4CAF50',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 3,
//     elevation: 5,
//   },

//   errorInput: {
//     borderColor: 'red',
//   },

//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },

//   button: {
//     backgroundColor: 'rgba(76, 175, 80, 0.8)',
//     borderRadius: 5,
//     marginTop: 10,
//     padding: 10,
//     width: '80%',
//     // textAlign:'center',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     color: 'black',
//     textDecorationColor: 'none'
//   },

//   textCont: {
//     textAlign: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold'
//   }
// });