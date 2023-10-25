import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../components/button';
import Input from '../components/input';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login({navigation}) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const {login} = useContext(AuthContext)
  const [erro, setErro] = useState('')

  async function handleLogin(){
    if (await login({email,senha})){
      navigation.navigate("Comanda")
    }else{
      setErro("usuário ou senha inválidos")
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />

      <Input placeholder='Insira seu e-mail' value={email} onChangeText={setEmail}/>
      <Input placeholder='Insira sua senha' value={senha} onChangeText={setSenha} secureTextEntry/>

      <Button onPress={handleLogin}>
        Entrar
      </Button>

      <Text>{erro}</Text>
      
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