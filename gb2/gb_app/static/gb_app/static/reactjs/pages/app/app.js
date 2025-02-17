import React, { Suspense } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Dashboard, MyProfile, AllTournaments, Tournament } from '../../containers/index';
import { ConnContext, Conn } from '../../connector/index';
import { Preloader } from "../../components";



export default function App(){


    return(
        <React.StrictMode>
            <NextUIProvider>
                <Suspense fallback={<Preloader />} >
                    <ConnContext.Provider value={Conn}>
                        <BrowserRouter>
                            <Routes>
                                <Route path='' element={<Dashboard />}/>
                                <Route path='/myprofile' element={<MyProfile />}/>
                                <Route path='/tournaments' element={<AllTournaments />}/>
                                <Route path='tournament' element={<Tournament />} />
                            </Routes>
                        </BrowserRouter>
                    </ConnContext.Provider>
                </Suspense>
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


