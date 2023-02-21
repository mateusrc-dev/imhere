import { StatusBar } from "react-native"; // barrinha que fica na parte superior do celular
import { Home } from "./src/screens/Home";

export default function App() {
  // aqui é obrigatório ter o default porque é o arquivo App (primeiro a ser procurado pra ser renderizado)
  return (
    <>
      <StatusBar
        barStyle="light-content" // cor dos ícones
        backgroundColor="transparent"
        translucent // para a StatusBar sobrepor a interface
      />
      <Home />
    </>
  );
}
