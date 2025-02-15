'use client';

import React from "react";
import { PrevButton,NextButton, usePrevNextButtons } from "./carouselarrows";
import { useDotButton, DotButton } from "./carouseldots";
import useEmblaCarousel from "embla-carousel-react";
import { TournamentCard } from '../../components';

const PopularTournaments = ({cu}) => {



    
    const slides  = cu.tournaments.tournaments;
    const options ={ loop: false }

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
        <br></br>
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container1 gap-0  ">
                {slides.map((key,index) => (
                    <div className="embla__slide" key={index}>
                        <TournamentCard tournamentInfo={key}  />
                    </div>
                ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            style={{'color': 'black'}}
                            className={'embla__dot text-black'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
            </div>
            </section>
        
        </>
    );
};

export default PopularTournaments;