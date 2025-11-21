import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Detalles({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de usuario</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

});
