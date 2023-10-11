import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from './components/button';
import Input from './components/input';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/logo.png')} />
      <Input placeholder='Insira seu e-mail'/>
      <Input placeholder='Insira sua senha' secureTextEntry/>

      <Button>Entrar</Button>
      
      <TouchableOpacity>
        <Text>Criar nova conta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#edffe5',
  },
  title: {
    color: '#E55604',
    fontSize: 34,
    fontFamily: 'Gabarito-Bold',
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginTop: 16,
    textAlign: 'center',
  }, 
  button:{
    backgroundColor: '#121A2C',
    color: '#E55604',
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 16
  },
  image: {
    height: 200,
    width: 200,
  },
});