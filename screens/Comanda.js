import { StyleSheet, View, Text } from "react-native";
import Input from "../components/input";
import Button from "../components/button";


export default function Comanda({navigation}){
    return(

        <View style={styles.container}> 

            <View>
                <Text>Ola,</Text>
                <Text>Adu</Text>

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