import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';
import {useDispatch} from 'react-redux';

import Colors from '../constants/Colors';
import * as placesActions from '../store/places-action';
import ImagePicker from '../components/ImagePicker';

const NewPlaceScreen = props => {
  const [titleValue, setTitleValue] = useState('');

  const dispatch = useDispatch();
  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.textInput} value={titleValue} onChangeText={titleChangeHandler} />
        <ImagePicker />
        <Button title='Save Place' color={Colors.primary} onPress={savePlaceHandler} />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place'
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 4
  }
});

export default NewPlaceScreen;
