import React from "react";
import { Card,CardBody,CardFooter } from "@nextui-org/react";
import { BorderBeam } from "../magicui/border-beam";
import ShineBorder from "../magicui/shine-border";
import { interpolate } from "flubber" 
import { MotionValue, useTransform } from "framer-motion";

const SimpleSteps = () => {
    var triangle = [[1, 0], [2, 2], [0, 2]],
    pentagon = [[0, 0], [2, 0], [2, 1], [1, 2], [0, 1]];

    var interpolator = interpolate(triangle, pentagon);

   return (
        <ShineBorder
            className=" ml-2  h-[310px] w-full bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <Card 
                isFooterBlurred
                className="md:shadow-xl float-start ml-4 h-[200px] w-[350px] rounded-xl bg-zinc-900">
                    <CardBody>
                        {
                            d3.select("path")
                            .transition()
                            .attrTween("d", function(){ return interpolator; })
                        }
                    </CardBody>
                    <CardFooter
                        className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className='text-tiny font-bold'> Register To Compete </p>
                    </CardFooter>
                    <BorderBeam />
            </Card>
        </ShineBorder>        
   );
};

export default SimpleSteps;