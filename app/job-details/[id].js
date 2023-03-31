import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, Image } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import useFetch from '../../Hook/useFetch'
import { useState } from 'react';
import Company from '../Company';
import JobTab from '../JobTab';
const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter()
  const [refreshing, setRefreshing] = useState(false)
  const { data, isLoading, error, refetch } = useFetch('job-details', { job_id: params.id })
  
  const tabs = ['About','Qualifications','Responsibilities']
  const [activeTab,setActiveTab] = useState(tabs[0])
  const onRefresh = () => {

  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(235 210 210 / 23%)' }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'rgb(235 210 210 / 23%)' },
          headerShadowVisiblr: false,
          headerBackVisible: false,
          headerTitle: '',
          headerRight: () => (
            <TouchableOpacity>
                <Image style={{ height: '30px', width: '30px', margin: '10px' }} source={'../../assets/img1.png'} />
            </TouchableOpacity>
          )
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {isLoading ? (<ActivityIndicator size='large' color='red' />) : error ? (
          <Text>SomeThing Went Wrong</Text>
        ) : data.length === 0 ? (<Text>No data</Text>) : (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />
            <JobTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            />
          </View>
        )
        }

      </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetails