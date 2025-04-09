import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity, 
  Image 
} from 'react-native';

// Card templates data
const templates = [
  { 
    id: '1', 
    name: 'Happy Birthday Balloons', 
    
    colors: ['#FF5A8C', '#9B87F5'],
  },
  { 
    id: '2', 
    name: 'Birthday Cake', 
    
    colors: ['#7ED957', '#83C5FF'],
  },
  { 
    id: '3', 
    name: 'Confetti Party', 
    
    colors: ['#FFDE59', '#FF5A8C'],
  },
  { 
    id: '4', 
    name: 'Elegant Flowers', 
    
    colors: ['#9B87F5', '#83C5FF'],
  },
];

const TemplateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose a Template</Text>
      <Text style={styles.subheader}>Select a design to customize</Text>
      
      <FlatList
        data={templates}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.templateCard}
            onPress={() => navigation.navigate('Editor', { template: item })}
          >
            <Image source={item.image} style={styles.templateImage} />
            <Text style={styles.templateName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  templateCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  templateImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  templateName: {
    padding: 10,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
});

export default TemplateScreen;
