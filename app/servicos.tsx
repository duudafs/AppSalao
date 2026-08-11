import {StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import { useState, useEffect } from 'react';

type Servico = {
  id: number;
  nome: string;
  duracao: number;
  preco: number;
};

export default function Servicos(){
    const [servicos, setServicos] = useState<Servico[]>([]);

    useEffect(() => {
        fetch('http://192.168.0.29:3000/servicos')
            .then(response => response.json())
            .then(data => setServicos(data))
            .catch(err => console.log(err));

    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Serviços Disponíveis</Text>

            <FlatList
             data={servicos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>{item.duracao} min · R$ {item.preco}</Text>
          </TouchableOpacity>
        )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tittle:{
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        color: '#6d0631',
    },
    card: {
    backgroundColor: '#ececec',
    borderRadius: 20,
    padding: 20,
    marginBottom: 12,
  },
  nome: { fontSize: 17, fontWeight: '700', color: '#333' },
  info: { fontSize: 14, color: '#797979', marginTop: 4 },
});