import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";

import { Indx } from "../../containers";


export default function App(){
  return(
    <React.StrictMode>
      <NextUIProvider>
        <BrowserRouter>
            <Route path='' Component={<Indx />}/>
        </BrowserRouter>
      </NextUIProvider>
    </React.StrictMode>

  );
};
createRoot(document.getElementById('gbi_root')).render(<App />)