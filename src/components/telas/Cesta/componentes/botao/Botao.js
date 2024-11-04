import React from "react";
import { View ,StyleSheet, TouchableOpacity } from "react-native"

import Texto from "../../../../ComponenteTexto/Texto";
import cesta from "../../../../../mocks/cesta";

export default function Botao() {
    return(
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>{cesta.detalhes.botao}</Texto>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    botao: {
        marginHorizontal: 16,
        backgroundColor: "#2A9F86",
        marginTop: 16,
        paddingVertical: 16,
        borderRadius: 6,
    },

    textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
});