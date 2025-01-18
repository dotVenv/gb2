'use client';

import React, { useState, useMemo, useContext } from "react";
import { signal } from "@preact/signals-react";
import { UserContext } from '../../connector/index';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Checkbox,
    Input,
    Link,
    DatePicker,
    Form,
    Divider,
    Spacer,
    Alert,
    ButtonGroup,
  } from "@nextui-org/react";
  




const SignUpModal =  ({ isOpen, onOpenChange, handleSignupOpen }) => {

    
    const usrcontext = useContext(UserContext);
    const [action, setAction] = useState(null);

    
    /* form values */
    const [emailValue, setemailValue] = useState('@');
    const [unameValue, setunameValue] = useState('');
    const [passwordValue,setpasswordValue] = useState('');
    const [rpasswordValue,setrpasswordValue] = useState('');
    const [tosCheck, settosCheck] = useState(false);
    const pwd_match = signal(false);
    /* form values */
    const [errors, setErrors] = useState(null);
    const [signupComplete, setsignupComplete] = useState(false);
    


    /* validate email */
    const validateEmail = (evalue) => evalue.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    
    const invalidEmail = useMemo(() => {

        if (emailValue === "") return false;
        return validateEmail(emailValue) ? false : true;
        
    }, [emailValue]);
    /* validate email */

    /* validate password */
    
    
        // Real-time password validation
    const getPasswordError = (value) => {
        if (value.length < 4) {
            return "Password must be 4 characters or more";
        }
        if ((value.match(/[A-Z]/g) || []).length < 1) {
            return "Password needs at least 1 uppercase letter";
        }
        if ((value.match(/[^a-z]/gi) || []).length < 1) {
            return "Password needs at least 1 symbol";
        }

        return null;
    };
    /* validate password */

    /* handle submission */
    async function onSubmitSignup(e) {
        
        e.preventDefault();        

        // Custom validation checks


        // Password validation
        const passwordError = getPasswordError(passwordValue);
    

        if (passwordError) {
            setErrors(passwordError);
            return;
        };

        // Username validation
        if (unameValue === "admin" || unameValue == "test" || unameValue == "user") {
            setErrors("Nice try! Choose a different username");
            return
        };

        if (passwordValue !== rpasswordValue){
            setErrors('Passwords must match!');
        };
        
        if (!tosCheck){
            setErrors('You must agree to the terms and conditions!');
        };

        //submit data
        const signupdata = {
            email: emailValue,
            uname: unameValue,
            pwd: passwordValue,
            rpwd: rpasswordValue,
            tos: tosCheck,
        };
        let signup_reponse = await usrcontext.signupUser(signupdata);
        if (signup_reponse){
            console.log('response returned');
            if (signup_reponse[0] == 'success'){
                setsignupComplete(signup_reponse[1]);
                window.location.href = 'http://app.localhost:8000';
                
            }else if (signup_reponse[0] == 'failed'){
                setErrors(signup_reponse[1]);
                return;
            };
            
        };
        
        // Clear errors and submit
        setErrors(null);
        
    };
     /* handle submission */


    return(
        <>
        <Modal 
            isOpen={isOpen} 
            placement="top-center" 
            onOpenChange={onOpenChange}
            size='md'
            onClose={handleSignupOpen}
            style={{'overflowY': 'scroll'}}>
            
          
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-white">Sign Up</ModalHeader>
                <Form
                    validationBehavior="native"
                    onReset={() => setAction("reset")}
                    onSubmit={(e) => {onSubmitSignup(e)}}
                    >
                <ModalBody>
                { errors !== null  
                        ? <Alert
                            className='text-tiny'
                            color={'danger'}
                            variant='flat'
                            title={errors}
                            size='sm' 
                            radius='full'/>
                        : 
                    signupComplete !== false ?
                        <Alert
                            className='text-tiny'
                            color={'success'}
                            variant='flat'
                            title='Successfully signed up, you may now sign in.'
                            size='sm' 
                            radius='full'/>
                        :
                    undefined
                    
                      }
                        <Input
                            isRequired
                            label="Email"
                            errorMessage="Please enter a valid email"
                            placeholder="Enter your email"
                            variant="bordered"
                            color={invalidEmail ? "danger" : undefined }
                            isInvalid={invalidEmail}
                            value={emailValue}
                            onValueChange={setemailValue}
                            endContent={
                                <i className="fa-solid fa-envelope mb-1 pb-1"></i>
                            }
                        />
                        <Input
                            isRequired
                            label="Username"
                            placeholder="Enter your username"
                            value={unameValue}
                            onValueChange={setunameValue}
                            variant="bordered"
                            validate={(value) => {
                                if (value.length < 3) {
                                return "Username must be at least 3 characters long";
                                }
                        
                                return value === "admin" ? "Nice try!" : null;
                            }}
                            endContent={
                                <i className="fa-solid fa-user mb-1 pb-1"></i>
                                }
                        />
                        <Input
                            autocomplete="current-password"
                            isRequired
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            variant="bordered"
                            value={passwordValue}
                            onValueChange={setpasswordValue}
                            errorMessage={getPasswordError(passwordValue)}
                            isInvalid={getPasswordError(passwordValue) !== null}
                            endContent={
                                <i className="fa-solid fa-lock mb-1 pb-1"></i>
                                
                            }
                            />
                        <Input
                            isRequired
                            label="Repeat Password"
                            autocomplete="current-password"
                            placeholder="Repeat your password"
                            type="password"
                            variant="bordered"
                            value={rpasswordValue}
                            onValueChange={setrpasswordValue}
                            validate={(value) => {
                                if (value != passwordValue) {
                                    pwd_match.value = false;
                                return "Passwords must match!";
                                }
                                    pwd_match.value = true;
                                return null;
                            }}
                            endContent={
                                <i className="fa-solid fa-lock mb-1 pb-1"></i>
                                
                                }
                        />
                        
                        <div className="flex py-2 px-1 justify-between">
                        <Checkbox
                            isRequired
                            isSelected={tosCheck}
                            onValueChange={settosCheck}
                            classNames={{
                            label: "text-small",
                            }}
                        >
                            Agree to terms and conditions.
                        </Checkbox>
                        <Link color="primary" href="#" onPress={handleSignupOpen} size="sm">
                            Have an account? Sign in here.
                        </Link>
                        </div>

        
                </ModalBody>
                <ModalFooter className='flex jutsify-end float-end mx-auto'> 
                    <Button color="danger" variant="light" onPress={onClose}>
                        Close
                    </Button>
                    <Button type='submit' variant='flat' color="primary" >
                        Register 
                    </Button>
                </ModalFooter>
                </Form>
                    
               <div className="flex items-center gap-2 py-1">
                    <Divider className="flex-1" />
                    <p className="shrink-0 text-tiny text-default-500">OR</p>
                    <Divider className="flex-1" />
                </div>
                
                <div className="flex mx-auto justify-center align-center gap-2">

                        <Button  
                            variant='flat' 
                            radius='full' 
                            size='sm' 
                            onPress={(e) => {location.href='/oauth/google/'}}
                            className='bg-gradient-to-r from-zinc-600 to-blue-500 text-white shadow-lg'
                            startContent={<i className="fa-brands fa-google fa-lg"></i>}>
                            Sign up with Google
                        </Button>
                    
                </div>
                    <Spacer></Spacer>
                    <br></br>
                </>
            )}
            </ModalContent>
        </Modal>

        </>
    );

};

export default SignUpModal;