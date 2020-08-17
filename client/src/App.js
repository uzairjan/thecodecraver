/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Recents from "./components/Recents";
import Featured from './components/Featured';
import Mostvisited from './components/Mostvisited';





function App() {
  return (
    <div>
     <Header />
     <Recents />
    {/* start of section */}
    	<Featured />
      <Mostvisited />
    {/* end of section */}
     <Footer />
    </div>
  );
}

export default App;
