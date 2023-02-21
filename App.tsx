import { Text, View } from "react-native"; // esse elemento é nativo do react-native que é específico para contexto mobile - View é como se fosse uma div

export default function App() {
  // App é a função padrão que vai ser iniciada no nosso app
  // no JSX um componente é uma interface e também é uma função que tem um retorno onde fica os elementos que serão exibidos em tela
  return (
    // um componente só pode retornar um elemento -> todos os elementos tem que ficar cercados por alguma tag
    <View
      style={{
        flex: 1, // para ocupar o máximo possível de espaço - o flexbox já vem ativado no react-native
        backgroundColor: "#131016",
        padding: 24,
      }}
    >
      <Text
        style={{
          color: "#FDFCFE",
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 48,
        }}
      >
        Nome do evento
      </Text>
      <Text
        style={{
          color: "#6B6B6B",
          fontSize: 16,
        }}
      >
        Sexta, 4 de Novembro de 2022
      </Text>
    </View>
  );
}
