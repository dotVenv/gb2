


import React, { useContent } from 'react';
import { Card,CardBody, CardFooter, Button } from '@nextui-org/react';

const CookieConsent = ({showCookieConsent}) => {
    
    return(
        <>
            <Card className='relative sticky-bottom '>
                <div className='flex'>
                    <CardBody>
                        <p className='text-small'>We use cookies to provide the best experience. By continuing to use our site, you agree to our Cookie Policy.</p>
                    </CardBody>
                    <CardFooter className='float-end'>
                        <div className='flex gap-2 float-end'>
                            <Button onPress={(e) => {showCookieConsent('accepted')}}>
                                Accept All
                            </Button>
                            <Button variant='light' onPress={(e) => {showCookieConsent('rejected')}}>
                                Reject
                            </Button>
                        </div>
                    </CardFooter>
                </div>
            </Card>
        </>
    );
};

export default CookieConsent;
