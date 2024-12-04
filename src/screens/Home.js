import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { setItemCount } from '../redux/actions/items';
// import axios from 'axios';

const Home = ({ navigation, username }) => {

  // const { username } = route.params || {};
  // const [data, setData] = useState([]);
  // const dispatch = useDispatch();
  // const itemCount = useSelector((state) => state.items.count);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => {
  //       setData(response.data.slice(0, 10)); // Limit to 10 items
  //       dispatch(setItemCount(response.data.length)); // Update Redux
  //     })
  //     .catch((error) => console.error(error));
  // }, [dispatch]);

  // const renderItem = ({ item }) => (
  //   <View style={styles.card}>
  //     <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
  //     <Text style={styles.title}>{item.title}</Text>
  //     <Text>{item.body}</Text>
  //   </View>
  // );

  return (
    <View>
      <Text>Welcome {username}</Text>
      {/* <Text>Total Items: {itemCount}</Text>
      <FlatList 
        data={data} 
        keyExtractor={(item) => item.id.toString()} 
        renderItem={renderItem} 
      /> */}
      {/* <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   card: { margin: 10, padding: 10, borderWidth: 1, borderRadius: 5 },
//   image: { width: 100, height: 100 },
//   title: { fontWeight: 'bold', fontSize: 16 },
// });

export default Home;
