import logo from './logo.svg';
import './App.css';
import Loginn from './components/Loginn';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Registrer from './components/Registrer';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({username: "Kari", password: "drossap123"})

  useEffect(()=>{
    localStorage.removeItem("Bruker", JSON.stringify(user))
  },[])
  console.log(localStorage)
  return (
   <Routes>
    <Route element={<Layout/>}>
      <Route index element={<Loginn />}/>
      <Route path='registrer' element={<Registrer/>} />
    </Route>
   </Routes>
  );
}

export default App;
