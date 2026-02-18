import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
  <View style={styles.container}>
      <Text style={styles.text}>This is Main Screen/ekran</Text>
      <Button
        title="Go to Challenge"
        onPress={() => navigation.navigate('Challenge')}
      />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MainScreen;
