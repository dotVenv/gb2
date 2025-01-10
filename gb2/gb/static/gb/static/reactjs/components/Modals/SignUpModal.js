
import React, { useState, useMemo } from "react";
import { signal } from "@preact/signals-react";
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
  } from "@nextui-org/react";
  


const signupdata = {
    email: signal('@'),
    uname: signal(''),
    password: signal(''),
    r_password: signal(''),
    pwd_match: signal(false),
    dob: signal(null),
    tos: signal(false),
}

const SignUpModal =  ({ isOpen, onOpenChange, handleSignupOpen }) => {

    const [action, setAction] = useState(null);
    
    /* form values */
    const [emailValue, setemailValue] = useState(signupdata.email.value);
    const [unameValue, setunameValue] = useState(signupdata.uname.value);
    const [passwordValue,setpasswordValue] = useState(signupdata.password.value);
    const [rpasswordValue,setrpasswordValue] = useState(signupdata.r_password.value);
    

    /* form values */

    /* validate email */
    const validateEmail = (evalue) => evalue.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    
    const invalidEmail = useMemo(() => {

        if (emailValue === "") return false;
        return validateEmail(emailValue) ? false : true;
        
    }, [emailValue]);
    /* validate email */

    /* handle submission */
    const onSubmit = (e) => {
        e.preventDefault();           
    };
     /* handle submission */


    return(
        <>
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}
          onClose={handleSignupOpen}>
            
          
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
                <Form
                    validationBehavior="native"
                    onReset={() => setAction("reset")}
                    onSubmit={onSubmit}
                    >
                <ModalBody>
                        <Input
                            isRequired
                            label="Email"
                            errorMessage="Please enter a valid email"
                            placeholder="Enter your email"
                            variant="bordered"
                            color={invalidEmail ? "danger" : "success"}
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
                            isRequired
                            label="Password"
                            autocomplete="current-password"
                            placeholder="Enter your password"
                            type="password"
                            variant="bordered"
                            value={passwordValue}
                            onValueChange={setpasswordValue}
                            validate={(value) => {
                                if (value.length < 7) {
                                return "Password must be at least 7 characters long";
                                }
                        
                                return null;
                            }}
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
                                signupdata.pwd_match.value = false;
                                return "Passwords must match!";
                                }
                                signupdata.pwd_match.value = true;
                                return null;
                            }}
                            endContent={
                                <i className="fa-solid fa-lock mb-1 pb-1"></i>
                                
                                }
                        />
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <DatePicker label={"Birth date"} variant='bordered' />
                        </div>
                        <div className="flex py-2 px-1 justify-between">
                        <Checkbox
                            classNames={{
                            label: "text-small",
                            }}
                        >
                            Agree to terms and conditions.
                        </Checkbox>
                        <Link color="primary" href="#" size="sm">
                            Have an account? Sign in here.
                        </Link>
                        </div>
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Close
                    </Button>
                    <Button type='submit' variant='flat' color="success">
                    Register 
                    </Button>
                </ModalFooter>
                </Form>
                <div className="flex items-center gap-4 py-2">
                  <Divider className="flex-1" />
                  <p className="shrink-0 text-tiny text-default-500">OR</p>
                  <Divider className="flex-1" />
                  </div>
                  <Spacer></Spacer>
                  <br></br>
                  <div className="flex flex-col gap-2 mb-1">

                    <Button
                      startContent={<i className="fa-brands fa-google fa-xl"></i>}
                      variant="bordered"
                    >
                      Sign up with Google
                    </Button>
                   
                   <br></br>
                   <Spacer></Spacer>
                  </div>
                 
                </>
            )}
            </ModalContent>
        </Modal>

        </>
    );

};

export default SignUpModal;