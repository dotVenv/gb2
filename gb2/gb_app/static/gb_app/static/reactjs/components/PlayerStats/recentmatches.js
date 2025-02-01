'use client';


import React, { useState } from "react";
import { Box, Switch, Paper, Grow, FormControlLabel} from "@mui/material";
import { Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Chip,
    Tooltip, 
    Spacer,} from "@nextui-org/react";

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
                  
                <Table aria-label="Recent matches" className='bg-zinc-100 text-white'>
                    <TableHeader className='flex-col text-white gap-2'>
                        <TableColumn>OPPONENT</TableColumn>
                        <TableColumn>POSITION</TableColumn>
                        <TableColumn>POINTS</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                    </TableHeader>
                    <TableBody classname='bg-zinc-100 text-white'>
                        <TableRow key="1">
                        <TableCell> 
                            <User
                                avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                }}
                                description="@OppononeName"
                                name="Opoonent name"
                                />
                        </TableCell>
                        <TableCell style={{'color': 'orange'}}>7th</TableCell>
                        <TableCell style={{'color': 'green'}}>+12pts</TableCell>
                        <TableCell><Chip variant='light' color='success' className='p-4' size='sm' radius='lg'>W</Chip></TableCell>
                        </TableRow>
                       
                    </TableBody>
                    </Table>
                </Grow>
           
                </Box>
            : undefined }
            <Spacer></Spacer>
            
        
        <br></br>
        
        </>
    );
};
export default MostRecentMatches;



