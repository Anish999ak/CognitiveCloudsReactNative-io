import React ,{useState}from 'react'
import { View , Text , TouchableOpacity , FlatList , ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import PopularJobCard from './PopularJobCard'
import useFetch from '../Hook/useFetch'
const PopularJobs = () => {
  const router = useRouter()
  const {data,isLoading,error} = useFetch(
    'search',{query:'React developer', num_pages:1}
  )
  return (
     <View>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View>
              <Text style={{fontSize:'16px',fontWeight:700}}>Populat Jobs</Text>
            </View>
           <View>
            <TouchableOpacity style={{fontSize:'23px'}}>Show All</TouchableOpacity>
           </View>
           </View>
           <View>
            {isLoading?(<ActivityIndicator size='large' color='red' />):error?(
              <Text>SomeThing Went Wrong</Text>
            ):(
              <FlatList
              data={data}
              renderItem = {({item})=>(
               <PopularJobCard item={item} />
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{columnGap:'1em'}}
              horizontal
              />
            )}
           </View>
     </View>
  )
}

export default PopularJobs