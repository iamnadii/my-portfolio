import React from 'react';

const Projects = () => {
    return (
        <div
            className="flex flex-col px-2 sm:px-0 max-w-[1024px] mx-auto"
            id="projects"
        >
            <div className="lg:text-left text-center">
                <h3 className="text-[#147efb] font-bold uppercase text-md mb-4">
                    portfolio
                </h3>
                <h4 className="text-2xl font-bold mb-16">
                    Each project is a unique piece of development 🧩
                </h4>
            </div>
            <div className="flex flex-col items-center gap-10">
                <div className="bg-[#0B0E11] w-fit py-7 px-5 rounded-2xl flex gap-14 flex-col lg:flex-row">
                    <div className="sm:h-[24rem] sm:w-[30rem] h-[12rem] w:[28rem] overflow-hidden rounded-2xl">
                        <img
                            src="/assets/images/promptopia.png"
                            alt=""
                            className="h-auto"
                            // hover:translate-y-[-100%] transition-transform duration-[60s] ease-in-out
                        />
                    </div>
                    <div className="w-[16rem] sm:w-[22rem] md:w-[25rem] flex flex-col text-center justify-center h-auto my-0 mx-auto">
                        <div>
                            <h3 className="font-bold uppercase text-lg mb-6">
                                Promptopia 📝
                            </h3>
                            <p className="text-[#b3b3b3] text-[1.25rem] leading-[1.5] font-medium mb-6">
                                Promptopia is a revolutionary open-source AI
                                tool designed for the modern world. With its
                                advanced capabilities, users can explore,
                                generate, and exchange creative prompts
                                effortlessly. It empowers you to unlock your
                                imagination and unleash your creativity.
                            </p>
                            <div className="flex justify-center gap-2 font-bold">
                                <p className="text-[#181A20] bg-white p-2 rounded-sm">
                                    Nextjs
                                </p>
                                <p className="text-[#181A20] bg-white p-2 rounded-sm">
                                    Tailwind CSS
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0B0E11] w-fit py-7 px-5 rounded-2xl flex gap-14 flex-col lg:flex-row-reverse">
                    <div className="sm:h-[24rem] sm:w-[30rem] h-[12rem] w:[28rem] overflow-hidden rounded-2xl">
                        <img
                            src="/assets/images/todo.png"
                            alt=""
                            className="h-auto"
                            // hover:translate-y-[-100%] transition-transform duration-[60s] ease-in-out
                        />
                    </div>
                    <div className="w-[16rem] sm:w-[22rem] md:w-[25rem] flex flex-col text-center justify-center h-auto my-0 mx-auto">
                        <div>
                            <h3 className="font-bold uppercase text-lg mb-6">
                                Todo App 💻
                            </h3>
                            <p className="text-[#b3b3b3] text-[1.25rem] leading-[1.5] font-medium mb-6">
                                The TodoApp is a versatile and intuitive task
                                management tool that helps you stay organized
                                and productive. With its user-friendly interface
                                and powerful features, you can easily create,
                                prioritize, and track your tasks. Stay on top of
                                your to-do list and accomplish your goals with
                                the TodoApp.
                            </p>
                            <div className="flex justify-center gap-2 font-bold">
                                <p className="text-[#181A20] bg-white p-2 rounded-sm">
                                    Reactjs
                                </p>
                                <p className="text-[#181A20] bg-white p-2 rounded-sm">
                                    Nodejs
                                </p>
                                <p className="text-[#181A20] bg-white p-2 rounded-sm">
                                    MongoDB
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
