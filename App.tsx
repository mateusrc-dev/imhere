import { Text, View } from "react-native"; // esse elemento é nativo do react-native que é específico para contexto mobile - View é como se fosse uma div

export default function App() {
  // App é a função padrão que vai ser iniciada no nosso app
  // no JSX um componente é uma interface e também é uma função que tem um retorno onde fica os elementos que serão exibidos em tela
  return ( // um componente só pode retornar um elemento -> todos os elementos tem que ficar cercados por alguma tag
    <View>
      <Text>Cuidado para não ser corno!! :)</Text>
      <Text>Você pode achar que não é, mas quem sabe ;)</Text>
    </View>
  );
}
