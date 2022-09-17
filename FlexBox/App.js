import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Inline Css */ }
      <Text style={{color:'green',fontSize:20,backgroundColor:'skyblue',height:100,textAlignVertical:'center'}}>CSS Concepts</Text>
      <Text style={styles.text}>CSS Concepts</Text>
      <Text style={styles.text1}>CSS Concepts</Text>
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    margin:40
  },
  text:{
    color:'white',
    fontFamily:'serif',
    fontSize:40,
    backgroundColor:'blue',
    flex:1,
    padding:10,
    margin:20,
    
    textAlignVertical:'center'
    
  },

  text1:{
    height:100,
    backgroundColor:'black',
    color:'yellow',
    fontSize:20,
    flex:1,
    padding:10,
    margin:20,
  textAlignVertical:'center'
  }
});
