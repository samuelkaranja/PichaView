import React from "react";
import { useForm } from "react-hook-form";

type ContactFormInputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-lg py-8 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Enter a valid email",
              },
            })}
          />
          <p className="text-[12px] text-[#6c757d] pt-1">
            We'll never share your email with anyone else.
          </p>

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
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
            {...register("phone", {
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
            })}
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
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
            {...register("message", { required: "Message is required" })}
          ></textarea>

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
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
