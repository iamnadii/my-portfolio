import React from 'react';
import { ImLocation } from 'react-icons/im';
import { AiFillMail } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className="text-[#0B0E11] bg-white py-16" id="contact">
            <div className="max-w-[1024px] mx-auto my-0 px-4 lg:px-[1.20rem]">
                <div className="lg:text-left text-center">
                    <h3 className="text-[#147efb] font-bold uppercase text-md mb-4">
                        CONTACT
                    </h3>
                    <h4 className="text-2xl font-bold mb-16">
                        Don&apos;t be shy! Hit me up! 👇
                    </h4>
                </div>
                <div className="flex items-center sm:flex-row flex-col gap-10 sm:gap-20">
                    <div className="flex items-center justify-center flex-col sm:flex-row gap-10">
                        <span className="text-[2.5rem] text-[#147efb] w-[5rem] h-[5rem] flex items-center justify-center rounded-full shadow-lg">
                            <ImLocation />
                        </span>
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="text-[1.25rem] font-bold">
                                Location
                            </h3>
                            <p className="text-[1.10rem] hover:text-[#147efb] cursor-pointer">
                                Lahore, Pakistan
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col sm:flex-row gap-10">
                        <span className="text-[2.5rem] text-[#147efb] w-[5rem] h-[5rem] flex items-center justify-center rounded-full shadow-lg">
                            <AiFillMail />
                        </span>
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="text-[1.25rem] font-bold">Mail</h3>
                            <a
                                href="mailto: muhammadnadeem.1596@gmail.com"
                                target="_blank"
                                className="text-[1.10rem] hover:text-[#147efb] cursor-pointer"
                            >
                                muhammadnadeem.1596@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
