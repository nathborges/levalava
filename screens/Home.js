import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.initialDiv}>
        <Text style={styles.initialText}>Olá,</Text>
        <Text style={styles.initialText}>João Carlos</Text>
      </View>
      <View style={styles.item}>
        <Icon name="add" type="material" color="#2B472E" />
        <Text style={styles.text}> Agendar novo horário</Text>
      </View>
      <View style={styles.item}>
        <Icon name="schedule" type="material" color="#2B472E" />
        <Text style={styles.text}> Meus horários</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#edffe5",
    display: "flex",
    gap: 4,
  },
  initialDiv: {
    marginBottom: 30,
    width: 200
  },
  initialText: {
    fontFamily: "Raleway",
    fontWeight: 400,
    fontSize: 18,
    textAlign: "left",
    color: "#365939",
  },
  item: {
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    width: 200,
    height: 50,
    borderRadius: 10,
    fontFamily: "Raleway",
  },
  text: {
    fontFamily: "Raleway",
    fontWeight: 200,
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },
});
