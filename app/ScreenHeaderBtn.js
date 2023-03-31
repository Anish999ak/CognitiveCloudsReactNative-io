import React from 'react'
import { View , Text, TouchableOpacity, Image } from 'react-native'
const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}) => {
  return (
   <TouchableOpacity>
    <Image  style={{height:'30px',width:'30px',margin:'10px'}}  source={'https://cdn.vectorstock.com/i/1000x1000/71/98/list-icon-on-white-background-flat-style-vector-25837198.webp'}/>
   </TouchableOpacity>
  )
}

export default ScreenHeaderBtn