import React from 'react'
import { View , Text , TouchableOpacity , Image} from 'react-native'
import { checkImageURL } from '../Utilities/Pattern'
const NearByJobCard = ({job , handleNavigate}) => {
  return (
    <View>
        <TouchableOpacity
           onPress={()=>handleNavigate(job)}
     >
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
      <View>
      <TouchableOpacity>
         <Image 
    style={{height:'50px',width:'50px',margin:'10px',borderRadius:'50%',padding:'20px'}}
     source={{uri:checkImageURL(job?.employer_logo)?job.employer_logo:'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}}
    />   
      </TouchableOpacity>
      </View>
       <View>
        <Text numberOfLines={1}>{job?.job_title}</Text>
        <Text>{job?.job_employment_type}</Text>
      </View>
      </View>
     </TouchableOpacity>
    </View>
  )
}

export default NearByJobCard