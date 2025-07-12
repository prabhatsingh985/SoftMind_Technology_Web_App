import React, { useState } from 'react';
import arrow from '../assets/Vector 15.png'; // Adjust the path as necessary
import img1 from '../assets/rb_939 1.png'; // Adjust the path as necessary

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    career: 'Internship',
    technologies: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);
    try {                           
      const resp = await fetch(`https://softmind-technology-web-app.onrender.com/api/send/Applypagecontact`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', career: 'Internship', technologies: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-[95%] w-full mx-auto mt-6 p-4 sm:p-6 overflow-hidden">
      {/* Heading & Descriptions */}
      <div
        className="p-4 sm:p-6 rounded-[33px] shadow-md bg-[#F1F4F9] w-full max-w-[1200px] mx-auto"
        style={{ boxShadow: '1px 1px 0.3px 1px #00000040' }}
      >
        <h1 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 flex items-center gap-2" style={{ background: 'linear-gradient(0deg, #6770F3 0%, #8346F8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Apply Now
          <img src={arrow} alt="Arrow" className="w-5 sm:w-6 h-5 sm:h-6" />
        </h1>
        <p className="hidden md:block text-base text-black max-w-[1000px] leading-relaxed">
          Welcome to SoftMind Technologies, where innovation meets expertise! Established with a vision to transform aspiring individuals into tech-savvy professionals, we bridge the gap between education and industry with comprehensive internship programs in Web, Cloud, AI, and more.
        </p>
        <p className="block md:hidden text-sm text-black leading-relaxed">
          SoftMind empowers you with real-world internships and expert training in Web, AI, and Cloud. Start building your future today!
        </p>
      </div>

      {/* Form & Image Section */}
      <div className="flex flex-col md:flex-row items-start mt-6 sm:mt-8 gap-6 sm:gap-8">
        {/* Illustration */}
        <div className="w-full md:w-1/2 flex justify-center select-none pointer-events-none" tabIndex={-1}>
          <img src={img1} alt="Illustration" className="w-full max-w-[350px] sm:max-w-[450px] h-auto object-contain select-none" draggable={false} />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 bg-[#F1F4F9] p-4 sm:p-6 rounded-2xl shadow-md border border-gray-300">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-black">Contact Information</h3>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="flex flex-col sm:flex-row gap-3">
              <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="First Name" className="w-full sm:w-1/2 p-2 sm:p-3 border border-gray-300 rounded-md bg-white outline-none text-sm" />
              <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Last Name" className="w-full sm:w-1/2 p-2 sm:p-3 border border-gray-300 rounded-md bg-white outline-none text-sm" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email ID" className="w-full sm:w-1/2 p-2 sm:p-3 border border-gray-300 rounded-md bg-white outline-none text-sm" />
              <input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Phone Number" className="w-full sm:w-1/2 p-2 sm:p-3 border border-gray-300 rounded-md bg-white outline-none text-sm" />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-black text-sm">Career Opportunity</label>
              <div className="flex flex-col xs:flex-row gap-3">
                <label className="flex items-center gap-2 text-black text-sm">
                  <input type="radio" name="career" value="Internship" checked={formData.career === 'Internship'} onChange={handleChange} className="accent-[#8346F8]" />
                  Internship
                </label>
                <label className="flex items-center gap-2 text-black text-sm">
                  <input type="radio" name="career" value="Job Requirement" checked={formData.career === 'Job Requirement'} onChange={handleChange} className="accent-[#8346F8]" />
                  Job Requirement
                </label>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-2 text-black text-sm">Technologies</label>
              <input name="technologies" value={formData.technologies} onChange={handleChange} type="text" placeholder="Select the Technologies" className="w-full p-2 sm:p-3 border border-gray-300 rounded-md bg-white outline-none text-sm" />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-black text-sm">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your Text" className="w-full p-2 sm:p-3 border border-gray-300 rounded-md bg-white min-h-[100px] outline-none text-sm" rows={4} />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="px-5 py-2 sm:px-6 sm:py-3 rounded-full text-white font-semibold text-sm sm:text-base" style={{ background: 'linear-gradient(90deg, #6770F3 0%, #8346F8 100%)' }}>
                Submit
              </button>
            </div>

            {status === 'success' && <p className="mt-2 text-green-600">Application submitted successfully!</p>}
            {status === 'error' && <p className="mt-2 text-red-600">Submission failed, please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
