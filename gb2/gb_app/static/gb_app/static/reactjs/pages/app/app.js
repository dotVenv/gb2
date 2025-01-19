import React from "react";
import { createRoot } from "react-dom/client";


export default function App(){

    return(
        <React.StrictMode>
            <NextUIProvider>
                <BrowserRouter>
                <Routes>
                    <Route path='' element={<Dashboard />}/>
                </Routes>
                </BrowserRouter>
            </NextUIProvider>
        </React.StrictMode>
    );

};

//<UserContext.Provider value={udata}> 
// </UserContext.Provider>

createRoot(document.getElementById('gba_root')).render(
    <main>
        <App />
    </main>
);


