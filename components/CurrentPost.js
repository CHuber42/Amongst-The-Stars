import React from 'react';
import {StyleSheet, Text, View, VrButton, Image, asset, Environment} from 'react-360';
import { ImageBackground } from 'react-native';


/**
 * Render a description of the currently-selected model.
 * Connected to the global store to receive inputs.
 */

const styles = StyleSheet.create({
  wrapper: {
    width: 600,
    height: 600,
    // borderColor: '#303050',
    borderWidth: 2,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    // padding: 10,
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


const CurrentPost = () => {
  return (
    <Image source={asset('newtarget.png')} style={styles.wrapper}/>
  );
};

  

export default CurrentPost;