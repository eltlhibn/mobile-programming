import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BalanceCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Total Balance</Text>
      <Text style={styles.amount}>₱52,450.00</Text>
      <Text style={styles.growth}>↗ +8.5% this month</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4F46E5',
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 24,
    marginTop: 20,
  },
  label: {
    color: '#DDE2FF',
    fontSize: 15,
  },
  amount: {
    color: '#FFF',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 8,
  },
  growth: {
    color: '#E7EAFF',
    marginTop: 8,
  },
});