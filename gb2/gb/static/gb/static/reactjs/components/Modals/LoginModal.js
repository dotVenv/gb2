

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
  } from "@nextui-org/react";


const LoginModal = ({ isOpen, onOpenChange, handleLoginOpen }) => {


    return(
        <>
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}
          onClose={handleLoginOpen}>
            
          
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                <ModalBody>
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
                    <Link color="primary" href="#" size="sm">
                        Forgot password?
                    </Link>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Close
                    </Button>
                    <Button variant='flat' color="primary" onPress={onClose}>
                    Sign in
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>

        </>
    );

};

export default LoginModal;