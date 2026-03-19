import { StyleSheet, TextInput, Text, View,  TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { ThemedText } from '@/components/themed-text';

export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
const router = useRouter();
  

  return (
    <View style={styles.container}>
      <ThemedText type="title">Bem-vindo de Volta!</ThemedText>
     
      
 <View style={styles.inputContainer}>
    <Text style={styles.label}>Usuário:</Text>
    <TextInput 
      style={styles.TextInput}
      placeholder="Digite seu nome..."
      value={nome}
      onChangeText={setNome}
    />

    <Text style={styles.label}>Senha:</Text>
    <TextInput 
      style={styles.TextInput}
      placeholder="Digite sua senha..."
      value={senha}
      onChangeText={setSenha}
      secureTextEntry
    />

<TouchableOpacity 
  style={styles.sign}
  onPress={() => router.replace('/home')}
>
  <Text style={styles.textLogin}>Login</Text>
</TouchableOpacity>

<View style={styles.divider}>
  <View style={styles.line} />

  
  <View style={styles.line} />

</View>

  </View>

  <View>
    <Text style={styles.textCadastro}> Não tem Login? <Link href="/home" style={styles.LinkCadastro}>Cadastre-se aqui!</Link></Text>
  </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
    gap: 20,
    paddingHorizontal: 20,
  },

  TextInput: {
    marginTop: 5,
    marginBottom: 15,
    width: 340,
    height: 60,
    color: '#8d8d8d',
    fontWeight: 500,
    backgroundColor: '#ececec',
    borderRadius: 40,
    paddingLeft: 25,
  },
  label: {
    fontWeight: 700,
    fontSize: 15,
 marginLeft: 10,
 color: '#797979',
 alignSelf: 'flex-start'
  },
  inputContainer: {
  marginTop: 30,
 justifyContent: 'center',
    alignItems: 'center',
  width: 340,
  gap: 5,
},

sign: {
  marginTop: 10,
  width: '100%',
  paddingVertical: 15,
  backgroundColor: '#aa0063',
  borderRadius: 40,
  alignItems: 'center',
},

textLogin: {
  color: '#ffffff',
  fontWeight: 700,
},

divider: {
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  marginVertical: 20,
},

line: {
  flex: 1,
  height: 1,
  backgroundColor: '#ccc',
},

text: {
  marginHorizontal: 10,
  color: '#888',
},

LinkCadastro:{
  fontWeight: 800,
  color: '#bd0a63',
},

textCadastro: {
  fontWeight: 600,
  color: '#797979'
},

});
