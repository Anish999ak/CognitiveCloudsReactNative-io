import {View, Text , ScrollView, SafeAreaView , Button ,StyleSheet} from 'react-native'
import { useState } from 'react'
import { Stack , useRouter } from 'expo-router'
import Welcome from './Welcome'
import PopularJobs from './PopularJobs'
import NearByJobs from './NearByJobs'
import ScreenHeaderBtn from './ScreenHeaderBtn'
import ScreenHeaderBtn1 from './ScreenHeaderBtn1'

const Home  = () =>{
    const router = useRouter()
    return(
    <SafeAreaView style={{flex:1,backgroundColor:'rgb(210 218 210 / 38%)'}}>
       <Stack.Screen options={{
        headerStyle:{backgroundColor:'rgb(210 218 210 / 38%)'},
        headerShadowVisible:true,
        headerRight: () => (
          <ScreenHeaderBtn1
          dimension='60%'
          />
        ),

        headerLeft: () => (
            <ScreenHeaderBtn
           dimension='100%'
          />
        ),
        headerTitle:''
       }}>
       </Stack.Screen>
       <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex:1,padding:'10px'}}>
           <Welcome/><br/>
           <PopularJobs/>
           <NearByJobs/>
          </View>
         </ScrollView>
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
      width:'10em'
    }
});
export default Home