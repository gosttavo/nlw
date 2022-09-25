import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//React Native utiliza componentes ja criadas para rodar no android e ios

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>

      <Button title='Texto 1' />
      <Button title='Texto 2' />
      <Button title='Texto 3' />

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
