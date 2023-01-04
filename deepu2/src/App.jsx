
import './App.css';
import React,{useState,useEffect} from 'react';
import  RingLoader
from 'react-spinners/RingLoader';
import Home from './Home';

function App() {
   const [loading,setLoding]=useState(false)
  useEffect(()=>{
      setLoding(true)
      setTimeout(()=>{
        setLoding(false)
      },3000)
  },[]);
  return (
   <div className='App-header container'>
    {
      loading ?
      <RingLoader
  loading={loading}
     size={60}
     color={'red'}
     className="d-flex text-center justify-content-center"
      />:<Home/>
    }
    </div>
  );
}

export default App;
