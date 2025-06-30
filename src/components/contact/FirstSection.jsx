"use client";

import { useState } from "react";

export default function FirstSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Form */}
      <div className="bg-white shadow p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Send Your <span className="text-green-600 font-bold">Message</span>
        </h2>
        <p className="text-gray-500 mb-6">
          Feel free to contact with us. We are ready to assist you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-100 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-100 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 bg-gray-100 rounded"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 bg-gray-100 rounded h-32"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9824790470194!2d-73.95949338459203!3d40.7830608793246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f8c306eb91%3A0x1b87f3f3e4ce8bb7!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sus!4v1651377781290!5m2!1sen!2sus"
          className="w-full h-full rounded-lg border-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
