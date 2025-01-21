import React  from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Dashboard } from '../../containers/index';
import { ConnContext, Conn } from '../../connector/index';
import { RecoilRoot } from "recoil";

export default function App(){


    return(
        <React.StrictMode>
            <NextUIProvider>
                    <RecoilRoot>
                        <BrowserRouter>
                            <Routes>
                                <Route path='' element={<Dashboard />}/>
                            </Routes>
                        </BrowserRouter>
                    </RecoilRoot>
            </NextUIProvider>
        </React.StrictMode>
    );

};

//<UserContext.Provider value={udata}> 
// </UserContext.Provider>

createRoot(document.getElementById('gba_root')).render(
    <main className='bg-white  '> 
        <App />
    </main>
);


