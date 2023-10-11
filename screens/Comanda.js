import { StyleSheet, View, Text } from "react-native";
import Input from "../components/input";
import Button from "../components/button";


export default function Comanda(){
    return(

        <View style={style.container}> 

            <View>
                <Text>Ola,</Text>
                <Text>Adu</Text>

            </View>

            <View>
                <Input />
                <Button>confirmar</Button>
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