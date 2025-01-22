'use client';
import React, { useContext, useState, } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Checkbox,
    Input,
    Link,
    Form,
    Divider,
    Spacer,
    Alert,
  } from "@nextui-org/react";

import { UserContext } from "../../connector";




const LoginModal = ({ isOpen, onOpenChange, handleLoginOpen }) => {

    const usrcontext = useContext(UserContext);
    const [unameValue, setunameValue]= useState('');
    const [pwdValue, setpwdValue] = useState('');
    const [loginStatus, setloginStatus] = useState('idle');
    const [rememberUser, setrememberUser] = useState(false);

    

     /* handle submission */
    async function onSubmitLogin (e)  {

      e.preventDefault();
    
      let response = await usrcontext.loginUser(unameValue, pwdValue, rememberUser);

      if (response){
        if (response != 200 ){
          setloginStatus('failed');
          
        }else{ 
          setloginStatus('success');
          usrcontext.setLoggedIn(true);
          location.href = 'http://app.gamers-bounty-dev.com:8000';

        };
  
      }else{
        setloginStatus('failed');
        
      };

    };
   /* handle submission */

   
    return(
        <>
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}
          onClose={handleLoginOpen}>
            
          
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">
                  <div className="flex flex-col gap-1">
                      <h1 className="text-large font-medium">Sign in to your account</h1>
                      <p className="text-small text-default-500">to continue to Gamers-Bounty</p>
                  </div>
                </ModalHeader>
                <Form
                  className='col-12 w-full'
                  validationBehavior="native"
                  onReset={() => setAction("reset")}
                  onSubmit={(e) => { onSubmitLogin(e);}}
                 >
                  <ModalBody className='col-12 w-full'>
                    <div className='justify-center align-center mx-auto'>
                     { loginStatus !== 'idle' 
                        ? <Alert
                            className='text-tiny'
                            color={loginStatus === 'failed' ? 'danger' : 'success'}
                            variant='flat'
                            title={loginStatus === 'failed' ? 'Invalid username or password, please try again.' : 'Login Successful'}
                            size='sm' 
                            radius='full'/>
                        : undefined
                      }
                       
                    </div>
                      <Input
                        label="Username"
                        autocomplete='on'
                        isRequired
                        placeholder="Enter your username"
                        className='text-white'
                        variant="bordered"
                        value={unameValue}
                        onValueChange={setunameValue}
                        validate={(value) => { 
                          if (value == null || value ==  ''){
                              return 'Username cannot be empty.';
                          }else{
                            return null;
                          }}}
                        endContent={
                          <i className="fa-solid fa-user mb-1 pb-1"></i>
                        }
                      />
                      <Input
                        autocomplete="current-password"
                        isRequired
                        label="Password"
                        className='text-white'
                        placeholder="Enter your password"
                        type="password"
                        variant="bordered"
                        value={pwdValue}
                        onValueChange={setpwdValue}
                        validate={(value) => { 
                          if (value == null || value ==  ''){
                              return 'Password cannot be empty.';
                          }else{
                            return null;
                          }}}
                        endContent={
                          <i className="fa-solid fa-lock mb-1 pb-1"></i>
                          
                        }
                      />
                      <div className="flex py-2 px-1 justify-between">
                      <Checkbox
                      
                        isSelected={rememberUser}
                        onValueChange={setrememberUser}
                        classNames={{
                          label: "text-small",
                          }}
                      >
                          Remember me
                      </Checkbox>
                      <Link color="primary" href="#" size="sm" className='float-end'>
                          Forgot password?
                      </Link>
                      </div>
                  </ModalBody>
                  <ModalFooter className='flex jutsify-end float-end mx-auto'>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button variant='flat' color="primary" type='submit'>
                        Sign in
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
                          onPress={(e) => {location.href='/oauth/google'}}
                          className='bg-gradient-to-r from-zinc-600 to-blue-500 text-white shadow-lg'
                          startContent={<i className="fa-brands fa-google fa-lg"></i>}>
                          Sign in with Google
                      </Button>
                   
                </div>
                  <Spacer></Spacer>
                  <br></br>
                  <p className="text-center text-small">
                    Need to create an account?&nbsp;
                    <Link href="#" size="sm" onPress={onClose}>
                      Sign Up
                    </Link>
                  </p>
                </>
            )}
            </ModalContent>
        </Modal>

        </>
    );

};

export default LoginModal;