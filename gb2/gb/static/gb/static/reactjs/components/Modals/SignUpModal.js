
import React, { useState, useMemo, useContext } from "react";
import { signal } from "@preact/signals-react";
import UserContext from '../../connector/index';
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
    pwd_match: signal(false),
    dob: signal(null),
    tos: signal(false),
}

const SignUpModal =  ({ isOpen, onOpenChange, handleSignupOpen }) => {

    
    const usrcontext = useContext(UserContext);
    const [action, setAction] = useState(null);

    
    /* form values */
    const [emailValue, setemailValue] = useState('@');
    const [unameValue, setunameValue] = useState('');
    const [passwordValue,setpasswordValue] = useState('');
    const [rpasswordValue,setrpasswordValue] = useState('');
    const [errors, setErrors] = useState({});
    

    /* form values */

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
    const onSubmit = (e) => {
        
        e.preventDefault();        

            // Custom validation checks
        const newErrors = {};

        // Password validation
        const passwordError = getPasswordError(passwordValue);

        if (passwordError) {
        newErrors.password = passwordError;
        }

        // Username validation
        if (unameValue === "admin" || "test" || "user") {
        newErrors.name = "Nice try! Choose a different username";
        }

        if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
        }

        //submit data
        
        // Clear errors and submit
        setErrors({});
        
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
                        
                        <div className="flex py-2 px-1 justify-between">
                        <Checkbox
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

                        <div className="flex mx-auto justify-center align-center gap-2">
                    
                        <Button
                            startContent={<i className="fa-brands fa-google fa-xl"></i>}
                            variant="bordered"
                            radius='full'
                            size='sm'
                        >
                            Sign up with Google
                        </Button>
                        
                    </div>
                    
                </ModalBody>
                <ModalFooter className='flex jutsify-end float-end mx-auto'> 
                    <Button color="danger" variant="light" onPress={onClose}>
                    Close
                    </Button>
                    <Button type='submit' variant='flat' color="success">
                    Register 
                    </Button>
                </ModalFooter>
                </Form>
                    
            
                </>
            )}
            </ModalContent>
        </Modal>

        </>
    );

};

export default SignUpModal;