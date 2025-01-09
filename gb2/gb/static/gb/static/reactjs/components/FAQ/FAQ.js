import React from "react";

import {Tabs, Tab, Card, CardBody, Switch, Spacer, Chip} from "@nextui-org/react";

import ACMELogo from "../ACMELogo/acme";
import Footer from "../Footer/Footer";


const faqTopics = [
    {'topic':'Tournament Rules','data':[{'question':'In-Game Rules?','answer':'All rules apply.'}]},
    {'topic':'Withdrawals','data':[{'question':'Withdrawal Limit?','answer':'No Withdrawal Limit.'}]},
    {'topic':'Refunds','data':[{'question':'Can i refund?','answer':'No refunds.'}]},
    {'topic':'Memberships','data':[{'question':'How to buy a memberhsip?','answer':'Simply buy.'}]},
    {'topic':'Affiliates','data':[{'question':'How to become affiliate?','answer':'Apply.'}]}
]
const FAQ = () =>{

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
                    <Tabs key='outertab' aria-label="Options" color='success' className='flex align-center justify-center mx-auto'>
                        { faqTopics.map((data) => (
                            <Tab key={data.topic} title={data.topic}>
                                {data.data.map((innerdata) => (
                                    <Tabs key='innertab' aria-label="Options"  variant='bordered' radius='sm' className='flex align-center justify-center mx-auto'>
                                        <Tab key={innerdata.question} title={innerdata.question}  className='text-black font-bold' >
                                            <Card className='bg-transparent'>
                                                <CardBody>
                                                    <Chip variant='shadow' color='success' className='float-start' radius='lg'> {innerdata.question}</Chip>
                                                    <br></br>
                                                    <p className='font-bold text-black justify-center align-center mx-auto'> {innerdata.answer}</p>
                                                </CardBody>
                                            </Card>
                                        </Tab>
                                    </Tabs>
                                ))}
                                
                            </Tab>
                        ))}
                        
                    </Tabs>
                    
                </div>

            </section>
        
        </>
    );

};
export default FAQ;