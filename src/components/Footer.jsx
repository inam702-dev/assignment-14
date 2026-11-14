import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="h-[28vh] bg-[#C7A05C] flex flex-row justify-evenly items-center px-8 ">
      <div className="flex flex-col w-sm">
        <p className="text-3xl text-slate-800 font-bold mb-2">
          {" "}
          Vance Advisory
        </p>
        <p className="text-semibold leading-5">
          Your trusted partner in financial planing, investment management and
          long-term wealth growth.
        </p>
        <div className="flex flex-row gap-4 text-2xl mt-4">
          <CiFacebook className="size-6.5" /> <FaInstagram /> <FaXTwitter />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl text-slate-800 font-bold">Quick Links</p>
        <a href="#home">
          <p>Home</p>
        </a>
        <a href="#about">
          <p>About</p>
        </a>
        <a href="#services">
          <p>Services</p>
        </a>
        <a href="#contact">
          {" "}
          <p>Contact</p>
        </a>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl text-slate-800 font-bold">Our Services</p>
        <a href="#services">
          <p>Retirement Planing</p>
        </a>
        <a href="#services">
          <p>Investment Management</p>
        </a>
        <a href="#services">
          <p>Insurance Protection</p>
        </a>
        <a href="#services">
          <p>Estate Planing </p>
        </a>
      </div>
      <div>
        <p className="text-xl text-slate-800 font-bold">Get In Touch</p>
        <p>Vance Advisory Limited</p>
        <p>Hathazari, Chattogram, Bangladesh</p>
        <p>vanceadvisory101@gmail.com</p>
        <p>+8801577767729</p>
        <p></p>
      </div>
    </div>
  );
};

export default Footer;
