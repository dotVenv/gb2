import React from "react";

import { Spacer, Form } from "@nextui-org/react";
import Footer from "../Footer/Footer";

const ContactForm = () => {
    const [action, setAction] = React.useState(null);

    return(
        <>
        
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            >
                <div
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
                <p className="mt-2 text-lg/8 text-gray-600">Contact us via email and we will reach back out to you about your inquiry.</p>
            </div>
            <div className='flex justify-center align-center items-center mx-auto'>
            <Form  
                className="w-full max-w-xs flex flex-col gap-4 justify-center align-center"
                validationBehavior="native"
                onReset={() => setAction("reset")}
                onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));
        
                setAction(`submit ${JSON.stringify(data)}`);
                }}>
            
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                    First name
                    </label>
                    <div className="mt-2.5">
                    <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                    Last name
                    </label>
                    <div className="mt-2.5">
                    <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Email
                    </label>
                    <div className="mt-2.5">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                    Message
                    </label>
                    <div className="mt-2.5">
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        defaultValue={''}
                    />
                    </div>
                </div>
                
                </div>
                <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Send Email
                </button>
                </div>
            </Form>
            </div>
          <Footer></Footer>
        </>
    );
};

export default ContactForm;