import React, { useContext, useState } from "react";

import {Tabs, Tab, Card, CardBody, Listbox,ListboxItem,Spacer, Chip} from "@nextui-org/react";
import CookieConsent from "../Modals/CookieModal";
import ACMELogo from "../ACMELogo/acme";
import Footer from "../Footer/Footer";
import { UserContext } from "../../connector";

const faqTopics = [
    {'topic':'Tournament Rules','data':[{'question':'In-Game Rules?','answer':'All rules apply.'},{'question':'Rule Violations', 'answer':'Any rule break may result in a ban'}]},
    {'topic':'Withdrawals','data':[{'question':'Withdrawal Limit?','answer':'No Withdrawal Limit.'}]},
    {'topic':'Refunds','data':[{'question':'Can i refund?','answer':'No refunds.'}]},
    {'topic':'Memberships','data':[{'question':'How to buy a memberhsip?','answer':'Simply buy.'}]},
    {'topic':'Affiliates','data':[{'question':'How to become affiliate?','answer':'Apply.'}]}
    
]

export const ListboxWrapper = ({children}) => (
    <div className="w-[150px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 justify-center border-rounded" radius='full'>
      {children}
    </div>
  );

  
const FAQ = () =>{


    
    /* cookie consent */
    const usrcontext = useContext(UserContext);
    const [updateCookie, setupdateCookie] = useState(usrcontext.cookie_consent.value);
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([" "]));
    const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", "), [selectedKeys]);

    const showCookieConsent = (userResponse) =>{
        if (userResponse == 'accepted'){
            usrcontext.cookie_consent.value == 'accepted'
            ? updateCookie  == 'accepted'
                ?  undefined 
                : setupdateCookie(usrcontext.cookie_consent.value) 
            : usrcontext.setCookie('accepted') 
                ? setupdateCookie(usrcontext.cookie_consent.value) 
                : undefined 

        }else if (userResponse == 'rejected'){
            usrcontext.setCookie('rejected');
            setupdateCookie(usrcontext.cookie_consent.value);
        };
        
    };

        /* cookie consent */
        

        

    return (
        <>
        <Spacer></Spacer>
            <section className='mt-4 pt-4'>
                <br></br>
                <Spacer></Spacer>
                <ACMELogo />
                <div className='flex mt-4 px-4 justify-center align-center mx-auto'>
                    <br></br>
                    <Spacer></Spacer>
                    <h2 className='text-black font-bold'> Frequently Asked Questions </h2>
                </div>
                <br></br>
                <Spacer></Spacer>
                <div className="align-center justify-center col-8 mx-auto">
                    <Spacer></Spacer>
                    <h5 className="text-black font-bold text-center"> Topics </h5>
                    <Tabs radius='full' key='outertab' aria-label="Options" color='success' className='flex align-center justify-center mx-auto'>
                        { faqTopics.map((data) => (
                            <Tab key={data.topic} title={data.topic} radius='full'>
                                <ListboxWrapper>
                                    <Listbox
                                        disallowEmptySelection
                                        aria-label="Single selection example"
                                        selectedKeys={selectedKeys}
                                        selectionMode="single"
                                        variant="flat"
                                        onSelectionChange={setSelectedKeys}
                                    >
                                        {data.data.map((innerdata) => (
                                            <ListboxItem className='text-black font-bold' key={innerdata.answer}>{innerdata.question}</ListboxItem>
                                        ))}
                                    </Listbox>
                                </ListboxWrapper>
                                <p className="text-small text-black">Topic answer: <b><i>{selectedValue}</i></b></p>
                            
                            </Tab>
                        ))}
                        
                    </Tabs>
                    
                </div>

            </section>
            { updateCookie != null ? undefined : <CookieConsent showCookieConsent={showCookieConsent} /> }
            <Footer></Footer>
        
        </>
    );

};
export default FAQ;