import { Text, View, TextInput } from "react-native"; // esse elemento é nativo do react-native que é específico para contexto mobile - View é como se fosse uma div
import { styles } from "./styles";

export function Home() {
  // App é a função padrão que vai ser iniciada no nosso app
  // no JSX um componente é uma interface e também é uma função que tem um retorno onde fica os elementos que serão exibidos em tela
  return (
    // um componente só pode retornar um elemento -> todos os elementos tem que ficar cercados por alguma tag
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />
    </View>
  );
}
