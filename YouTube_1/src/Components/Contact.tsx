import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const links = [
  {
    href: "https://twitter.com/@huxnwebdev",
    label: "Twitter",
    icon: <FaTwitter className="h-6 w-6 text-blue-500" />,
  },
  {
    href: "https://youtube.com/@huxnwebdev",
    label: "YouTube",
    icon: <FaYoutube className="h-6 w-6 text-red-600" />,
  },
  {
    href: "https://github.com/HuXn-WebDev",
    label: "GitHub",
    icon: <FaGithub className="h-6 w-6 text-gray-900" />,
  },
  {
    href: "https://instagram.com/huxnshorts",
    label: "Instagram",
    icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
  },
];

const Contact = () => {
  return (
    <section className="flex  flex-col gap-3 max-w-full bg-blue-50 p-3 rounded-md shadow-md">
      <div className="py-3 px-3 text-2xl font-bold ">
        <h1>Contacts</h1>
      </div>
      <div className="flex flex-1 gap-8">
        {links.map((link) => {
          return (
            <a href={link.href} target="_blank" className="flex gap-2 pb-10 pl-3">
              {link.icon} <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
