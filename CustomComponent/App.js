import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class CustomConm extends React.Component{
  render(){
    return(
      <View >
        <Text>
          Hello
        </Text>
      </View>
    )
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Custom Components
      </Text>
      <CustomConm/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
