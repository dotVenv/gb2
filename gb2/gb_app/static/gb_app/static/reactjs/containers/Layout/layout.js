import React from "react";
import { CustomSidebar } from "../../components";
import { Spacer, Card, CardBody } from "@nextui-org/react";
const Layout = ({ children }) => {


    return(
        <>  
            <CustomSidebar />
            <Card  className="mx-auto max-w-2xl justify-center align-center h-[5vh] sm:px-6 lg:px-8 mt-4 py-4 bg-gray-300">
              <div className='flex'>
                <p className='float start mt-2 py-3 text-black'> Welcome User </p>
              </div> 
            </Card>
           
            

            
        </>
    );
};

export default Layout;