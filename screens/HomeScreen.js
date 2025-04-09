import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ImageBackground,
  Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
    //   source={require('../assets/confetti-bg.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
        //   source={require('../assets/birthday-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        
        <Text style={styles.title}>Birthday Card Creator</Text>
        <Text style={styles.subtitle}>Create beautiful birthday cards for your loved ones!</Text>
        
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <MaterialIcons name="photo-library" size={32} color="#9B87F5" />
            <Text style={styles.featureText}>Choose from beautiful templates</Text>
          </View>
          
          <View style={styles.featureItem}>
            <MaterialIcons name="edit" size={32} color="#9B87F5" />
            <Text style={styles.featureText}>Personalize your message</Text>
          </View>
          
          <View style={styles.featureItem}>
            <MaterialIcons name="share" size={32} color="#9B87F5" />
            <Text style={styles.featureText}>Save and share with friends</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Templates')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <MaterialIcons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 249, 240, 0.85)',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF5A8C',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 30,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 10,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF5A8C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default HomeScreen;