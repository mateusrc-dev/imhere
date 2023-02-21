import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // vamos criar as estilizações - equivalente a criar um arquivo de estilização - sintaxe semelhante ao json
  container: {
    flex: 1, // para ocupar o máximo possível de espaço - o flexbox já vem ativado no react-native
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
});
