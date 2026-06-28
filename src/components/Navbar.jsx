import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Who we are", to: "/who-we-are" },
  { label: "What we do", to: "/what-we-do" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact-us" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed top-0 left-0 right-0 bg-primary z-30"
    >
      {" "}
      <nav className="mx-auto max-w-7xl px-6 py-5">
        {" "}
        {/* Desktop Navbar */}{" "}
        <div className="hidden md:flex items-center justify-between">
          {" "}
          <Link to="/" aria-label="Home">
            {" "}
            <img src={logo} alt="Logo" className="h-20 w-auto" />{" "}
          </Link>{" "}
          <div className="flex items-center gap-10 text-[14px] font-semibold">
            {" "}
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `transition hover:text-slate-700 ${isActive ? "text-violet-600" : "text-slate-900"}`
                }
              >
                {" "}
                {link.label}{" "}
              </NavLink>
            ))}{" "}
          </div>{" "}
          <a
            href="https://www.linkedin.com/in/anurag-bavaria-06410b2b7/"
            target="_blank"
            rel="noreferrer"
            className="text-4xl transition hover:text-slate-700"
          >
            {" "}
            <FaLinkedin />{" "}
          </a>{" "}
        </div>{" "}
        {/* Mobile Navbar */}{" "}
        <div className="grid grid-cols-3 items-center md:hidden">
          {" "}
          <div className="justify-self-start">
            {" "}
            <Link to="/">
              {" "}
              <img src={logo} alt="Logo" className="h-16 w-auto" />{" "}
            </Link>{" "}
          </div>{" "}
          <div className="justify-self-center">
            {" "}
            <a
              href="https://www.linkedin.com/in/anurag-bavaria-06410b2b7/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl"
            >
              {" "}
              <FaLinkedin />{" "}
            </a>{" "}
          </div>{" "}
          <div className="justify-self-end">
            {" "}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300"
            >
              {" "}
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
      {/* Mobile Menu */}{" "}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md md:hidden">
          <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 text-white"
            >
              <FaTimes size={28} />
            </button>

            <div className="flex w-full flex-col items-center gap-8 text-xl font-semibold text-white">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="transition hover:text-violet-400"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}{" "}
    </motion.header>
  );
}
