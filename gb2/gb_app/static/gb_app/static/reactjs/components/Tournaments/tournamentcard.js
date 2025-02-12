'use client';

import React, { useState } from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, Chip, Divider, Spacer, } from "@nextui-org/react";
import { TournamentDrawer } from '../../components';

const TournamentCard = ({tournamentInfo}) => {

    const [isOpen, setisOpen] = useState(false);
    
    var current_date = new Date();
    var hours = current_date.getHours();
    var minutes = current_date.getMinutes();
    var seconds = current_date.getSeconds();
    var current_time = hours + ':' + minutes + ':' + seconds;
    current_time = current_time.replace(':', '');
    var tournament_start = new Date(tournamentInfo.start).toISOString().slice(11,19).replace(':', '')
    var tournment_end = new Date(tournamentInfo.end).toISOString().slice(11,19).replace(':', '')
    console.log( parseInt(current_time) - parseInt(tournament_start));
    console.log((parseInt(tournament_start) - parseInt('1730:00')));
    const checkLive = () => {
        if ( parseInt(current_time) >= parseInt(tournament_start) && parseInt(current_time) <= parseInt(tournment_end)){
            return true;
        }else if( parseInt(current_time) - parseInt(tournament_start) <= (parseInt(tournament_start) - parseInt('1730:00'))){
        
            return 'soon'
        }else{
            return false;
        }
    };

    const [isLive, setisLive] = useState(checkLive());
    return(
        <>
        <Card  isFooterBlurred className="bg-zinc-800 bg-transparent border-no w-[250px] h-[300px]" radius='lg'>
            <p className='text-white absolute mt-2 ml-2'>
                {isLive == true 
                    ? <span><i className="fa-solid fa-circle fa-beat fa-sm" style={{"color": 'red '}}></i> <b className='text-tiny'>Live Now </b><br></br> <i className='text-tiny' style={{'color': '#AAFF00'}}> Leader: </i></span>
                    : isLive == 'soon' 
                        ?  <span><i className="fa-solid fa-circle fa-beat" style={{"color": 'red '}}></i> <b className='text-tiny'>Starting Soon </b></span>
                        : undefined 
                }
            </p>
            <img 
                className="object-cover w-[250px] h-[300px]"
                 src={tournamentInfo.thumbnail} alt='tournament thumbnail' 
            />
          
          <CardFooter className="p-2 grid grid-cols-1 fixed bottom justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          
            <span className='justify-center align-center mx-auto'> <b className='text-gray-100'>
          
                {tournamentInfo.name.toUpperCase()} ({tournamentInfo.specific})
                </b>
                { tournamentInfo.platform.map((key, index) => {
                return( <i key={index}>  {key.id == 'Xbox' 
                    ? <i className="fa-brands fa-xbox fa-sm"></i> 
                    : key.id == 'PSN' 
                    ? <i className="fa-brands fa-playstation fa-sm"></i>
                    : key.id == 'PC' 
                        ? <i className="fa-solid fa-computer fa-sm"></i>
                        : undefined }</i>)
                        
                })}  </span>
            <div className="flex gap-2 justify-center align-items-center mx-auto pb-2 mt-3">
                <Chip radius='lg' size='md' variant='flat' color='default'
                    startContent={<i className="fa-solid fa-money-bills"></i>}>
                    <b>${tournamentInfo.pool}</b> 
                </Chip>
                <Divider orientation="vertical" />
                <Chip radius='lg' size='md' variant='flat' color='default'
                    startContent={<i className="fa-solid fa-people-group"></i>}>
                    <b>{tournamentInfo.registered_count}/{tournamentInfo.limit}</b>
                </Chip>
            </div>
            <div className="flex justify-center align-center mx-auto">
                <i className="fa-solid fa-star" style={{'color': 'yellow'}}></i>
                <br></br>
                <p className="ms-2 text-sm font-bold text-gray-100">{tournamentInfo.rating}</p>
                <Spacer></Spacer>
                
            </div>
            <Button onPress={(e) => { setisOpen(!isOpen)}} radius='lg' variant='shadow' color='secondary' size='sm' className='justify-center align-center mx-auto'> View Details </Button>
           
        </CardFooter>
        </Card>


        {isOpen ? <TournamentDrawer tournamentInfo={tournamentInfo} isOpen={isOpen} setisOpen={setisOpen} isLive={isLive} /> : undefined }
      
        </>
    );
};

export default TournamentCard;