import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const EditorScreen = ({ route, navigation }) => {
  const { template } = route.params;
  
  const [cardData, setCardData] = useState({
    recipientName: '',
    senderName: '',
    message: '',
    backgroundColor: template.colors[0],
    textColor: '#FFFFFF',
  });

  const colorOptions = [
    '#FF5A8C', // Pink
    '#9B87F5', // Purple
    '#FFDE59', // Yellow
    '#7ED957', // Green
    '#83C5FF', // Blue
    '#333333', // Dark Gray
  ];

  const updateCardData = (key, value) => {
    setCardData({
      ...cardData,
      [key]: value,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.previewContainer}>
          <View 
            style={[
              styles.cardPreview, 
              { backgroundColor: cardData.backgroundColor }
            ]}
          >
            <Image source={template.image} style={styles.templateOverlay} />
            <Text style={[styles.previewText, { color: cardData.textColor }]}>
              To: {cardData.recipientName || 'Recipient Name'}
            </Text>
            <Text style={[styles.previewMessage, { color: cardData.textColor }]}>
              {cardData.message || 'Your birthday message will appear here'}
            </Text>
            <Text style={[styles.previewText, { color: cardData.textColor }]}>
              From: {cardData.senderName || 'Your Name'}
            </Text>
          </View>
        </View>

        <View style={styles.editorSection}>
          <Text style={styles.sectionTitle}>Card Details</Text>
          
          <Text style={styles.inputLabel}>To:</Text>
          <TextInput
            style={styles.input}
            placeholder="Recipient's Name"
            value={cardData.recipientName}
            onChangeText={(text) => updateCardData('recipientName', text)}
          />
          
          <Text style={styles.inputLabel}>Your Message:</Text>
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Write your birthday wishes here..."
            multiline
            numberOfLines={4}
            value={cardData.message}
            onChangeText={(text) => updateCardData('message', text)}
          />
          
          <Text style={styles.inputLabel}>From:</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={cardData.senderName}
            onChangeText={(text) => updateCardData('senderName', text)}
          />
          
          <Text style={styles.sectionTitle}>Card Style</Text>
          
          <Text style={styles.inputLabel}>Background Color:</Text>
          <View style={styles.colorOptions}>
            {colorOptions.map((color) => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorOption,
                  { backgroundColor: color },
                  cardData.backgroundColor === color && styles.selectedColor,
                ]}
                onPress={() => updateCardData('backgroundColor', color)}
              />
            ))}
          </View>
          
          <Text style={styles.inputLabel}>Text Color:</Text>
          <View style={styles.colorOptions}>
            <TouchableOpacity
              style={[
                styles.colorOption,
                { backgroundColor: '#FFFFFF' },
                cardData.textColor === '#FFFFFF' && styles.selectedColor,
              ]}
              onPress={() => updateCardData('textColor', '#FFFFFF')}
            />
            <TouchableOpacity
              style={[
                styles.colorOption,
                { backgroundColor: '#333333' },
                cardData.textColor === '#333333' && styles.selectedColor,
              ]}
              onPress={() => updateCardData('textColor', '#333333')}
            />
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.previewButton}
          onPress={() => navigation.navigate('Preview', { cardData, template })}
        >
          <Text style={styles.previewButtonText}>Preview Card</Text>
          <MaterialIcons name="visibility" size={24} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
  },
  scrollView: {
    flex: 1,
  },
  previewContainer: {
    padding: 20,
    alignItems: 'center',
  },
  cardPreview: {
    width: '100%',
    aspectRatio: 3/4,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'relative',
  },
  templateOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3,
    borderRadius: 15,
  },
  previewText: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: '500',
  },
  previewMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    padding: 10,
  },
  editorSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5A8C',
    marginBottom: 15,
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  colorOptions: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedColor: {
    borderWidth: 3,
    borderColor: '#333',
  },
  previewButton: {
    backgroundColor: '#9B87F5',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default EditorScreen