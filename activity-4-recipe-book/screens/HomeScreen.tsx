import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({
  navigation,
}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        📚 Recipe Book
      </Text>

      <Text style={styles.subtitle}>
        Browse simple recipes
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('RecipeList')
        }
      >
        <Text style={styles.buttonText}>
          View Recipes
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: 10,
    color: '#666',
  },

  button: {
    backgroundColor: '#4F46E5',
    marginTop: 30,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});