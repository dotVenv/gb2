import React from "react";
import { CustomSidebar } from "../../components";



const Layout = ({ children }) => {


    return(
        <>
            
            <CustomSidebar />
            {children}

            
        </>
    );
};

export default Layout;