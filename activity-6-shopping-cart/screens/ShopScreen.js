import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useCart } from '../context/CartContext';

export default function ShopScreen() {
  const { products, addToCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Products</Text>
      <Text style={styles.subtitle}>Choose your favorite items!</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.emoji}>{item.emoji}</Text>

            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.price}>
                ₱{item.price.toLocaleString('en-PH')}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#172554',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 5,
    marginBottom: 15,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  emoji: {
    fontSize: 35,
    marginRight: 14,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  price: {
    fontSize: 14,
    color: '#2563EB',
    marginTop: 5,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
