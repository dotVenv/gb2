import React, { Suspense, useState } from "react";
import { 
    ACMELogo,
    WordRotate,
    AnimatedShinyText,
    LoginModal,
    SignUpModal,
   } from "../../components";

import { Spacer, Button, Code, Chip, cn, useDisclosure} from "@nextui-org/react";
import { signal } from "@preact/signals-react";


const isLoginModalOpen = signal(false);
const isSignupModalOpen = signal(false);

const MainSection = () => {


     /* login & signup modal */

     const {onOpenChange, onOpen} = useDisclosure(); 
     const [triggerLoginModal, setTriggerLoginModal] = useState(isLoginModalOpen.value);
     const [triggerSignUpModal, setTriggerSignupModal] = useState(isSignupModalOpen.value);
 
 
     const handleLoginOpen = () => {
         isLoginModalOpen.value = !triggerLoginModal
         setTriggerLoginModal(isLoginModalOpen.value);
         triggerLoginModal ? onOpen() : undefined;
      
     };
     const handleSignupOpen = () => {
         isSignupModalOpen.value = !triggerSignUpModal
         setTriggerSignupModal(isSignupModalOpen.value);
         triggerSignUpModal ? onOpen() : undefined;
     };
      /* login login & signup modal  */

    return(
        <>
            <div className='mt-4'>
               <br></br>
                <Spacer></Spacer>
                <br></br>
                <ACMELogo />
                <br></br> 
                <Spacer></Spacer>
                <WordRotate  
                    className="text-4xl  align-center  text-center justify-center font-bold text-black bg-transparent dark:text-white flex"
                    style={{'fontSize:':'25px',}}
                    words={["GAMERS-BOUNTY ✔️", "PLAY GAMES 🎮", "WIN MONEY 💰"]}/>
                <Spacer></Spacer>   
                <br></br> 
                <div className="mx-auto max-w-2xl py-29 sm:py-48 lg:py-49 mt-1">
                <div className="text-center text-black">
                    <h5 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-200/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-black dark:to-slate-900/10">
                        WHERE REAL GAMERS COME TO COMPETE!
                    </h5>
                
                    <div className="z-10 flex min-h-[16rem] items-center justify-center">
                        <div
                            className={cn(
                            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                            )}
                        >
                            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span onClick={handleLoginOpen} style={{'color':'green'}}> <i className="fa-solid fa-right-to-bracket"></i> Sign in</span>
                            </AnimatedShinyText>
                            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span onClick={handleSignupOpen} > <i className="fa-solid fa-user-pen"></i> Sign up</span>
                            </AnimatedShinyText>
                        </div>
                    </div>
                </div>
            
                </div>
                
            </div>
            { triggerLoginModal ? <LoginModal isOpen={triggerLoginModal} onOpenChange={onOpenChange} handleLoginOpen={handleLoginOpen} /> 
                : triggerSignUpModal ? <SignUpModal isOpen={triggerSignUpModal} onOpenChange={onOpenChange} handleSignupOpen={handleSignupOpen} /> : undefined }

        </>
    );

};
export default MainSection;