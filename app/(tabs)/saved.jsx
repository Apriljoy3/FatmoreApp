import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';

const Saved = () => {
  const [savedItems, setSavedItems] = useState([
    { id: '1', name: 'Saved Item 1' },
    { id: '2', name: 'Saved Item 2' },
    { id: '3', name: 'Saved Item 3' },
  ]);

  const handleRemoveItem = (id) => {
    Alert.alert(
      "Confirm Removal",
      "Are you sure you want to remove this item?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => {
          setSavedItems((prevItems) => prevItems.filter(item => item.id !== id));
        }},
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Button title="Remove" onPress={() => handleRemoveItem(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Items</Text>
      {savedItems.length === 0 ? (
        <Text style={styles.emptyText}>No saved items yet.</Text>
      ) : (
        <FlatList
          data={savedItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FF6F61', // Red-pink color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Saved;
