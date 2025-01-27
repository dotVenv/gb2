'uce client';
import React from "react";

import { Tabs, Tab } from "@nextui-org/react";

const StickyOptions  = () => {
    return(
        <>
            <Tabs aria-label="Options" className="w-full" isVertical={false} color="secondary" variant="bordered">
        
            <Tab
                key="holder"
                title={
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-slash  fa-xs"></i>
                
                    </div>
                }
                />
                <Tab
                    key="community chat"
                    title={
                        <div className="flex items-center space-x-2 ">
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
                        <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-hand-fist"></i>
                        </div>
                    }
                />
            </Tabs>
        
        </>
    );
};


export default StickyOptions;