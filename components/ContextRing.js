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
  constructor(props)
  {
    super();
  }

  shouldComponentUpdate(){
    return true;
  }

  render(){
    const player = [0, 0, 0];
    const rotationAngles = CalculateRelativeAngles(player, this.props.parentCoordinates);
    const edge = 1200*this.props.scale;
  const translationArray = [(this.props.parentCoordinates[0] - edge/2), (this.props.parentCoordinates[1] + edge/2), this.props.parentCoordinates[2]];
  const styles = StyleSheet.create({
    wrapper: {
      width: edge,
      height: edge,
      transform: [
        {translate: translationArray},
        {rotateX: rotationAngles[0]},
        {rotateY: rotationAngles[1]},
        {rotateZ: this.props.globalRotation},
        {scale: 1}
      ],
      },
  });

  if(this.props.parentName == "Earth")
  {
    console.log(this.props.parentCoordinates[0] - edge/2)
  }
  return (
    <View>
      <Image source={asset('newtarget.png')} style={styles.wrapper}/>
    </View>
  );
  }
}


  

export default ContextRing;