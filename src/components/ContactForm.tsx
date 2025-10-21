import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-lg py-8">
      <form className="space-y-5">
        {/* Full Name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-md font-light text-gray-700 mb-2"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className="border border-gray-300 rounded-sm px-3 py-2 focus:ring-2 focus:ring-green-200 focus:outline-none"
            required
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-light text-gray-700 mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-sm px-3 py-2 focus:ring-2 focus:ring-green-200 focus:outline-none"
            required
          />
          <p className="text-[12px] text-[#6c757d] pt-1">
            We'll never share your email with anyone else.
          </p>
        </div>

        {/* Phone number */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-sm font-light text-gray-700 mb-2"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="border border-gray-300 rounded-sm px-3 py-2 focus:ring-2 focus:ring-green-200 focus:outline-none"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-light text-gray-700 mb-2"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message..."
            className="border border-gray-300 rounded-sm px-3 py-2 focus:ring-2 focus:ring-green-200 focus:outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2.5 rounded-sm hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
