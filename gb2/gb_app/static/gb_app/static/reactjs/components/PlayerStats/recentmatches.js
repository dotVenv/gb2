'use client';


import React, { useState } from "react";
import { Box, Switch, Paper, Grow, FormControlLabel} from "@mui/material";
import { Card, CardFooter, Spacer } from "@nextui-org/react";

const MostRecentMatches = () => {

    const [checked, setChecked] = useState(false);


    const handleChange = () => {
      setChecked((prev) => !prev);
    };
  
    return(
        <>
        
        
        <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show Recent Matches"
            />
            { checked ? 
                <Box  sx={{ display: 'grid grid-cols-5'}} className=' w-full h-15 '>
                <Grow in={checked} {...(checked ? { timeout: 500 } : {})} >
                    <Card className=' col-4 p-4 bg-gradient-to-r from-zinc-50 to-zinc-100'>
                        <p className='text-black justify-center mx-auto text-small'><b> Game mode: </b> <i> Marvel Rivals (2s)</i> </p>
                        <span className='flex'>
                            <p className='text-black justify-center mx-auto text-tiny'> Result: <b style={{'color': 'green'}}><i>W</i></b></p>
                            <p className='text-black justify-center mx-auto text-tiny'> Rank Points: <b style={{'color': 'green'}}><i>+12pts</i></b></p>
                            
                        </span>
                        <span className='flex'>
                            <p className='text-black justify-center align-center mx-auto text-tiny'> Position: <b style={{'color': 'orange'}}><i>7th</i></b></p>
                            <p className='text-black justify-center align-center mx-auto text-tiny'> Opponent: <b style={{'color': 'gray'}}><i>@Cloud8</i></b></p>
                            
                        </span>
                        <CardFooter className='p-2 h-full grid grid-cols-1'>
                            <p className='text-gray-500 text-tiny'>Match ID: <i>MID_1390FJEWF909FS</i></p>
                            <p className='text-gray-500 text-tiny'>Match Time: 
                                <i>{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}:{new Date().getUTCHours()}:{new Date().getMinutes()}</i>
                            </p>
                        </CardFooter>
                    </Card>
                    
                </Grow>
                <Spacer></Spacer>
                <Grow in={checked} {...(checked ? { timeout: 500 } : {})} >
                    <Card className=' col-4 p-4 bg-gradient-to-r from-zinc-50 to-zinc-100'>
                        <p className='text-black justify-center mx-auto text-small'><b> Game mode: </b> <i> Marvel Rivals (2s)</i> </p>
                        <span className='flex'>
                            <p className='text-black justify-center mx-auto text-tiny'> Result: <b style={{'color': 'green'}}><i>W</i></b></p>
                            <p className='text-black justify-center mx-auto text-tiny'> Rank Points: <b style={{'color': 'green'}}><i>+12pts</i></b></p>
                            
                        </span>
                        <span className='flex'>
                            <p className='text-black justify-center align-center mx-auto text-tiny'> Position: <b style={{'color': 'orange'}}><i>7th</i></b></p>
                            <p className='text-black justify-center align-center mx-auto text-tiny'> Opponent: <b style={{'color': 'gray'}}><i>@Cloud8</i></b></p>
                            
                        </span>
                        <CardFooter className='p-2 h-full grid grid-cols-1'>
                            <p className='text-gray-500 text-tiny'>Match ID: <i>MID_1390FJEWF909FS</i></p>
                            <p className='text-gray-500 text-tiny'>Match Time: 
                                <i>{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}:{new Date().getUTCHours()}:{new Date().getMinutes()}</i>
                            </p>
                        </CardFooter>
                    </Card>
                </Grow>

                <Spacer></Spacer>

                <Grow in={checked} {...(checked ? { timeout: 500 } : {})} >
                    <Card  className=' col-4 p-4 bg-gradient-to-r from-zinc-50 to-zinc-100'>
                        <p className='text-black justify-center mx-auto text-small'><b> Game mode: </b> <i> Marvel Rivals (2s)</i> </p>
                        <span className='flex'>
                            <p className='text-black justify-center mx-auto text-tiny'> Result: <b style={{'color': 'green'}}><i>W</i></b></p>
                            <p className='text-black justify-center mx-auto text-tiny'> Rank Points: <b style={{'color': 'green'}}><i>+12pts</i></b></p>
                            
                        </span>
                        <span className='flex'>
                            <p className='text-black justify-center align-center mx-auto text-tiny'> Position: <b style={{'color': 'orange'}}><i>7th</i></b></p>
                            <p className='text-black justify-center align-center mx-auto text-tiny'> Opponent: <b style={{'color': 'gray'}}><i>@Cloud8</i></b></p>
                            
                        </span>
                        <CardFooter className='p-2 h-full grid grid-cols-1'>
                            <p className='text-gray-500 text-tiny'>Match ID: <i>MID_1390FJEWF909FS</i></p>
                            <p className='text-gray-500 text-tiny'>Match Time: 
                                <i>{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}:{new Date().getUTCHours()}:{new Date().getMinutes()}</i>
                            </p>
                        </CardFooter>
                    </Card>
                </Grow>
                </Box>
            : undefined }
            <Spacer></Spacer>
            
        
        <br></br>
        
        </>
    );
};
export default MostRecentMatches;