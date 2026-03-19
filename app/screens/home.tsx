import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { ThemedText } from '@/components/themed-text';

export default function Login() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Bem-vindo</ThemedText>
      <ThemedText type="subtitle">Agendamento de Salão</ThemedText>
      
      <Link href="/" asChild>
        <View style={styles.button}>
          <ThemedText style={styles.buttonText}>Login</ThemedText>
        </View>
      </Link>
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
  button: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#2400ee',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
