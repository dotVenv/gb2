'uce client';
import React, { useState } from "react";

import { Badge } from "@nextui-org/react";
import { Dock, DockIcon, TourneyModal } from "../../components";
const StickyOptions  = ({userInfo}) => {

    const [isTourneyOpen, setisTourneyOpen] = useState(false);

    return(
        <>
            <Dock direction="middle" className='fixed   justify-center align-center mx-auto left-0 right-0 bottom-10 p-2' >
                <DockIcon>
                    <i className="fa-solid fa-slash  fa-xs"></i>
                </DockIcon>
               
                <DockIcon>
                    <i className="fa-solid fa-message"></i>
                </DockIcon>
            
                <Badge color="warning" content={0} size='sm' isOneChar variant="flat">
                    <DockIcon>
                        <i className="fa-solid fa-comments-dollar"></i>
                    </DockIcon>
                </Badge>
                <Badge color={parseInt(userInfo.entries) >= 1 ?  "danger ":"warning"}  isOneChar content={userInfo.entries} size='sm' variant={parseInt(userInfo.entries) >= 1 ? "flat": ""}>
                    <DockIcon onClick={(e) => { location.href ='#'}}>
                        <i className="fa-solid fa-hand-fist"></i>
                    </DockIcon>
                </Badge>
            </Dock>
        </>
    );
};


export default StickyOptions;