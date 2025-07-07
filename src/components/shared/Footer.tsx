import { Copyright, Facebook, Instagram, X,  } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/testimonial", label: "Testimonial" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Instagram },
    { href: "#", icon: X },
  ];
  return (
    <footer className=" border-t border-gray-200 py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-black flex items-center">
              Agent.Ai Catalog
            </h1>
          </div>
          <p className=" mt-3 w-1/2">
            Find the Right AI Tool for Every Task!
Explore intelligent agents built to boost productivity, automate work, and drive innovation. Browse Trusted AI Agents Built for Real Impact
Handpicked assistants for marketing, development, HR, customer service, and more.
          </p>
        </div>

        <hr />
        <ul className="flex justify-center space-x-6 text-sm font-medium my-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-green-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-between space-x-4">
             <div className="flex gap-2 items-center">
          <Copyright size={20}/> {new Date().getFullYear()} ArkLab AI. All rights reserved.
        </div>
          <div className="flex gap-5">
            {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link
              href={href}
              key={index}
              className=" hover:text-green-600"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;