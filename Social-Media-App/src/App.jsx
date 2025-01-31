import React,{useEffect,useState} from 'react'
import Routing from './Routing/Routing'
import {useDispatch } from 'react-redux';
import { getCurrentUser } from './Store/Slices/AuthSlice';


const App = () => {
  const [Loading, setLoading] = useState(false)
  const dispatch=useDispatch()
  useEffect(() => {
  dispatch(getCurrentUser(setLoading))  
  }, [])
  
  return (
    <div>
      {Loading ? <h1>Loading...</h1>:      <Routing/>
      }
    </div>
  )
}

export default App
