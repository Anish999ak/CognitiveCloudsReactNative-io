import React,{useState} from 'react'
import {TouchableOpacity , View , TextInput , Text , Image , FlatList, Button } from 'react-native'
const jobTypes = ['FullTime','PartTime','Contractor']
import {useRouter} from 'expo-router'
const Welcome = () => {
  const router = useRouter()
  const [activeJobType,setActiveJobType] = useState('FullTime')
  return (
    <View>
      <View style={{margin:'10px'}}>
        <Text style={{fontFamily:'san-sherif',fontWeight:500,fontSize:20}}>Hellow AnishKumar</Text>
        <Text style={{fontFamily:'san-sherif',fontWeight:700,fontSize:28}}>Find your perfect job</Text>
      </View>
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:'90%'}}>
          <TextInput 
        value=''
        onChange={()=>{}}
        placeholder='what are you looking for?'
        style={{padding:'1em',height:'3em',backgroundColor:'white'}}></TextInput>
        </View>
        <View style={{flex:'2%',backgroundColor:'gray',justifyContent:'center',alignItems:'center',borderBottomRightRadius:'.5em',height:'2.56em'}}>
          <TouchableOpacity>
            <Image source={'https://cdn-icons-png.flaticon.com/512/54/54481.png'} style={{height:'15px',width:'15px'}}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
        data={jobTypes}
        scrollEnabled={true}
         renderItem={({item})=>(
          <TouchableOpacity  
          onPress={()=>{
            setActiveJobType(item)
            router.push(`/search/${item}`)
          }}
          style={{margin:'5px',border:'1px solid black',borderTopRightRadius:'10px',borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px',borderTopLeftRadius:'10px'}}>
            <Text style={{padding:'6px'}}>{item}</Text>
          </TouchableOpacity>
  )}
       keyExtractor={item=> item}
       contentContainerStyle={{columnGap:'1px'}}
       horizontal
        >
        </FlatList>
      </View>
    </View>
  )
}

export default Welcome