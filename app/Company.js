import React from 'react'
import { View, Image, Text } from 'react-native'
import { checkImageURL } from '../Utilities/Pattern'
const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <>
       <View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Image
        style={{height:'50px',width:'50px',margin:'10px',borderRadius:'5px',padding:'20px'}}
        source={{uri:checkImageURL(companyLogo)?companyLogo:'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svgs'}}></Image> 
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontfamily:'san-sherif' , fontSize:'1.5em', fontWeight:700}}>
            {jobTitle}
          </Text>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
          <Text style={{fontSize:'1em' , fontWeight:600}}>{companyName}/</Text>
          <View>
            <Image style={{height:'20px',width:'20px'}} source={'../assets/locationicon.webp'}/>
          </View>
          <View>
            <Text>{location}</Text>
          </View>
        </View>
       </View>
    </>
  )
}

export default Company