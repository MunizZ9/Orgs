import React from "react";
import { StyleSheet, Image, Dimensions, SafeAreaView } from "react-native";

import Texto from "../../../../ComponenteTexto/Texto";
import cesta from "../../../../../mocks/cesta";

const width = Dimensions.get('screen').width;

export default function Topo() {
    return(
        <SafeAreaView>
            <Image 
            source={require("../../../../../../assets/topo.png")} // e tambem posso pegar a imagem utilizando o require
            style={estilos.topo}
            /> 
            <Texto style={estilos.titulo}>{cesta.topo.titulo}</Texto>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width, // Calcula para que a imagem ocupe 100% da tela sem quebrar,
    },

    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#fff",
        fontWeight: "bold",
        padding: 16,
    },
});