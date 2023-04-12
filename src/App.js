import React from 'react';
import './App.css';
import Header from '../src/components/Header/Header';
import Sidebar from "./components/Sidebar/SidebarStructure/Sidebar";
import FeedStructure from './components/Feed/FeedStructure/Feed';
import Widgets from './components/Widgets/Widgets';



function App() {

  return (
    <div className="App">
      <Header />
      
      <div className='app__body'>
        <Sidebar />
        <FeedStructure/>
        <Widgets />
      </div>
    </div>
  );
}

export default App;