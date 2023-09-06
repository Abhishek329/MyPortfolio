/* eslint-disable react/jsx-no-undef */
import {React, useEffect, useState} from "react";
import axios from "axios";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Works from './components/Works.jsx';
import Contact from './components/Navbar.jsx';




function App() { 
 // const readtoken = "41980539c441ed09d3880c4ab12dcd48f2004492"
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get(`https://myprotfolio-8597e-default-rtdb.firebaseio.com/myPortfolio.json`).then(res => {
        setData(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
    getData();
  }, []);
  return (
    <div>
      <Navbar/>
      <Home content={data[0]}/>
      <About content={data[1]}/>
      <Skills content={data[2]}/>
      <Works content={data[3]}/>
      <Contact />
    </div>
  );
}

export default App;






