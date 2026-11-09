import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import BalanceCard from '../components/BalanceCard';
import TransactionCard from '../components/TransactionCard';
import CategoryCard from '../components/CategoryCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good Morning 👋</Text>
          <Text style={styles.name}>Ella</Text>
          <Text style={styles.subtitle}>
            Personal Finance Dashboard
          </Text>
        </View>

        <BalanceCard />

        <Text style={styles.sectionTitle}>
          Recent Transactions
        </Text>

        <View style={styles.section}>
          <TransactionCard
            icon="💰"
            title="Monthly Allowance"
            date="September 20"
            amount="+₱5,000"
            positive
          />

          <TransactionCard
            icon="🍔"
            title="Food & Drinks"
            date="September 21"
            amount="-₱250"
          />

          <TransactionCard
            icon="📚"
            title="School Supplies"
            date="September 22"
            amount="-₱800"
          />

          <TransactionCard
            icon="🚌"
            title="Transportation"
            date="September 23"
            amount="-₱120"
          />
        </View>

        <Text style={styles.sectionTitle}>
          Budget Overview
        </Text>

        <View style={styles.section}>
          <CategoryCard category="Food" percent={40} />
          <CategoryCard category="Education" percent={30} />
          <CategoryCard category="Transportation" percent={20} />
          <CategoryCard category="Others" percent={10} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 25,
  },

  greeting: {
    fontSize: 16,
    color: '#666',
  },

  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 4,
  },

  subtitle: {
    color: '#777',
    marginTop: 4,
    fontSize: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 14,
    marginHorizontal: 24,
  },

  section: {
    paddingHorizontal: 24,
  },
});