import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  Share, 
  Alert,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import ViewShot from 'react-native-view-shot';

const PreviewScreen = ({ route, navigation }) => {
  const { cardData, template } = route.params;
  const viewShotRef = React.useRef();

  const shareCard = async () => {
    try {
      if (viewShotRef.current) {
        const uri = await viewShotRef.current.capture();
        
        const shareOptions = {
          title: 'Share Birthday Card',
          message: 'Check out this birthday card I made!',
          url: uri,
        };
        
        await Share.share(shareOptions);
      }
    } catch (error) {
      Alert.alert('Error', 'Could not share the card. Please try again.');
      console.error(error);
    }
  };

  const saveCard = async () => {
    try {
      if (viewShotRef.current) {
        const uri = await viewShotRef.current.capture();
        const fileName = `birthday_card_${Date.now()}.png`;
        const newPath = FileSystem.documentDirectory + fileName;
        
        await FileSystem.moveAsync({
          from: uri,
          to: newPath
        });
        
        Alert.alert(
          'Success', 
          'Birthday card saved successfully!',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Could not save the card. Please try again.');
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Birthday Card</Text>
      
      <View style={styles.cardContainer}>
        <ViewShot 
          ref={viewShotRef} 
          options={{ format: 'png', quality: 0.9 }}
          style={styles.viewShot}
        >
          <View 
            style={[
              styles.card, 
              { backgroundColor: cardData.backgroundColor }
            ]}
          >
            <Image source={template.image} style={styles.templateImage} />
            
            <Text style={[styles.cardText, { color: cardData.textColor }]}>
              To: {cardData.recipientName}
            </Text>
            
            <Text style={[styles.cardMessage, { color: cardData.textColor }]}>
              {cardData.message}
            </Text>
            
            <Text style={[styles.cardText, { color: cardData.textColor }]}>
              From: {cardData.senderName}
            </Text>
          </View>
        </ViewShot>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={[styles.actionButton, styles.saveButton]}
          onPress={saveCard}
        >
          <MaterialIcons name="save" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Save</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.shareButton]}
          onPress={shareCard}
        >
          <MaterialIcons name="share" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        style={styles.editButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="edit" size={24} color="#fff" />
        <Text style={styles.editButtonText}>Edit Card</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.newButton}
        onPress={() => navigation.navigate('Templates')}
      >
        <MaterialIcons name="add" size={24} color="#fff" />
        <Text style={styles.newButtonText}>Create New Card</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    padding: 20,
    textAlign: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    padding: 20,
  },
  viewShot: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  card: {
    width: '100%',
    aspectRatio: 3/4,
    borderRadius: 15,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  templateImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 8,
  },
  cardMessage: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    padding: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  saveButton: {
    backgroundColor: '#7ED957',
  },
  shareButton: {
    backgroundColor: '#83C5FF',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9B87F5',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 30,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  newButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5A8C',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 30,
  },
  newButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default PreviewScreen;