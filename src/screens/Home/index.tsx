import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native"; // esse elemento é nativo do react-native que é específico para contexto mobile - View é como se fosse uma div
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  // App é a função padrão que vai ser iniciada no nosso app
  // no JSX um componente é uma interface e também é uma função que tem um retorno onde fica os elementos que serão exibidos em tela

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe!",
        "Já existe um participante na lista com esse nome."
      );
    }
    setParticipants((state) => [...state, participantName]);
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      // array para definir os botões
      {
        text: "Sim",
        onPress: () => setParticipants(state => state.filter(participant => participant !== name)), // o que vai ocorrer caso esse botão seja pressionado - vai ser remotivo o participante dentro de 'name'
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
          onChangeText={(text) => setParticipantName(text)} // podemos colocar apenas setParticipantName dentro ds chaves
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          {/*esse elemento é para indicar que aqui é uma região clicável da aplicação*/}
          <Text style={styles.buttonText}>+</Text>
          {/*temos que colocar o elemento Text para não dar erro*/}
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants} // não precisamos usar o map, aqui em data passamos o nosso array
        keyExtractor={(item) => item} // extraindo key
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          // é o que vai ser renderizado caso a listagem (o array) esteja vazia
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença!
          </Text>
        )}
      />
    </View>
  );
}
