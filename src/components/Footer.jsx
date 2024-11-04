import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";

const Footer = ({ isMobile }) => {
  const mobileView = true;
  return (
    <div className="w-full bg-slate-800 flex flex-col justify-start gap-3 h-full pb-20">
      <div
        className={`flex justify-center ${
          mobileView ? "text-3xl" : "text-5xl"
        } text-white gap-3 p-3`}
      >
        <FaTwitterSquare />
        <FaLinkedin />
        <FaYoutubeSquare />
      </div>
      <div
        className={`flex ${
          isMobile ? "flex-col" : ""
        } justify-center items-center gap-4 text-white font-medium py-3`}
      >
        <div>Sign up for our newsletter</div>
        <input
          type="email"
          className={`${
            isMobile ? "w-[70%]" : "w-[40%]"
          } rounded-lg h-10 bg-white text-black px-2`}
        />
        <button className="px-2 py-1 border-white border-2 rounded-md">
          Subscribe
        </button>
      </div>
      {!isMobile ? (
        <div className="text-slate-400 flex justify-evenly py-6">
          <div>
            <div className="text-white text-xl font-bold">MSJ Membership</div>
            <ul className="flex flex-col gap-1 py-3">
              <li>The Journal Collection</li>
              <li>Subscription Options</li>
              <li>Why Subscribe?</li>
              <li>Corporate Subscription</li>
              <li>MSJ Live</li>
              <li>Commercial Partnerships</li>
            </ul>
          </div>
          <div className="border-l-2 border-gray-400 pl-2">
            <div className="text-white text-xl font-bold">Customer Service</div>
            <ul className="flex flex-col gap-1 py-3">
              <li>Customer Center</li>
              <li>Contact Us</li>
              <li>Cancel My Subscription</li>
            </ul>
          </div>
          <div className="border-l-2 border-gray-400 pl-2">
            <div className="text-white text-xl font-bold">Tools & Features</div>
            <ul className="flex flex-col gap-1 py-3">
              <li>Newsletters & Alerts</li>
              <li>Guides</li>
              <li>Topics</li>
              <li>Topics</li>
              <li>RSS Feeds</li>
              <li>Video Center</li>
              <li>Watchlist</li>
              <li>Visual Stories</li>
            </ul>
          </div>
          <div className="border-l-2 border-gray-400 pl-2">
            <div className="text-white text-xl font-bold">Ads</div>
            <ul className="flex flex-col gap-1 py-3">
              <li>Advertise</li>
              <li>Commercial Real Estate Ads</li>
              <li>Place a Classified Ad</li>
              <li>Metaverse Land Ads</li>
              <li>Blockchain Ads</li>
            </ul>
          </div>
          <div className="border-l-2 border-gray-400 pl-2">
            <div className="text-white text-xl font-bold">More</div>
            <ul className="flex flex-col gap-1 py-3">
              <li>About Us</li>
              <li>Content Partnerships</li>
              <li>Corrections</li>
              <li>New Archive</li>
              <li>Register For Free</li>
              <li>MSJ Shop</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 text-xl text-white justify-center items-center">
          <div>MSJ Membership</div>
          <div>Customer Service</div>
          <div>Tools & Features</div>
          <div>Ads</div>
        </div>
      )}
    </div>
  );
};

export default Footer;
