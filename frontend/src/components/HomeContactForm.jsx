import React, { useState } from "react";

export default function HomeContactForm() {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [cvUrl, setCvUrl] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleAPI = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const payload = {
      firstName,
      lastName,
      email,
      phone,
      position,
      cvUrl,
      message,
    };

    try {
      const res = await fetch(`https://softmind-technology-web-app.onrender.com/api/send/homepagecontact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to send form");
      }

      // Optionally, handle success response
      setSuccess(true);
      // Clear the form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPosition("");
      setCvUrl("");
      setMessage("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-purple-700 text-white mt-20 py-10 rounded-3xl m-2">
      <div className="container mx-auto px-10 grid grid-cols-1 [@media(min-width:700px)]:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in touch with our support team
          </h2>
          <h6 className="text-base md:text-lg font-light">
            Please fill up the form for more enquiries
          </h6>
          <p className="mt-4 text-base">
            📞 7321063552 <br />
            ✉ info@softmindtechnologies.com <br />
            📍 Softmind Technologies, New Delhi - 110074
          </p>
        </div>
        {/* Right Section */}
        <div className="bg-gray-100 text-black p-6 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold">Apply Now</h2>
          <h3 className="text-xl md:text-2xl font-semibold mt-2">
            Contact Information
          </h3>
          {error && <p className="text-red-600 mt-2">Error: {error}</p>}
          {success && <p className="text-green-600 mt-2">Form submitted successfully!</p>}
          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); handleAPI(); }}>
            <input
              type="text"
              placeholder="First Name"
              className="p-2 rounded-lg border border-gray-300"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 rounded-lg border border-gray-300"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email ID"
              className="p-2 rounded-lg border border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-2 rounded-lg border border-gray-300"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Position"
              className="col-span-1 md:col-span-2 p-2 rounded-lg border border-gray-300"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
            <input
              type="url"
              placeholder="CV (URL)"
              className="col-span-1 md:col-span-2 p-2 rounded-lg border border-gray-300"
              value={cvUrl}
              onChange={(e) => setCvUrl(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="col-span-1 md:col-span-2 p-2 rounded-lg border border-gray-300"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-black text-white px-4 py-2 rounded-lg"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
