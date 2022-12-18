import React from "react";

const AboutMe = () => {

    const experiences = [
        {
            "id": 1,
            "time": "February 2022 - February 2023",
            "title": "OUTSOURCE IOS DEVELOPER AT ANTERAJA",
            "location": "Jakarta Indonesia",
            "description": "Maintain exisitng customer side app, develop and deliver scalable features, and create widget."
        },
        {
            "id": 2,
            "time": "February 2021 - December 2021",
            "title": "IOS DEVELOPER INTERN AT APPLE DEVELOPER ACADEMY",
            "location": "Jakarta Indonesia",
            "description": "Collaborated with 5 - 7 people in a group to make the impactful app and learn about product development, design, and iOS app development."
        },
    ];

    const education = [
        {
            "id": 1,
            "schoolName": "Bina Nusantara University",
            "time": "2018-2022",
            "mark": 3.75
        },
        {
            "id": 2,
            "schoolName": "Apple Developer Academy",
            "time": "March 2021 - December 2021",
        }
    ];

    return (
        <section id="aboutme" className="v-screen h-full aboutme py-24">
            <div className="container  mx-auto">
                
                <div className="mx-2 text-white ">
                    <span className="flex text-3xl xs:text-4xl md:text-5xl mb-8">
                        <i className="fas fa-user pr-7"></i>
                        <h1 className="font-bold">ABOUT ME</h1>
                    </span>
                    
                    <div className=" px-4 py-8 backdrop-blur-md bg-white/30  rounded-lg shadow-lg mb-16">
                        <p className="text-base xs:text-lg md:text-xl">
                        He graduated from Bina Nusantara University, majoring in Computer Science. He also has 2 years of experience developing iOS apps. He loves to collaborate with people and explore new things, especially in mobile technology. He is not only good at technical skills, but he is also good at communication, collaboration, and problem- solving. He always searches for room for improvement and is highly motivated to learn and improve his knowledge and skills..
                        </p>
                    </div>
                    
                    <div className="mb-16">
                        <span className="flex text-3xl xs:text-4xl md:text-5xl mb-8">
                            <i className="fas fa-briefcase pr-7"></i>
                            <h1 className="font-bold">Experience</h1>
                        </span>

                        <ol className="relative border-l border-white">                  
                            {
                                experiences.map(data => {
                                    return(
                                        <li key={data.id} className="mb-10 ml-4">
                                            <div className="absolute w-3 h-3 bg-cyan rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-100">{data.time}</time>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{data.title}</h3>
                                            <p className=" text-base font-normal text-gray-200">{data.location}</p>
                                            <p className="mb-4 text-base font-normal text-gray-200">{data.description}</p>
                                        </li>
                                    );
                                })
                            }
                        </ol>
                    </div>
                   

                   <div>
                        <span className="flex text-3xl xs:text-4xl md:text-5xl mb-8">
                            <i className="fas fa-graduation-cap pr-7"></i>
                            <h1 className="font-bold">EDUCATION</h1>
                        </span>

                        <ol className="relative border-l border-white">
                            {
                                education.map(data => {
                                    return (
                                        <li key={data.id} className="mb-10 ml-4">
                                        <div className="absolute w-3 h-3 bg-cyan rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-100">{data.time}</time>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{data.schoolName}</h3>
                                        <p className=" text-base font-normal text-gray-200">{data.time}</p>
                                        <p className="mb-4 text-base font-normal text-gray-200">{data.mark}</p>
                                    </li>

                                    );
                                })
                            }

                        </ol>
                   </div>
                </div>
                
            </div>
        </section>
    );

};

export default AboutMe;