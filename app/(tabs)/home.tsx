import { StyleSheet, View, Text } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { supabase } from '@/lib/supabase';

export default function HomeScreen() {

   const [nome, setNome] = useState('');

  useEffect(() => {
    async function pegarUsuario() {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setNome(data.user.email ?? ''); 
      }
    }
    pegarUsuario();
  }, []);

  return (

    <View style={styles.container}>

      <View style={{marginTop: 70, marginLeft: 20}}>
        <Text style={styles.titulo}>Bem-vindo, {nome}!</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#ac687f' }}>Qual serviço deseja agendar?</Text>
      </View>
      
      <View style={styles.divider}>
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#00ffbf',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  titulo:{
    fontSize: 18,
    fontWeight: '900',
    color: '#6d0631',
  },
  divider: {
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  marginVertical: 0,
},

line: {
  flex: 1,
  height: 1,
  backgroundColor: '#dddcdc',
},
});