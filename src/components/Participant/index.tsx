import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  // podemos usar type ou interface
  name: string;
  onRemove: (name: string) => void;
};

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
        {/*esse elemento é para indicar que aqui é uma região clicável da aplicação*/}
        <Text style={styles.buttonText}>-</Text>
        {/*temos que colocar o elemento Text para não dar erro*/}
      </TouchableOpacity>
    </View>
  );
}
