import React from 'react';
import {StyleSheet, Text, View, VrButton, Image, asset} from 'react-360';
import { Linking } from 'react-native';

/**
 * Render a description of the currently-selected model.
 * Connected to the global store to receive inputs.
 */

const image = { uri: "https://reactjs.org/logo-og.png" };
const CurrentPost = props => {

    return (
      <View style={styles.wrapper}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <VrButton onClick={() => Linking.openURL('https://en.wikipedia.org/wiki/Jupiter')}>
            <Text style={{textAlign: 'center'}}>
              Hi
            </Text>   
          </VrButton> 
        </View>
      </View>
    );


};

const styles = StyleSheet.create({
  wrapper: {
    width: 1000,
    height: 200,
    borderColor: '#303050',
    borderWidth: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 10,
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
  },
  author: {
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
  },
});

export default CurrentPost;