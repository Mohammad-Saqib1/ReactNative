import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const str="Hello World";
  const str1=<Text>"Hello World1"</Text>
  const data=['Python','Java','JavaScript'];
  const res=data.map(myData=>{
    return <Text>
      {myData};
    </Text>
  })
  return (
    <View style={styles.container}>
      {res}
      {res}
      {str1}
      <Text>{str}</Text>
      <Text>{res}</Text>
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
