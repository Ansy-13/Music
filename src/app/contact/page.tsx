"use client"

import { Card, CardContent } from '@/components/ui/card';
import React, { useState } from 'react';

function Contact(){
    const [message, setMessage] = useState("");

    // Function that will be called when the button is clicked
    const handleClick = () => {
        console.log("Button clicked!");
        setMessage("Thank you for sending us a message!");
    }
    return(
        <main className='mt-52 '>
    <section className="p-4 text-center">
        <h1 className="font-bold text-3xl">Contact Us</h1>
        <p className="w-[200px] ml-auto mr-auto mt-3 md:w-[390px]">Any question or remarks? Just write a message</p>
    </section>  

    <section className="flex flex-col items-center md:flex-row md:justify-center md:items-start mt-6">
        <Card className=" h-auto md:h-[667px] md:w-[1196px] w-full">
            <CardContent className="flex flex-col md:flex-row">
                
                {/* Contact Information Section */}
                <div className="bg-black w-full h-[430px] rounded-xl p-4 md:w-1/2">
                    <h1 className="text-white text-center text-2xl md:text-start">Contact Information</h1>
                    <p className="text-gray-400 text-center mt-4 md:text-start">Say something to start a Live Chat</p>
                    <div className="flex flex-col items-center mt-6 md:items-start">
                       
                    </div>
                </div>

                {/* Form Section */}
                <div className="p-4 mt-6 md:mt-0 md:ml-6 w-full md:w-1/2">
                    <section>
                        <h1 className="font-serif font-semibold ml-2">Full Name</h1>    
                        <input type="text" placeholder="|" className="w-full rounded-md p-3 mt-4 shadow-sm" />
                        
                        <h1 className="font-serif font-semibold mt-4 ml-2">Last Name</h1>
                        <input type="text" placeholder="|" className="w-full rounded-md p-3 mt-4 shadow-sm" />
                        
                        <h1 className="font-serif font-semibold mt-4 ml-2">Enter Email</h1>
                        <input type="email" placeholder="|" className="w-full rounded-md p-3 mt-4 shadow-sm" />
                        
                        <h1 className="font-serif font-semibold mt-4 ml-2">Phone Number</h1>
                        <input type="tel" placeholder="+92 277896541" className="w-full rounded-md p-3 mt-4 shadow-sm" />
                        
                        <h1 className="font-serif font-semibold mt-6 ml-2">Write your Message</h1>
                        <textarea placeholder="You can write your message here" className="w-full rounded-md p-3 mt-4 shadow-sm" />

                        <button onClick={handleClick} className="bg-black text-white rounded-md p-2 w-full mt-6 transition-colors">Send message</button>

                        {/* Message displayed after button click */}
                        {message && <p className="mt-4 text-blue-500">{message}</p>}
                    </section>
                </div>

            </CardContent>
        </Card>
    </section>
</main>

    )
}

export default Contact
