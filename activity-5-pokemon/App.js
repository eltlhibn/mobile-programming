
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch Pokémon data from the public API
  const fetchPokemon = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=20'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon list.');
      }

      const data = await response.json();

      // Fetch the details of each Pokémon
      const pokemonDetails = await Promise.all(
        data.results.map(async (item) => {
          const detailResponse = await fetch(item.url);

          if (!detailResponse.ok) {
            throw new Error('Failed to fetch Pokémon details.');
          }

          return await detailResponse.json();
        })
      );

      setPokemon(pokemonDetails);
    } catch (err) {
      setError(
        'Unable to load Pokémon. Please check your internet connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Automatically fetch data when the component mounts
  useEffect(() => {
    fetchPokemon();
  }, []);

  // Display each Pokémon
  const renderPokemon = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: item.sprites.other['official-artwork']
            .front_default || item.sprites.front_default,
        }}
        style={styles.pokemonImage}
        resizeMode="contain"
      />

      <Text style={styles.pokemonNumber}>
        #{String(item.id).padStart(3, '0')}
      </Text>

      <Text style={styles.pokemonName}>
        {item.name.charAt(0).toUpperCase() +
          item.name.slice(1)}
      </Text>

      <View style={styles.typeContainer}>
        {item.types.map((typeItem) => (
          <Text
            key={typeItem.type.name}
            style={styles.typeText}
          >
            {typeItem.type.name.toUpperCase()}
          </Text>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#DC2626"
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Pokémon Explorer
        </Text>

        <Text style={styles.headerSubtitle}>
          Discover your favorite Pokémon!
        </Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>
          Pokémon Collection
        </Text>

        {loading ? (
          <View style={styles.centerContainer}>
            <ActivityIndicator
              size="large"
              color="#DC2626"
            />

            <Text style={styles.message}>
              Loading Pokémon...
            </Text>
          </View>
        ) : error ? (
          <View style={styles.centerContainer}>
            <Text style={styles.errorText}>
              {error}
            </Text>

            <TouchableOpacity
              style={styles.refreshButton}
              onPress={fetchPokemon}
            >
              <Text style={styles.buttonText}>
                Try Again
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <FlatList
              data={pokemon}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderPokemon}
              numColumns={2}
              columnWrapperStyle={styles.row}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listContent}
            />

            <TouchableOpacity
              style={styles.refreshButton}
              onPress={fetchPokemon}
            >
              <Text style={styles.buttonText}>
                ↻ Refresh Pokémon
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Data provided by PokéAPI
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  header: {
    backgroundColor: '#DC2626',
    padding: 25,
    paddingTop: 35,
    paddingBottom: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#FEE2E2',
    fontSize: 14,
    marginTop: 7,
  },

  content: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 22,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 18,
  },

  listContent: {
    paddingBottom: 15,
  },

  row: {
    justifyContent: 'space-between',
  },

  card: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    borderRadius: 18,
    padding: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  pokemonImage: {
    width: 115,
    height: 115,
  },

  pokemonNumber: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 5,
  },

  pokemonName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 5,
  },

  typeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
  },

  typeText: {
    backgroundColor: '#FEE2E2',
    color: '#DC2626',
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 10,
    margin: 3,
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  message: {
    color: '#64748B',
    fontSize: 15,
    marginTop: 15,
  },

  errorText: {
    color: '#DC2626',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 15,
  },

  refreshButton: {
    backgroundColor: '#DC2626',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 12,
    padding: 12,
  },
});