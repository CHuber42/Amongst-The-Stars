import React from 'react';
import {StyleSheet, View, Image, asset} from 'react-360';
import {CalculateRelativeAngles} from './GlobalVarsAndFunctions';


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
    const styles = StyleSheet.create({
      wrapper: {
        width: .01,
        height: .01,
        transform: [
          {translate: this.props.parentCoordinates},
          {rotateY: rotationAngles[1]},
          {rotateX: rotationAngles[0]},
          {rotateZ: this.props.globalData.rotation},
          {scale: this.props.scale*120000}
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