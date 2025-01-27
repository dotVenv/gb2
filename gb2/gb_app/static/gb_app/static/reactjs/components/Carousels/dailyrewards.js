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
       <ScrollShadow hideScrollBar size={75}>
        <div className="embla w-full h-full overflow-y" >
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container  gap-4 flex justify-center align-center mx-auto">
                        <div className="embla__slide w-full h-full">
                           
                           <Card isFooterBlurred className="border-none " radius="lg">
                                <img
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={200}
                                    src="https://heroui.com/images/hero-card.jpeg"
                                    width={200}
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
                                        Claimed
                                    </Button>
                                </CardFooter>
                                </Card>
                        </div>
                        <div className="embla__slide w-full h-full">
                            <Card isFooterBlurred className="border-none" radius="lg">
                                <img
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={200}
                                    src="https://heroui.com/images/hero-card.jpeg"
                                    width={200}
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
                                        Claimed
                                    </Button>
                                </CardFooter>
                                </Card>
                        </div>
                        <div className="embla__slide w-full h-full">
                            <Card isFooterBlurred className="border-none" radius="lg">
                                    <img
                                        alt="Woman listing to music"
                                        className="object-cover"
                                        height={200}
                                        src="https://heroui.com/images/hero-card.jpeg"
                                        width={200}
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
                                            Claimed
                                        </Button>
                                    </CardFooter>
                                </Card>
                        </div>
                    
                    </div>
                </div>

                <div className="embla__controls">
                    <div className="embla__buttons  ">
                    <PrevButton  onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>

                    <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(
                            index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                        />
                    ))}
                    </div>
                </div>
            </div>
            </ScrollShadow>
        </>
    );
};

export default DailyRewards;