import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native"; // esse elemento é nativo do react-native que é específico para contexto mobile - View é como se fosse uma div
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  // App é a função padrão que vai ser iniciada no nosso app
  // no JSX um componente é uma interface e também é uma função que tem um retorno onde fica os elementos que serão exibidos em tela

  const participants = [
    "Mateus",
    "Pedro",
    "Gustavo",
    "Diego",
    "Isa",
    "Camila",
    "Fernanda",
    "Luana",
    "Luciana",
  ];

  function handleParticipantAdd() {
    console.log("você clicou em adicionar! hahaha'");
  }

  function handleParticipantRemove(name: string) {
    console.log(`você clicou em remover o participante ${name}`);
  }

  return (
    // um componente só pode retornar um elemento -> todos os elementos tem que ficar cercados por alguma tag
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          {/*esse elemento é para indicar que aqui é uma região clicável da aplicação*/}
          <Text style={styles.buttonText}>+</Text>
          {/*temos que colocar o elemento Text para não dar erro*/}
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*ScrollView elemento ativa a rolagem*/}
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={handleParticipantRemove}
          />
        ))}
      </ScrollView>
    </View>
  );
}
