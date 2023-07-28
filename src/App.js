import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import NewsItem from './Components/NewsItem';
import './App.css';



import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
  { path: "/", Component: Navbar },
  { path: "/", Component: News },
  {path:"*", Component:Root},
]);


export default function App(){
  return <RouterProvider router={router}/>;
  
}

    function Root() {
      const pageSize=5;
 
    return (
      
      <div>
        <Navbar />
        
        <Routes>
            <Route key="general" path='/general' element={<News apiKey='acd95affde364413baf560339f98f912' key='general' pageSize={5} country='in' category='general' />}></Route>
           <Route key="general" path='/general' element={<News apiKey='acd95affde364413baf560339f98f912'    key='general' pageSize={5} country='in' category='general' />}></Route>
            <Route key="general" path='/general' element={<News apiKey='acd95affde364413baf560339f98f912'    key='general' pageSize={5} country='in' category='general' />}></Route>
            <Route key="business" path='/business' element={<News apiKey='acd95affde364413baf560339f98f912'    key='business' pageSize={5} country='in' category='business' />} />

            <Route key="entertainment" path='/entertainment' element={<News apiKey='acd95affde364413baf560339f98f912'    key='entertainment' pageSize={5} country='in' category='entertainment' />}></Route>
            <Route key="health" path='/health' element={<News apiKey='acd95affde364413baf560339f98f912'    key='health' pageSize={5} country='in' category='health' />}></Route>
            <Route key="science" path='/science' element={<News apiKey='acd95affde364413baf560339f98f912'    key='science' pageSize={5} country='in' category='science' />}></Route>
            <Route key="sports" path='/sports' element={<News apiKey='acd95affde364413baf560339f98f912'    key='sports' pageSize={5} country='in' category='sports' />}></Route>
            <Route key="technology" path='/technology' element={<News apiKey='acd95affde364413baf560339f98f912'    key='technology' pageSize={5} country='in' category='technology' />}></Route>
        </Routes>

      </div>
    )
  }
