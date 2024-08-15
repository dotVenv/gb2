import React, { useEffect, useState } from "react";
import { Card,CardBody,CardFooter,Spacer } from "@nextui-org/react";
import { BorderBeam,AnimatedList, ShineBorder } from "../index";

import { cn } from "@nextui-org/react";

const Item = {
    name: '',
    description: '',
    icon: '',
    color: '',
    time: '',
  }
   
  let notifications = [
    {
      name: "Payment received",
      description: "Magic UI",
      time: "15m ago",
   
      icon: "💸",
      color: "#00C9A7",
    },
    {
      name: "User signed up",
      description: "Magic UI",
      time: "10m ago",
      icon: "👤",
      color: "#FFB800",
    },
    {
      name: "New message",
      description: "Magic UI",
      time: "5m ago",
      icon: "💬",
      color: "#FF3D71",
    },
    {
      name: "New event",
      description: "Magic UI",
      time: "2m ago",
      icon: "🗞️",
      color: "#1E86FF",
    },
  ];
notifications = Array.from({ length: 10 }, () => notifications).flat();
 
const Notification = ({ name, description, icon, color, time }) => {
    return (
      <figure
        className={cn(
          "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
          // animation styles
          "transition-all duration-200 ease-in-out hover:scale-[103%]",
          // light styles
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // dark styles
          "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        )}
      >
        <div className="flex flex-row items-center gap-3">
          <div
            className="flex size-10 items-center justify-center rounded-2xl"
            style={{
              backgroundColor: color,
            }}
          >
            <span className="text-lg">{icon}</span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
              <span className="text-sm sm:text-lg text-dark">{name}</span>
              <span className="mx-1 text-dark">·</span>
              <span className="text-xs text-gray-500 text-dark">{time}</span>
            </figcaption>
            <p className="text-sm font-normal dark:text-white/60 text-dark">
              {description}
            </p>
          </div>
        </div>
      </figure>
    );
  };
const SimpleSteps = () => {
   
   
   return (
        <>      
            <ShineBorder
                className="h-[410px] w-[375px] bg-background md:shadow-xl mr-4 justify-center align-center mx-auto flex-cols"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                    <h4 className='text-small font-bold'> <i>Competing made simple. </i> </h4>
                <Card 
                    isFooterBlurred
                    className="md:shadow-xl ml-4 float-end  h-[320px] w-[375px] rounded-xl bg-zinc-900">
                        <CardBody className="items-center mx-auto flex">
                            <div
                                className={cn(
                                    "relative flex h-[500px] w-full flex-col p-6 overflow-hidden  bg-background md:shadow-xl",
                                    "",
                                )}
                                >
                                <AnimatedList>
                                    {notifications.map((item, idx) => (
                                    <Notification {...item} key={idx} />
                                    ))}
                                </AnimatedList>
                            </div>
                        </CardBody>
                        <CardFooter
                            className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                           
                        </CardFooter>
                        <BorderBeam />
                </Card>
            </ShineBorder> 
            
            <br></br>
            <Spacer></Spacer>
        
        </>
               
   );
};

export default SimpleSteps;