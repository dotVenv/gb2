'uce client';
import React from "react";

import { Tabs, Tab } from "@nextui-org/react";
import { Dock, DockIcon, dockVariants } from "../../components";

const StickyOptions  = () => {
    return(
        <>
            <Dock direction="middle" className='fixed   justify-center align-center mx-auto left-0 right-0 bottom-10' >
                <DockIcon>
                    <i className="fa-solid fa-slash  fa-xs"></i>
                </DockIcon>
                <DockIcon>
                    <i className="fa-solid fa-message"></i>
                </DockIcon>
                <DockIcon>
                    <i className="fa-solid fa-comments-dollar"></i>
                </DockIcon>
                <DockIcon>
                    <i className="fa-solid fa-hand-fist"></i>
                </DockIcon>
            </Dock>

        </>
    );
};


export default StickyOptions;