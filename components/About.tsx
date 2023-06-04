import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className="bg-[#0B0E11] py-16" id="about">
            <div
                className="max-w-[1024px] mx-auto my-0 lg:text-left text-center px-4 lg:px-[1.20rem]"
                // className="max-w-[1150px] my-0 mx-auto grid items-center justify-center lg:grid-cols-2 grid-cols-1 lg:text-left text-center px-5 sm:px-0"
            >
                {/* <div className="sm:h-[23rem] sm:w-[25rem] h-[15rem] w-[17rem] overflow-hidden bg-white rounded-[1.7rem] lg:mb-0 mb-10  flex self-center justify-self-center md:block">
                    <Image
                        src="/assets/images/about.jpeg"
                        alt="office-image"
                        width={700}
                        height={400}
                        className="sm:h-[23rem] h-[17rem]"
                    />
                </div> */}
                <div className="flex flex-col gap-5 my-0 mx-auto">
                    <h3 className="text-[#147efb] font-bold uppercase text-md">
                        About Me
                    </h3>
                    <h4 className="text-2xl font-bold">
                        A dedicated Front-end Developer <br />
                        based in Lahore, Pakistan 📍
                    </h4>
                    <p className="text-2xl px-5 sm:px-0 text-[#b3b3b3]">
                        As a Front-end Developer, I possess an impressive
                        arsenal of skills in HTML, CSS, JavaScript, Tailwind,
                        SCSS and Reactjs, Nextjs. I excel in designing and
                        maintaining responsive websites that offer a smooth user
                        experience. My expertise lies in crafting dynamic,
                        engaging interfaces through writing clean and optimized
                        code and utilizing cutting-edge development tools and
                        techniques. I am also a team player who thrives in
                        collaborating with cross-functional teams to produce
                        outstanding web applications.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
