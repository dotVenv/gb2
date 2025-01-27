'uce client';
import React from "react";

import { Tabs, Tab } from "@nextui-org/react";

const StickyOptions  = () => {
    return(
        <>
            <div className="flex w-full flex-col">
            <Tabs aria-label="Options" isVertical={true} className='justify-center align-center mx-auto' color="secondary" variant="bordered">
            
            <Tab
                key="holder"
                title={
                    <div className="flex items-center space-x-2 fa-xl">
                        <i className="fa-solid fa-slash  fa-sm"></i>
                
                    </div>
                }
                />
                <Tab
                    key="community chat"
                    title={
                        <div className="flex items-center space-x-2 fa-xl">
                        <i className="fa-solid fa-message"></i>
                    
                        </div>
                    }
                />
                
                <Tab
                key="pvp chat"
                    title={
                        <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-comments-dollar"></i>
                        
                        </div>
                    }
                />
                <Tab
                key="current tournament"
                    title={
                        <div className="flex items-center space-x-2 fa-xl">
                        <i className="fa-solid fa-hand-fist"></i>
                        </div>
                    }
                />
            </Tabs>
        </div>
        </>
    );
};


export default StickyOptions;