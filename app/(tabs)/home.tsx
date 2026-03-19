import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">!</ThemedText>
      <Link href="./index">
         <View style={styles.button}>
                  <ThemedText style={styles.buttonText}>Entrar</ThemedText>
                </View>
      </Link>
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});