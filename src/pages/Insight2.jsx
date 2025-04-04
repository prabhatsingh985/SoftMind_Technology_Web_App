import React from "react";
import pgb from "../assets/pgb.png"; // Importing the image for the hero section

const ScalableAWSPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]  overflow-hidden p-4">
        <img
          src={pgb}
          alt="Hero"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          How to Build a Scalable Application up to 1 Million Users on AWS
        </h1>
        <p className="text-lg mb-4">
          At Softmind Technologies, we’re more than just a technology company—we’re innovators, 
          problem-solvers, and builders of cutting-edge solutions. If you’re passionate about technology 
          and looking for an environment that fosters growth, creativity, and collaboration, you’ve come 
          to the right place! Here is some random text about building scalable applications on AWS.
        </p>
        <p className="text-lg mb-4">
          We help clients scale seamlessly by leveraging modern cloud infrastructure, containerization, 
          and microservices. Our approach ensures that your application can handle traffic spikes and 
          deliver a smooth user experience. Whether you are a startup or an established enterprise, 
          our mission is to optimize performance and enhance reliability for your AWS-based solutions.
        </p>
        <p className="text-lg mb-8">
          Our team of experts uses the latest DevOps practices to automate deployments and manage 
          infrastructure as code. By integrating AWS services like EC2, S3, and Lambda, we ensure 
          your application is always ready for the next million users.
        </p>

        {/* Two Cards Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img
              src={pgb}
              alt="Scalable App"
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                How to Build a Scalable Application up to 1 Million Users on AWS
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Random text describing the topic. Learn how to effectively scale your AWS-based application.
              </p>
              <a href="#readmore" className="text-blue-600 font-medium">
                Read More →
              </a>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img
              src={pgb}
              alt="Cloud Tech"
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                How to Build a Scalable Application up to 1 Million Users on AWS
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Another random text about scaling in the cloud. Explore best practices and success stories.
              </p>
              <a href="#readmore" className="text-blue-600 font-medium">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScalableAWSPage;
