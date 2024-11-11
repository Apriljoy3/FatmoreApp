import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Item 1', price: 280 },
    { id: '2', name: 'Item 2', price: 180 },
    { id: '3', name: 'Item 3', price: 230 },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>₱{item.price}</Text>
      <Button title="Remove" onPress={() => handleRemoveItem(item.id)} />
    </View>
  );

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.total}>Total: ₱{totalPrice}</Text>
      <Button title="Checkout" onPress={() => alert('Proceeding to checkout')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FF6F61', // Red-pink background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Title color for contrast
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
    color: '#fff', // Item text color for contrast
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Total text color for contrast
  },
});

export default Cart;
