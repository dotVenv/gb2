'use client';
import React, { useState } from "react";
import { Progress } from "@nextui-org/react";
import LRank1  from '../../../imgs/ranks/low_rank_one.png';
import LRank2 from '../../../imgs/ranks/low_rank_two.png';

const RankingStepper = () => {

    const [rankProgress, setRankProgress] = useState(11);
    
    return(
            <>
                <span className="flex w-full items-center p-4">
                    <Progress
                        isStriped
                        label={<span className='text-black text-tiny'><b>{rankProgress}pts</b> out of <b>100pts</b></span> }
                        
                        className="max-w-lg"
                        color={rankProgress < 25 ? 'danger' : rankProgress < 50 ? 'warning' : rankProgress < 70 ? 'primary' ? 'success' : undefined : undefined }
                        showValueLabel={true}
                        size="md"
                        value={rankProgress}
                        />
                </span>
                <div className="grid grid-cols-3  mx-auto mt-3 gap-0 space-x-0">
                    <span className="flex w-full items-center ">
                        <img src={LRank1}  className='sm:h-[75px] sm:w-[75px] lg:w-[145px] lg:h-[145px]' alt='low rank one' />
                    </span>
                    <span className='justify-center align-center mx-auto lg:mt-4 lg:py-7 h-15 w-15'>
                        <i className="fa-solid fa-circle-arrow-right fa-4xl" style={{'color': '#B19F7C'}}></i>
                    </span>
                    <span className="flex items-center w-full">    
                        <img src={LRank2} className='sm:h-[75px] sm:w-[75px] lg:w-[145px] lg:h-[145px]' alt='low rank two' />
                    </span>
                </div>
            </>
        );
};

export default RankingStepper;