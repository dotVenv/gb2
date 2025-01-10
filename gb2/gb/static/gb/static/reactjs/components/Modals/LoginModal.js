

import React from "react";
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
    Form
  } from "@nextui-org/react";


const LoginModal = ({ isOpen, onOpenChange, handleLoginOpen }) => {


     /* handle submission */
    const onSubmit = (e) => {
      e.preventDefault();           
      };
   /* handle submission */

   
    return(
        <>
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}
          onClose={handleLoginOpen}>
            
          
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                <Form
                  className='col-12 w-full'
                  validationBehavior="native"
                  onReset={() => setAction("reset")}
                  onSubmit={onSubmit}
                 >
                  <ModalBody className='col-12 w-full'>
                      <Input
                      endContent={
                        <i className="fa-solid fa-user mb-1 pb-1"></i>
                      }
                      label="Username"
                      placeholder="Enter your username"
                      variant="bordered"
                      />
                      <Input
                      endContent={
                        <i className="fa-solid fa-lock mb-1 pb-1"></i>
                        
                      }
                      autocomplete="off"
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      variant="bordered"
                      />
                      <div className="flex py-2 px-1 justify-between">
                      <Checkbox
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
                  <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                      Close
                      </Button>
                      <Button variant='flat' color="primary" type='submit'>
                      Sign in
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

export default LoginModal;