import { StatusBar, SafeAreaView, FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';

import Informacoes from './src/components/telas/Cesta/componentes/Informacoes/Informacoes';
import Topo from './src/components/telas/Cesta/componentes/topo/Topo';
import Botao from './src/components/telas/Cesta/componentes/botao/Botao';
import Texto from './src/components/ComponenteTexto/Texto';

import Item from './src/components/telas/Cesta/componentes/itens/Item';

import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
import cesta from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) { // Faz com que enquanto a fonte não for carregada não apareça nada na tela
    return <View/>
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar/>
        <FlatList
            data={cesta.itens.lista}
            renderItem={Item}
            keyExtractor={({ nome, }) => nome }
            ListHeaderComponent={() => {
              return <>
                    <Topo/>
                    <Informacoes/>     
                    <Botao/>
                    <Texto style={estilos.titulo}>{cesta.itens.titulo}</Texto>
              </>
            }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}


const estilos = StyleSheet.create ({
  titulo: {
      color: "#464646",
      fontWeight: "bold",
      marginTop: 32,
      marginBottom: 8,
      marginLeft: 16,
      fontSize: 20,
      lineHeight: 32,
  },
});