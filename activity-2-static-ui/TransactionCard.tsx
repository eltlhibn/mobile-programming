import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TransactionCardProps {
  icon: string;
  title: string;
  date: string;
  amount: string;
  positive?: boolean;
}

export default function TransactionCard({
  icon,
  title,
  date,
  amount,
  positive = false,
}: TransactionCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text
        style={[
          styles.amount,
          positive ? styles.positive : styles.negative,
        ]}
      >
        {amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  date: {
    color: '#777',
    fontSize: 12,
    marginTop: 2,
  },
  amount: {
    fontWeight: 'bold',
  },
  positive: {
    color: '#16A34A',
  },
  negative: {
    color: '#DC2626',
  },
});