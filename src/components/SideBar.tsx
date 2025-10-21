import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
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
  const [weddingsOpen, setWeddingsOpen] = useState(false);

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
        className={`fixed top-0 left-0 h-full w-70 bg-white shadow-md p-6 z-40 text-center 
          transform ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:block transition-transform duration-300`}
      >
        <Link to="/">
          <h1 className="text-3xl font-bold mb-8 mt-20">PichaView</h1>
        </Link>

        <nav className="flex flex-col gap-6 text-[#414042] text-[16px]">
          <Link to="/" className="hover:bg-gray-300 py-1">
            POTRAITS
          </Link>
          {/* Weddings Dropdown */}
          <div>
            <button
              onClick={() => setWeddingsOpen(!weddingsOpen)}
              className="w-full flex justify-center items-center gap-2 hover:bg-gray-300 py-1 rounded"
            >
              <span>WEDDINGS</span>
              {weddingsOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

            {/* Dropdown Links */}
            {weddingsOpen && (
              <div className="flex flex-col mt-2 text-md text-gray-600">
                <Link
                  to="/favorites"
                  className="hover:bg-gray-200 py-1 rounded"
                >
                  Favorites
                </Link>
                <Link to="/venues" className="hover:bg-gray-200 py-1 rounded">
                  Ceremony & Reception Venues
                </Link>
                <Link
                  to="/engagements"
                  className="hover:bg-gray-200 py-1 rounded"
                >
                  Engagements
                </Link>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:bg-gray-300 py-1">
            ABOUT
          </Link>
          <Link to="/contact" className="hover:bg-gray-300 py-1">
            CONTACT
          </Link>
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
