import React from "react";
import isp from "../assets/isp.jpg";
import lg1 from "../assets/lg1.png"; // Logo

const Career = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-[185.93px] font-extrabold leading-[1] tracking-[5%] text-transparent bg-clip-text bg-gradient-to-t from-[#6770F3] to-[#8346F8]">
                    Join Our Team
                </h1>
                <h2 className="text-2xl font-semibold text-[#6770F3] mt-4">
                    Build the Future with Us!
                </h2>
                <p className="text-lg text-gray-600 mt-6 max-w-4xl">
                    At Softmind Technologies, we’re more than just a technology company—we’re innovators, problem-solvers, and builders of cutting-edge solutions. If you’re passionate about technology and looking for an environment that fosters growth, creativity, and collaboration, you’ve come to the right place!
                </p>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center h-screen px-10">
                <img
                    src={isp}
                    alt="Team Collaboration"
                    className="w-[1562px] h-[616px] rounded-[37px] object-cover"
                />
            </div>

            {/* Career Opportunities Section */}
            <div>
                <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#6770F3] to-[#8346F8]">
                    Career Opportunity
                </h2>
                {/* Flex container for side by side cards */}
                <div className="flex flex-wrap gap-8 px-10 mt-10 justify-center">
                    {/* Card 1 */}
                    <div className="bg-purple-100 p-6 rounded-lg shadow-lg w-full md:w-auto">
                        {/* Logo and Title */}
                        <div className="flex items-center space-x-3">
                            <img src={lg1} alt="Logo" className="w-10 h-10" />
                            <h3 className="text-xl font-bold">Cloud Computing</h3>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                            Cloud Computing (AWS, Azure, GCP)
                        </p>
                        <p className="mt-4 text-gray-800">
                            📍 Delhi <br />
                            ⏳ 3 Months <br />
                            💼 Unpaid Internship
                        </p>
                        <div className="mt-4">
                            <button className="bg-black text-white px-4 py-2 rounded-lg">
                                Apply →
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-full md:w-auto">
                        {/* Logo and Title */}
                        <div className="flex items-center space-x-3">
                            <img src={lg1} alt="Logo" className="w-10 h-10" />
                            <h3 className="text-xl font-bold">Web Development</h3>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                            Frontend &amp; Backend Development
                        </p>
                        <p className="mt-4 text-gray-800">
                            📍 Bangalore <br />
                            ⏳ 6 Months <br />
                            💼 Paid Internship
                        </p>
                        <div className="mt-4">
                            <button className="bg-black text-white px-4 py-2 rounded-lg">
                                Apply →
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-pink-100 p-6 rounded-lg shadow-lg w-full md:w-auto">
                        {/* Logo and Title */}
                        <div className="flex items-center space-x-3">
                            <img src={lg1} alt="Logo" className="w-10 h-10" />
                            <h3 className="text-xl font-bold">Data Science</h3>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                            Machine Learning &amp; AI
                        </p>
                        <p className="mt-4 text-gray-800">
                            📍 Hyderabad <br />
                            ⏳ 4 Months <br />
                            💼 Paid Internship
                        </p>
                        <div className="mt-4">
                            <button className="bg-black text-white px-4 py-2 rounded-lg">
                                Apply →
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-purple-700 text-white mt-20 py-10">
                <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Section */}
                    <div>
                        <h2 className="text-4xl font-bold">Get in touch</h2>
                        <p className="mt-4">
                            📞 7391265552 <br />
                            ✉ info@softmindtechnologies.com <br />
                            📍 Softmind Technologies, New Delhi - 110074
                        </p>
                    </div>
                    {/* Right Section */}
                    <div className="bg-gray-100 text-black p-10 rounded-lg shadow-lg">
                        <h2 className="text-4xl font-bold">Apply Now</h2>
                        <h3 className="text-2xl font-semibold">Contact Information</h3>
                        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="p-2 rounded-lg border border-gray-300"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="p-2 rounded-lg border border-gray-300"
                            />
                            <input
                                type="email"
                                placeholder="Your Email ID"
                                className="p-2 rounded-lg border border-gray-300"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="p-2 rounded-lg border border-gray-300"
                            />
                            <input
                                type="text"
                                placeholder="Position"
                                className="col-span-2 p-2 rounded-lg border border-gray-300"
                            />
                            <input
                                type="text"
                                placeholder="CV (URL)"
                                className="col-span-2 p-2 rounded-lg border border-gray-300"
                            />
                            <textarea
                                placeholder="Message"
                                className="col-span-2 p-2 rounded-lg border border-gray-300"
                                rows="4"
                            ></textarea>
                            <button
                                type="submit"
                                className="col-span-2 bg-black text-white px-4 py-2 rounded-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
