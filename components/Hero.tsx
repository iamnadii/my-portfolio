import Image from 'next/image';
import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Hero = () => {
    return (
        <div className="flex flex-col items-center gap-10" id="home">
            <div className="flex items-center justify-center lg:gap-32 gap-7 text-center md:text-left flex-wrap-reverse mt-12">
                <div className="flex flex-col gap-10 max-w-md items-center md:items-start">
                    <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold">
                        Front-End Developer
                    </h1>
                    <p className="text-2xl md:ml-1 px-5 sm:px-0 text-[#b3b3b3]">
                        Hi, I&apos;m Muhammad Nadeem. A passionate Front-end
                        Developer based in Lahore, Pakistan. 📍
                    </p>
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
                <div className="pt-14 overflow-hidden bg-gray-50 leading-5 md:w-[27rem] md:h-[27rem] sm:w-[25rem] sm:h-[25rem] w-[18rem] h-[18rem] rounded-full flex justify-center items-center mt-8">
                    <Image
                        src="/assets/images/dp.jpeg"
                        alt="profile-picture"
                        width={530}
                        height={50}
                    />
                </div>
            </div>
            <div className="text-lg lg:flex-row flex flex-col items-center flex-wrap">
                <span className="lg:border-r-2 lg:border-b-0 border-b-2 lg:pr-5 lg:mr-5 lg:mb-0 lg:pb-0 pb-5 mb-5">
                    Tech Stack
                </span>
                <ul className="skills_icons">
                    <li>
                        <Image
                            src="/assets/icons/html.svg"
                            alt="html-icon"
                            width={40}
                            height={20}
                        />
                    </li>
                    <li>
                        <Image
                            src="/assets/icons/css.svg"
                            alt="css-icon"
                            width={40}
                            height={20}
                        />
                    </li>
                    <li>
                        <Image
                            src="/assets/icons/js.svg"
                            alt="js-icon"
                            width={40}
                            height={20}
                        />
                    </li>
                    <li>
                        <Image
                            src="/assets/icons/tailwind.svg"
                            alt="tailwind-icon"
                            width={40}
                            height={20}
                        />
                    </li>
                    <li>
                        <Image
                            src="/assets/icons/react.svg"
                            alt="react-icon"
                            width={40}
                            height={20}
                        />
                    </li>
                    <li>
                        <Image
                            src="/assets/icons/next.svg"
                            alt="react-icon"
                            width={40}
                            height={20}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hero;
