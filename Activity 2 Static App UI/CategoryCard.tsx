import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CategoryCardProps {
  category: string;
  percent: number;
}

export default function CategoryCard({
  category,
  percent,
}: CategoryCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.percent}>{percent}%</Text>
      </View>

      <View style={styles.progressBg}>
        <View
          style={[
            styles.progressFill,
            { width: `${percent}%` },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    fontWeight: '600',
  },
  percent: {
    color: '#666',
  },
  progressBg: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 20,
    marginTop: 10,
  },
  progressFill: {
    height: 8,
    backgroundColor: '#4F46E5',
    borderRadius: 20,
  },
});