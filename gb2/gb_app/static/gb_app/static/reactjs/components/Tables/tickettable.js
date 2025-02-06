'use client';


import React, { useContext, useState} from "react";

import { Button,Card, Accordion, AccordionItem, Chip,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useAtom } from "jotai";
import { ConnContext } from "../../connector";
import { signal, effect } from "@preact/signals-react";

const userQA = signal();



const TicketTable = ({cu, userInfo}) => { 
    userQA.value = [cu.currentTickets];
  
    return(
        <>
        <Card className='w-full h-full overflow-y bg-gray-100' isBlurred >
                    <Accordion variant="splitted h-[10vh]" radius='lg'>
                        <AccordionItem key="1" aria-label="Accordion 1" title={<p className='text-black'>Your support tickets <i className="fa-solid fa-circle-question" style={{'color': 'black'}}></i></p>} className='p-1 text-small text-black'>
                        <Table aria-label="QA Ticket Table" className='bg-gray-100' isCompact removeWrapper>

                                { userQA.value.length == 0 
                                    ?    <TableHeader><TableColumn> No tickets available </TableColumn></TableHeader>
                                    :   <TableHeader>
                                            <TableColumn>Question</TableColumn>
                                            <TableColumn>Answer</TableColumn>
                                            <TableColumn>Status</TableColumn>
                                            <TableColumn>Assigned Staff</TableColumn>
                                        </TableHeader>
                                }
                           
                            <TableBody>
                               { userQA.value.length == 0
                                    ?    <TableRow>
                                            <TableCell className='text-tiny'>No data</TableCell>
                                        </TableRow>
                                    : userQA.value.map((key, index) => {
                                    return(
                                        <TableRow key={index}>
                                            <TableCell className='text-tiny'>{key.Q}</TableCell>
                                            <TableCell className='text-tiny font-semibold'><i>{!key.A ? 'Pending' : key.A }</i></TableCell>
                                            <TableCell>
                                                <Chip variant='shadow'  radius='lg' size='sm' color={key.status.toLowerCase() != 'closed' ? 'success' : 'danger'} className='text-tiny text-black  mb-3'>
                                                    {key.status} 
                                                 </Chip>
                                            </TableCell>
                                            <TableCell className='text-tiny'>{!key.staff ? 'Pending' : key.staff}</TableCell>
                                        </TableRow>
                                    );
                               })}
                               
                            </TableBody>
                            </Table>
                        </AccordionItem>
                        
                        
                    </Accordion>
                </Card>            
        </>
    );
};


export default TicketTable;