import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../components/button";
import Input from "../components/input";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <Input placeholder="Insira seu e-mail" />
      <Input placeholder="Insira sua senha" secureTextEntry />

      <Button onPress={() => navigation.navigate("Home")}>Entrar</Button>

      <TouchableOpacity>
        <Text style={{ fontFamily: "Raleway", fontWeight: 200, fontSize: 15 }}>
          Criar nova conta
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#edffe5",
  },
  input: {
    backgroundColor: "#FFF",
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginTop: 16,
    textAlign: "center",
    fontFamily: "Raleway",
    fontWeight: 200,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#121A2C",
    color: "#E55604",
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 16,
  },
  image: {
    height: 200,
    width: 200,
  },
});
