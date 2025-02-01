'use client';

import React from "react";
import TournamentCard from "../Tournaments/tournamentcard";
import { PrevButton, NextButton, usePrevNextButtons } from "./carouselarrows";
import { DotButton, useDotButton } from "./carouseldots";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardFooter, ScrollShadow, Image, Button } from "@nextui-org/react";


  
const DailyRewards = () => {



    const SLIDE_COUNT = 5
    const slides  = Array.from(Array(SLIDE_COUNT).keys());
    const options ={ loop: true }

    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);


      
    return(
        <>
       <ScrollShadow hideScrollBar size={30} >
        <div className="embla object-cover overflow-y-hidden" >
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container  gap-4 ">
                        <div className="embla__slide">
                           
                           <Card isFooterBlurred  className="border-none " radius="lg">
                                <img
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    src="https://heroui.com/images/hero-card.jpeg"
                                />
                                <CardFooter className="grid grid-cols-1 fixed bottom justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80">PSN Plus 1 Month.</p>
                                    <Button
                                        className="text-tiny text-white bg-black/20"
                                        color="default"
                                        radius="lg"
                                        size="sm"
                                        variant="flat"
                                        >
                                        Claim (25 Left)
                                    </Button>
                                </CardFooter>
                                </Card>
                        </div>
                        <div className="embla__slide  w-full h-full ">
                            <Card isFooterBlurred  isDisabled className="border-none" radius="lg">
                                <img
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    src="https://heroui.com/images/hero-card.jpeg"
                                />
                                <CardFooter className=" fixed bottom justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80">PSN Plus 1 Month.</p>
                                    <Button
                                        className="text-tiny text-white bg-black/20"
                                        color="default"
                                        radius="lg"
                                        size="sm"
                                        variant="flat"
                                        >
                                        Locked (19 Left)
                                    </Button>
                                </CardFooter>
                                </Card>
                        </div>
                        <div className="embla__slide w-full h-full">
                            <Card isFooterBlurred isDisabled className="border-none" radius="lg">
                                    <img
                                        alt="Woman listing to music"
                                        className="object-cover"
                                        src="https://heroui.com/images/hero-card.jpeg"
                                    />
                                    <CardFooter className=" fixed bottom justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                        <p className="text-tiny text-white/80">PSN Plus 1 Month.</p>
                                        <Button
                                            className="text-tiny text-white bg-black/20"
                                            color="default"
                                            radius="lg"
                                            size="sm"
                                            variant="flat"
                                            >
                                            Passed (41 Left)
                                        </Button>
                                    </CardFooter>
                                </Card>
                        </div>
                    
                    </div>
                </div>

                <div className="embla__controls">
                    <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                </div>
            </div>
            </ScrollShadow>
        </>
    );
};

export default DailyRewards;

