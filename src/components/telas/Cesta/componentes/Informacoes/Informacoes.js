import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"

import Texto from "../../../../ComponenteTexto/Texto";
import cesta from "../../../../../mocks/cesta";

export default function Informacoes() {
    return(
        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>{cesta.detalhes.nome}</Texto>
            <View style={estilos.fazenda}>
                <Image
                style={estilos.imagenFazenda}
                source={require("../../../../../../assets/logo.png")}/>
                <Texto style={estilos.nomeFazenda}>{cesta.detalhes.nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{cesta.detalhes.descricao}</Texto>
            <Texto style={estilos.preco}>{cesta.detalhes.preco}</Texto>
        </View>
    )
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },

    imagenFazenda: {
        width: 32,
        height: 32,
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },
    
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },


})