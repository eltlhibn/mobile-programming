
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen() {
  const { cart, removeFromCart, total, itemCount } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Shopping Cart</Text>
      <Text style={styles.subtitle}>
        {itemCount} item(s) in your cart
      </Text>

      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>🛒</Text>
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptyText}>
            Go to the Shop tab and add some products!
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.emoji}>{item.emoji}</Text>

                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.details}>
                    ₱{item.price.toLocaleString('en-PH')} × {item.quantity}
                  </Text>
                  <Text style={styles.subtotal}>
                    ₱{(item.price * item.quantity).toLocaleString('en-PH')}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeFromCart(item.id)}
                >
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.total}>
              ₱{total.toLocaleString('en-PH')}
            </Text>
          </View>
        </>
      )}
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
    paddingBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  emoji: {
    fontSize: 32,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  details: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 4,
  },
  subtotal: {
    color: '#2563EB',
    fontWeight: 'bold',
    marginTop: 4,
  },
  removeButton: {
    backgroundColor: '#FEE2E2',
    padding: 8,
    borderRadius: 7,
  },
  removeText: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyEmoji: {
    fontSize: 55,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  emptyText: {
    color: '#64748B',
    textAlign: 'center',
    marginTop: 8,
  },
  totalContainer: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 10,
    elevation: 2,
  },
  totalLabel: {
    color: '#64748B',
    fontSize: 14,
  },
  total: {
    color: '#2563EB',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
