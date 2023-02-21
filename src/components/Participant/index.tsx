import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

function handleParticipantAdd() {
  console.log("vá se lascar!");
}

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Mateus Carvalho</Text>
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          {/*esse elemento é para indicar que aqui é uma região clicável da aplicação*/}
          <Text style={styles.buttonText}>-</Text>
          {/*temos que colocar o elemento Text para não dar erro*/}
        </TouchableOpacity>
    </View>
  );
}
