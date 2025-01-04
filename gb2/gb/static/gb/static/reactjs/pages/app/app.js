import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import { AboutUs, Indx } from "../../containers";


export default function App(){
  console.log(
    'You must be ready to compete and get your game on. \n' ,
    'Head over to the login, you won\'t find anything special here!');


  return(
    <React.StrictMode>
        <NextUIProvider>
          <BrowserRouter>
            <Routes>
              <Route path='' element={<Indx />}/>
              <Route path='/about-us' element={<AboutUs />} />
            </Routes>
          </BrowserRouter>
        </NextUIProvider>
      </React.StrictMode>
  

  );
};
createRoot(document.getElementById('gbi_root')).render(
  <main className='dark bg-zinc-300 text-white'>
    <App />
  </main>)