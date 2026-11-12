import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function RecipeDetailScreen({
  route,
  navigation,
}: any) {
  const {
    name,
    ingredients,
    description,
  } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {name}
      </Text>

      <Text style={styles.label}>
        Ingredients:
      </Text>

      <Text style={styles.text}>
        {ingredients}
      </Text>

      <Text style={styles.label}>
        Description:
      </Text>

      <Text style={styles.text}>
        {description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.goBack()
        }
      >
        <Text style={styles.buttonText}>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  label: {
    fontWeight: 'bold',
    marginTop: 12,
  },

  text: {
    marginTop: 6,
    color: '#444',
  },

  button: {
    backgroundColor: '#4F46E5',
    marginTop: 30,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});