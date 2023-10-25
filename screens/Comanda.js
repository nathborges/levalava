import { StyleSheet, View, Text } from "react-native";
import Input from "../components/input";
import Button from "../components/button";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function Comanda({navigation}){
    const {username} = useContext(AuthContext)
    return(

        <View style={styles.container}> 

            <View>
                <Text>Olá,</Text>
                <Text>{username}</Text>

            </View>

            <View>
                <Input />
                <Button onPress={() => navigation.navigate("Produtos")}>confirmar</Button>
            </View> 

            <Text>
                Digite o código da Comanda 
                para iniciar um pedido
            </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#edffe5',
    },

}) 