import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-white rounded shadow"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md p-6 z-40 text-center 
          transform ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:block transition-transform duration-300`}
      >
        <h1 className="text-2xl font-bold mb-8 mt-20">LOGO</h1>

        <nav className="flex flex-col gap-6 text-gray-800">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        <div className="mt-8 flex flex-col gap-8">
          <a href="#">
            <FaFacebook size={20} color="blue" className="mx-auto" />
          </a>
          <a href="#">
            <FaYoutube size={20} color="red" className="mx-auto" />
          </a>
          <a href="#">
            <FaInstagram size={20} color="purple" className="mx-auto" />
          </a>
          <a href="#">
            <FaTwitter size={20} color="blue" className="mx-auto" />
          </a>
          <a href="mailto:samuelkaranja007@gmail.com">
            <FaEnvelope size={20} color="orangered" className="mx-auto" />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
