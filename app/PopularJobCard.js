import React from 'react'
import { View , Text , TouchableOpacity , Image} from 'react-native'
import { checkImageURL } from '../Utilities/Pattern'
const PopularJobCard = ({item , selectedJob , handleCardPress}) => {
  return (
     <TouchableOpacity
           onPress={()=>handleCardPress(item)}
     >
      <TouchableOpacity 
      >
        <Image 
    style={{height:'50px',width:'50px',margin:'10px',borderRadius:'50%',padding:'20px'}}
     source={{uri:checkImageURL(item?.employer_logo)?item.employer_logo:'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}}
    />
      </TouchableOpacity>
      <Text numberOfLines={1}>{item?.employer_name}</Text>
      <View>
        <Text numberOfLines={1}>{item?.job_title}</Text>
        <Text>{item?.job_country}</Text>
      </View>
     </TouchableOpacity>
  )
}

export default PopularJobCard