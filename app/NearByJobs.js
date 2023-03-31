import React from 'react'
import { View , Text , TouchableOpacity , ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import useFetch from '../Hook/useFetch'
import NearByJobCard from './NearByJobCard'
const NearByJobs = () => {
  const router = useRouter()
  const {data,isLoading,error} = useFetch(
    'search',{query:'React developer', num_pages:1}
  )
  return (
     <View>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View>
              <Text style={{fontSize:'16px',fontWeight:700}}>NearByJobs</Text>
            </View>
           <View>
            <TouchableOpacity style={{fontSize:'23px'}}>Show All</TouchableOpacity>
           </View>
           </View>
           <View>
            {isLoading?(<ActivityIndicator size='large' color='red' />):error?(
              <Text>SomeThing Went Wrong</Text>
            ):(
              data?.map((job)=>{
                return  <NearByJobCard
                job={job}
                key={`nearby-job-${job.job_id}`}
                handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />  
              })
            )}
           </View>
     </View>
  )
}

export default NearByJobs