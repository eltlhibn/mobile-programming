import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const recipes = [
  {
    id: '1',
    name: 'Chicken Adobo',
    ingredients: 'Chicken, Soy Sauce, Vinegar',
    description: 'A classic Filipino dish.',
  },
  {
    id: '2',
    name: 'Spaghetti',
    ingredients: 'Pasta, Tomato Sauce',
    description: 'Simple and delicious pasta.',
  },
  {
    id: '3',
    name: 'Pancakes',
    ingredients: 'Flour, Eggs, Milk',
    description: 'Perfect breakfast recipe.',
  },
];

export default function RecipeListScreen({
  navigation,
}: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate(
                'RecipeDetail',
                {
                  name: item.name,
                  ingredients:
                    item.ingredients,
                  description:
                    item.description,
                }
              )
            }
          >
            <Text style={styles.name}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
  },
});