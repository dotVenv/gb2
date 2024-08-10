import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";

import {NextUIProvider} from "@nextui-org/react";


export default function App(){
  return(
    <NextUIProvider>
        <React.StrictMode>
            <BrowserRouter>
                <Route path='/' Component={<Index />}/>
            </BrowserRouter>

        </React.StrictMode>

    </NextUIProvider>

  );
};
createRoot(document.getElementById('gbi_root')).render(<App />)