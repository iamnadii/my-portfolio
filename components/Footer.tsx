import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="flex flex-wrap text-center justify-center gap-6 sm:gap-0 items-center sm:justify-between p-10 bg-[#0B0E11] text-white">
            <h3 className="text-[1.25rem] font-bold">
                Copyright &copy; 2023. All rights are reserved
            </h3>
            <div className="flex gap-5 md:ml-1 text-3xl">
                <a
                    href="https://www.linkedin.com/in/mnadeemdev/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a href="https://github.com/iamnadii" target="_blank">
                    <BsGithub />
                </a>
            </div>
        </div>
    );
};

export default Footer;
