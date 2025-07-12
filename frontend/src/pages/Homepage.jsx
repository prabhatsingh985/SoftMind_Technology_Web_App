import React from 'react';
import Navbar from '../components/Navbar';
import homepageimage1 from "../assets/homepageimage1.jpg";
import HeroSection from '../components/HeroSection';
import homepageimage2 from "../assets/homepageimage2.png";  
import homepageimage3 from "../assets/homepageimage3.png";
import homepageimage4 from "../assets/homepageimage4.png";
import homepageimage5 from "../assets/homepageimage5.png";  
import homepageimage6 from "../assets/homepageimage6.png";  
import HomeResponsiveSection from '../components/HomeResponsiveSection';
import HomeServicesSection from '../components/HomeServicesSection';
import HomeContactForm from '../components/HomeContactForm';
import testmolsicons from "../assets/testimolsicons4.png";
import homepageimage7 from "../assets/homepageimage7.png";
import homepageimage8 from "../assets/homepageimage8.png";
import homepageimage9 from "../assets/homepageimage9.png";
import homepageimage10 from "../assets/homepageimage10.png";
import HomeBlogSection from '../components/HomeBlogSection';
import HomeClientTestimonials from '../components/HomeClientTestimonials';

const Homepage = () => {
  const reasons = [
    { icon: homepageimage4, title: 'Customized Solutions', text: 'We tailor our services to meet your unique business needs, aligning perfectly with your goals.' },
    { icon: homepageimage5, title: 'Quality & Reliability', text: 'Our QA processes ensure robust, scalable software that performs flawlessly.' },
    { icon: homepageimage6, title: 'Comprehensive Support', text: 'We provide ongoing maintenance and support to keep your systems running smoothly.' },
  ];

  const services = [
    { image: homepageimage10, icon: testmolsicons, title: 'Software Development' },
    { image: homepageimage10, icon: testmolsicons, title: 'Business Intelligence & Analytics' },
    { image: homepageimage10, icon: testmolsicons, title: 'Cloud Solutions' },
    { image: homepageimage10, icon: testmolsicons, title: 'Cybersecurity' },
  ];

  const visitors = [
    { number: '23+', label: 'Visitors' },
    { number: '45+', label: 'Projects' },
    { number: '45+', label: 'Active Clients' },
    { number: '45+', label: 'Experts' },
  ];

  const testimonials = [
    { img: homepageimage7, name: 'John Doe', role: 'Software Engineer', text: 'This company helped us transform our digital presence with cutting-edge software solutions.' },
    { img: homepageimage8, name: 'Jane Smith', role: 'UX Designer', text: 'Their design team delivered a seamless user experience. Highly recommended!' },
    { img: homepageimage9, name: 'Robert Brown', role: 'Marketing Head', text: 'Their SEO services boosted our rankings dramatically within months!' },
    { img: homepageimage10, name: 'Emily White', role: 'Project Manager', text: 'Excellent project delivery and timely communication throughout.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      <HeroSection />

      <main className="space-y-24 px-4 sm:px-6 lg:px-8">
        {/* Responsive Images Section (if needed) */}
        <HomeResponsiveSection />

        {/* Visitors Section */}
        <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl p-8 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            {visitors.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold">{item.number}</div>
                <div className="text-lg sm:text-xl font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="space-y-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
            Why Choose Us?
          </h2>
          <p className="mx-auto text-base sm:text-lg text-gray-700 max-w-2xl">
            An IT firm that keeps your IT running smoothly is like a plumber fixing your pipes;
            that’s exactly what a true MSP should do—seamlessly and reliably.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-purple-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <HomeServicesSection services={services} />

        {/* Testimonials Section */}
        <HomeClientTestimonials testimonials={testimonials} />

        {/* Blog Section */}
        <HomeBlogSection />

        {/* Contact Form */}
        <HomeContactForm />
      </main>
    </div>
  );
};

export default Homepage;
