import { useEffect, useState } from "react"

const useFetch = (url) => {
  const[data,setData]=useState([]);
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState("")

  const getData=async()=>{
    try{
        const fetchData=await fetch(url);
        console.log(fetchData)
        const convert=await fetchData.json();
        
        setData(convert)
    }
    catch(error){
        setError(error.message)
    }
    finally{
        setLoading(false);
    }
  }

  useEffect(()=>{
    getData();
  },[url])

  return {data,loading,error}
}

export default useFetch