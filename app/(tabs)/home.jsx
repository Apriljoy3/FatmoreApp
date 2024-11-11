import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Button, Image, TouchableOpacity, Alert, Modal } from 'react-native';

// Sample data for demonstration
const sampleProducts = [
  { id: '1', name: 'Product A', price: 'P280', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/11/21/FNK_Intsant-Pot-Texas-Style-Chili-Mac_H1.jpg.rend.hgtvcom.791.594.suffix/1700604212111.jpeg' },
  { id: '2', name: 'Product B', price: 'P180', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/8/0/fnk_scalloped-potatoes_s4x3.jpg.rend.hgtvcom.791.594.suffix/1383780633985.jpeg' },
  { id: '3', name: 'Product C', price: 'P230', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/02/16/0/FNM_030122-Pepperoni-Grilled-Cheese_s4x3.jpg.rend.hgtvcom.791.594.suffix/1645023402316.jpeg' },
];

// Sample rewards data
const rewardsData = [
  { id: '1', description: 'Free Coffee', pointsRequired: 50 },
  { id: '2', description: '10% Off Next Purchase', pointsRequired: 100 },
  { id: '3', description: 'Free Product Sample', pointsRequired: 150 },
];

const App = () => {
  const [loyaltyPoints, setLoyaltyPoints] = useState(100); // Initial loyalty points
  const [rewardsModalVisible, setRewardsModalVisible] = useState(false); // State for rewards modal visibility
  const [shoppingModalVisible, setShoppingModalVisible] = useState(false); // State for shopping modal visibility

  const earnPoints = () => {
    setLoyaltyPoints(loyaltyPoints + 10); // Add points
    Alert.alert('Points Earned!', 'You have earned 10 loyalty points.');
  };

  const viewRewards = () => {
    setRewardsModalVisible(true); // Show rewards modal
  };

  const closeRewardsModal = () => {
    setRewardsModalVisible(false); // Hide rewards modal
  };

  const startShopping = () => {
    setShoppingModalVisible(true); // Show shopping modal
  };

  const closeShoppingModal = () => {
    setShoppingModalVisible(false); // Hide shopping modal
  };

  const addToCart = (productName) => {
    Alert.alert('Added to Cart', `${productName} has been added to your cart.`);
  };

  const contactSupport = () => {
    Alert.alert('Contacting Support', 'Support has been contacted successfully.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Your Fatmore App!</Text>

      {/* Personalized Recommendations */}
      <Section title="Personalized Recommendations">
        <FlatList
          data={sampleProducts}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => addToCart(item.name)}
                >
                  <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </Section>

      {/* Loyalty Rewards */}
      <Section title="Loyalty Rewards">
        <Text style={styles.loyaltyText}>Your Loyalty Points: {loyaltyPoints}</Text>
        <Button title="Earn Points" onPress={earnPoints} />
        <Button title="View Rewards" onPress={viewRewards} />
      </Section>

      {/* Rewards Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={rewardsModalVisible}
        onRequestClose={closeRewardsModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Your Rewards</Text>
            <FlatList
              data={rewardsData}
              renderItem={({ item }) => (
                <View style={styles.rewardItem}>
                  <Text>{item.description} - {item.pointsRequired} points</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
            <Button title="Close" onPress={closeRewardsModal} />
          </View>
        </View>
      </Modal>

      {/* Shopping Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={shoppingModalVisible}
        onRequestClose={closeShoppingModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Available Products</Text>
            <FlatList
              data={sampleProducts}
              renderItem={({ item }) => (
                <View style={styles.productItem}>
                  <Image source={{ uri: item.image }} style={styles.productImage} />
                  <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => addToCart(item.name)}
                    >
                      <Text style={styles.addButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
            <Button title="Close" onPress={closeShoppingModal} />
          </View>
        </View>
      </Modal>

      {/* Seamless Shopping */}
      <Section title="Seamless Shopping">
        <Text>Browse products, place orders for pickup or delivery.</Text>
        <Button title="Start Shopping" onPress={startShopping} />
      </Section>

      {/* Enhanced Support */}
      <Section title="Enhanced Support">
        <Text>Get instant help through in-app chat.</Text>
        <Button title="Contact Support" onPress={contactSupport} />
      </Section>

      {/* Real-Time Inventory */}
      <Section title="Real-Time Inventory">
        <Text>Check stock information and get alerts!</Text>
        <Button title="Check Inventory" onPress={() => Alert.alert('Checking Inventory')} />
      </Section>
    </View>
  );
};

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FF6F61', // Change to red-pink
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // Adjusted for contrast
  },
  section: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#4CAF50',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loyaltyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  
  


  },
});

export default App;
