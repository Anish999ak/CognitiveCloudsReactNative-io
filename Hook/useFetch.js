import { useEffect , useState } from "react";
import axios from 'axios'
const useFetch = (endpoint,query) =>{
    const [data,setData]  = useState([]);
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading]  = useState(false)


   const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key':  '52139b6fe3mshddc97ee17769279p11cddajsn6851f517ad5b' ,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query},
  };


  
  const fetchData = async () =>{
    setIsLoading(true)
    try{
       const response = await axios.request(options)
       setIsLoading(false)
       setData(response.data.data)
    }catch(error){
      setError(error)
      console.log('There is a problem')
    }finally{
        setIsLoading(false)
    }
  }


  useEffect(()=>{
    fetchData()
  },[])


  const refetch = () =>{
    setIsLoading(true)
    fetchData();
  }
  return {data,isLoading,error,refetch}
}

export default useFetch