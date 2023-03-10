import logo from './logo.svg';
import './App.css';
import Loginn from './components/Loginn';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Registrer from './components/Registrer';
import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';

function App() {

  const savedUser =() =>{
    const saved = localStorage.getItem("Bruker")
    const initialValue = JSON.parse(saved)
    return initialValue || "";
  }
  const [logginn, setLogginn] = useState({username: "", password:""})
  const [exists, setExists] = useState()
  //State for å holde på registrert bruker
  const [user, setUser] = useState(savedUser)


  useEffect(()=>{
    localStorage.setItem("Bruker", JSON.stringify(user))
  },[user])

  console.log(localStorage)

  return (
   <Routes>
    <Route element={<Layout/>}>
      <Route index element={!exists ? <Loginn 
      setLogginn={setLogginn} 
      logginn={logginn} 
      user={user}
      exists={exists}
      setExists={setExists}
       />
      :
      <Welcome user={user.username} />}/>
      <Route path='registrer' element={<Registrer user={user} setUser={setUser}/>} />
    </Route>
   </Routes>
  );
}

export default App;
