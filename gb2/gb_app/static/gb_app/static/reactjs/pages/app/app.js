import React, { Suspense } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Dashboard, MyProfile} from '../../containers/index';
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


