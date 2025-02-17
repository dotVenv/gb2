'uce client';
import React, { useState } from "react";

import { Badge } from "@nextui-org/react";
import { Dock, DockIcon, CustomToast } from "../../components";
import { signal } from "@preact/signals-react";

const toastData = signal({
    toastType : '',
    desc :'',
});


const StickyOptions  = ({cu, userInfo}) => {

    const [isTourneyOpen, setisTourneyOpen] = useState(false);

    const [newToast, setNewToast] = useState(false);
   
    return(
        <>
            <Dock direction="middle" className='fixed   justify-center align-center mx-auto left-0 right-0 bottom-10 p-2' >
                <DockIcon>
                    <i className="fa-solid fa-slash  fa-xs"></i>
                </DockIcon>
               
                <DockIcon>
                    <i className="fa-solid fa-message fa-lg"></i>
                </DockIcon>    
                <DockIcon>
                    <Badge color="danger" showOutline={false} content={0} size='sm' placement='bottom-right' isOneChar variant="faded">
                        <i className="fa-solid fa-comments-dollar fa-lg"></i>
                    </Badge>
                </DockIcon>
                <DockIcon onClick={(e) => { location.href = '/tournament'}}>
                    <Badge color={userInfo.entries >= 1 ? "success" : "danger"} showOutline={false} isOneChar content={userInfo.entries >= 1 ? 1 : 0 } size='sm' placment='bottom-right' variant="faded">
                        <i className="fa-solid fa-hand-fist fa-lg"></i>
                    </Badge>
                </DockIcon>
                
            </Dock>
            { newToast ? <CustomToast sev={toastData.value.toastType} desc={toastData.value.desc} /> : undefined }
        </>
    );
};


export default StickyOptions;