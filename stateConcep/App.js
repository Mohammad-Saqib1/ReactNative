import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View ,Button} from 'react-native';

 class App extends React.Component {
  
    state={
      name:"Saqib",
      role:"Coder"
  }

  handle=()=>{
    this.setState({
      name:"Mohammad",
      role:"Student"
    })
  }
  render(){
  return (
    <View style={styles.container}>
      <Text>State Concepts</Text>
      <Text>
      {this.state.name}

      </Text>
      {this.state.role}
      
      <Button title="Change Value" onPress={this.handle}></Button>
      <StatusBar style="auto" />
    </View>
  );
}
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
