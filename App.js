import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View , Alert, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'pink', fontSize:100}}>Hola vik!</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}
