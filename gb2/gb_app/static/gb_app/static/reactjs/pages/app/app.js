import React  from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Dashboard } from '../../containers/index';
import { RecoilRoot } from 'recoil';
import { ConnContext, Conn } from '../../connector/index';

export default function App(){

    return(
        <React.StrictMode>
            <NextUIProvider>
                <ConnContext.Provider value={Conn} >
                    <RecoilRoot>
                        <BrowserRouter>
                            <Routes>
                                <Route path='' element={<Dashboard />}/>
                            </Routes>
                        </BrowserRouter>
                    </RecoilRoot>
                </ConnContext.Provider>
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


