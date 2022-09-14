import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps{
  title: string,
}

function Button(props: ButtonProps){
  return (
    <>
      <TouchableOpacity>
        <Text>
          {props.title}
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text
        style={styles.title}
      >
        Hello React Native!
      </Text> */}

      <Button title="send 1"/>
      <Button title="send 2"/>
      <Button title="Hello world!"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex           : 1,
    backgroundColor: '#fff',
    alignItems     : 'center',
    justifyContent : 'center',
  },
  title: {
    color: '#000',
    fontSize: 22
  }

});
