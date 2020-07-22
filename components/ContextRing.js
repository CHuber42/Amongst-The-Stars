import React from 'react';
import {Surface, View, Image} from 'react-360';

export default class ContextRing extends React.Component
{
  constructor(props){
    super();
    this.surface = new Surface(10, 10, Surface.SurfaceShape.Flat);
  }

  render(){
    return (
      <View>
        <Image source={"./static_assets/target2.jpg"}/>  
      </View>
    )
  }
}


