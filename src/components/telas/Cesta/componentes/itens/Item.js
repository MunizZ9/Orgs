import React from "react";
import { View, StyleSheet, Image, FlatList} from "react-native"

import Texto from "../../../../ComponenteTexto/Texto";
import cesta from "../../../../../mocks/cesta";

export default function Item({ item: { nome, imagem } }) {

        return ( // Adicionamos "return" aqui para garantir que o JSX seja retornado
            <View style={estilos.item}> 
                <Image style={estilos.imagem} source={imagem} />
                <Texto style={estilos.nome}>{nome}</Texto>
            </View>
        );
    };

const estilos = StyleSheet.create ({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },

    imagem: {
        width: 46,
        height: 46,
    },

    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    },
});