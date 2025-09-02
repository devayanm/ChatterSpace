import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/auth/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json(); // fetch ke liye yeh zaruri hai

    if (res.ok) {
      setStatus({ success: true, message: data.success });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({ success: false, message: data.error || "Something went wrong!" });
    }
  } catch (error) {
    console.error("Error:", error);
    setStatus({
      success: false,
      message: "Something went wrong!",
    });
  }
};


  return (
    <>
     <motion.div className="p-8 bg-gradient-to-br from-gray-800 via-purple-600 to-gray-800 min-h-screen flex flex-col items-center text-white space-y-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md mt-12"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Contact Us -:</h2>

        {status && (
          <p
            className={`text-center mb-4 ${
              status.success ? "text-green-500" : "text-red-500"
            }`}
          >
            {status.message}
          </p>
        )}

        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:ring"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Send
        </button>
      </form>
    </motion.div>
    </>
  );
};

export default ContactForm;
