import React from "react";
import { Button, Tabs, Tab } from "@nextui-org/react";
const NaviBar = () =>{
    
    return(
        <>
            <Tabs 
               style={{'position':'absolute', 'bottom': '5px',  }}
                className='align-center justify-center  mx-auto'
                color='secondary' aria-label="Mode Select" radius="md">
                    <Tab key="photos" title="Photos"/>
                    <Tab key="music" title="Music"/>
                    <Tab key="videos" title="Videos"/>
            </Tabs>
        </>
    );
}


export default NaviBar;