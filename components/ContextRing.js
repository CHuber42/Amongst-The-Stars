import React from 'react';
import {StyleSheet, Text, View, VrButton, Image, asset, Environment} from 'react-360';
import { ImageBackground } from 'react-native';
import {CalculateRelativeAngles} from './GlobalVarsAndFunctions';

/**
 * Render a description of the currently-selected model.
 * Connected to the global store to receive inputs.
 */


class ContextRing extends React.Component
{
  constructor()
  {
    super();
  }

  shouldComponentUpdate(){
    return true;
  }

  render(){
    const rotationAngles = CalculateRelativeAngles(this.props.globalData.cameraLocation, this.props.parentCoordinates);
    const edge = 1200*this.props.scale;
    let rotation = this.props.globalData.rotation;
  const translationArray = [(this.props.parentCoordinates[0] - edge/2), (this.props.parentCoordinates[1] + edge/2), this.props.parentCoordinates[2]];
  const styles = StyleSheet.create({
    wrapper: {
      width: edge,
      height: edge,
      transform: [
        {translate: translationArray},
        {rotateY: rotationAngles[1]},
        {rotateX: rotationAngles[0]},
        {rotateZ: rotation},
        {scale: 1}
      ],
      },
  });

  return (
    <View>
      <Image source={asset('target2.png')} style={styles.wrapper}/>
    </View>
  );
  }
}

export default ContextRing;