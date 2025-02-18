'use client';

import React, { useState } from "react";
import { Button, Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Card,
    User,
    Chip,
    Spacer } from "@nextui-org/react";
      

const TourneyTable = ({allUsers}) => {


    return(
        <>
        
        <Table removeWrapper aria-label="Tournament leaderboard">
            <TableHeader className='bg-gradient-to-r from-pink-200 to-purple-200'>
                <TableColumn>Current Leaderboard</TableColumn>
                <TableColumn></TableColumn>
               
            </TableHeader>
            <TableBody>

                {allUsers.map((key, index) => {
                    return(
                        <TableRow key={index}>
                            <TableCell className=' bg-gradient-to-r from-zinc-800 from-gray-800 rounded-border rounded-large border-rounded'>
                                
                                    <User
                                        avatarProps={{
                                            src: key.profile_pic,
                                        }}
                                    
                                        description={
                                            <div>
                                                <div className='flex gap-2'>
                                                    <Chip color={key.points > 0 ? 'primary' : 'warning'} radius='lg' size='sm' variant='faded'>Points: <b>{key.points}</b></Chip>
                                                    <Chip color={key.wins > key.losses ? 'primary' : key.wins == key.losses ? 'warning' : 'danger' } radius='lg' size='sm' variant='faded'> Wins: <b>{key.wins}</b> </Chip>
                                                    <Chip color={
                                                        key.matchmaking_status == 'idle' ? 'secondary' : key.matchmaking == 'matchmaking' ? 'primary': key.matchmaking == 'connected' ? 'success' : 'danger'} 
                                                        radius='lg' size='sm' variant='faded'>Matchmaking: {key.matchmaking_status}</Chip>
                                                </div>
                                                <Spacer></Spacer>
                                                <div className='flex gap-2'>
                                                    <p className='text-black'>Server: <b>{key.server}</b> - </p>
                                                    <p className='text-black'>Platform: {key.platform == 'PC' 
                                                            ? <i className="fa-solid fa-computer"></i>
                                                            : key.platform == 'Xbox' 
                                                                ? <i className='fa-solid fa-xbox'></i>
                                                                : key.platform = 'PSN'
                                                                    ? <i className='fa-solid fa-playstation'></i>
                                                                    : undefined } </p>
                                                </div>
                                               
                                                
                                            </div>
                                        }
                                        name={<i className='font-semibold text-md text-black'>@{key.username}</i>}
                                        />
                                
                            </TableCell>
                            <TableCell> <b className="text-lg font-bold text-black">#{index + 1}</b> </TableCell>
                            
                        </TableRow>
                    )
                })}
               
            </TableBody>
        </Table>
        </>
    );

};

export default TourneyTable;



