'use client';

import React from "react";
import { UserContext, udata } from "../../connector";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import { AboutUs, FreqAsked, Indx, ContactUs } from "../../containers";




export default function App(){
  console.log(
    'You must be ready to compete and get your game on. \n' ,
    'Head over to the login, you won\'t find anything special here!');
  

    return(
      <React.StrictMode>
        <NextUIProvider>
          <UserContext.Provider value={udata}>
            <BrowserRouter>
              <Routes>
                <Route path='' element={<Indx />}/>
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/faq' element={<FreqAsked />} />
                <Route path='/contact-us' element={<ContactUs />} />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </NextUIProvider>
      </React.StrictMode>
  
    
  );
 

};

createRoot(document.getElementById('gbi_root')).render(
  <main className='dark bg-zinc-300 text-white w-full overflow-hidden w-full fluid' >
    <App />
  </main>)
  


