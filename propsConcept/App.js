import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

class CustomConm extends React.Component{
  render(props){
    return( 
      <View >
        <Text> 
          {this.props.name}

        </Text>
        <Text>

          {this.props.role}
        </Text>
      </View>
    )
  }
}

function CustomConm1(props){
  return(
    <View>

    <Text>
      {props.edu}
    </Text>
    </View>
  )
}

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>Props Concepts</Text>
      <Text>Engineer</Text>
      <CustomConm name="Saqib" role="Coder"/>
      <CustomConm1 edu="B.Tech"/>
      <StatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
