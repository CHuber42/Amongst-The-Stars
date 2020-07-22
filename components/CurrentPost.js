import React from 'react';
import {StyleSheet, Text, View, VrButton} from 'react-360';
import { ImageBackground } from 'react-native';

/**
 * Render a description of the currently-selected model.
 * Connected to the global store to receive inputs.
 */

const image = { uri: "https://reactjs.org/logo-og.png" };
const CurrentPost = props => {

    return (
      <View style={styles.wrapper}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          {/* <ImageBackground source={image}/> */}
        </View>
      </View>
    );


};

const styles = StyleSheet.create({
  wrapper: {
    width: 600,
    height: 600,
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