import React from "react";
import { SlSocialTwitter } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { PiYoutubeLogo } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="bg-black text-white font-bold">
      <div className="mx-4 lg:mx-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:col-span-4 lg:col-span-1 lg:col-start-5 lg:flex-col">
          <h1 className="text-2xl font-bold">
            <span>envato</span>market
          </h1>

          <div className="flex flex-col">
            <p className="text-[1rem] bold text-white">77,926,813</p>
            <span className="text-[0.75rem] text-gray-400">items sold</span>
          </div>
          <div className="flex-flex-col">
            <p className="text-[1rem] bold text-white">$1,229,404,207</p>
            <span className="text-[0.75em] text-gray-400">
              community earnings
            </span>
          </div>
        </div>
        <div className=" border-1 border-gray-400 mt-8 mb-6 md:col-span-4 lg:col-span-1 lg:hidden" />
        <div className="lg:row-start-1">
          <h2 className="text-gray-400 pb-6">ENVATO MARKET</h2>
          <ul className="flex flex-col gap-4">
            <li>Terms</li>
            <li>Licenses</li>
            <li>Market API</li>
            <li>Become an affiliate</li>
            <li>Cookies</li>
            <li>Cookie Settings</li>
          </ul>
        </div>
        <div className="lg:row-start-1">
          <h2 className="text-gray-400 pb-6">HELP</h2>
          <ul className="flex flex-col gap-4">
            <li>Help Center</li>
            <li>Authors</li>
          </ul>
        </div>
        <div className="lg:row-start-1">
          <h2 className="text-gray-400 pb-6">OUR COMMUNITY</h2>
          <ul className="flex flex-col gap-4">
            <li>Community</li>
            <li>Blog</li>
            <li>Meetups</li>
          </ul>
        </div>
        <div className="lg:row-start-1">
          <h2 className="text-gray-400 pb-6">MEET ENVATO</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/about">About Envato</Link>
            </li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Do not sell or share my personal information</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div className="border-1 border-gray-400 mx-4 lg-mx-auto" />
      <div className="p-4 pb-12 lg:p-12 grid grid-cols-1 md:grid-cols-2 mx-auto gap-4">
        <div className="mx-auto md:mr-0 gap-2 flex flex-row md:col-start-2 md:row-start-3">
          <span>
            <SlSocialTwitter />
          </span>
          <span>
            <CiFacebook />
          </span>
          <span>
            <PiYoutubeLogo />
          </span>
          <span>
            <SlSocialInstagram />
          </span>
          <span>
            <FaPinterestP />
          </span>
        </div>
        <div className="md:col-start-1 md:row-start-1">
          <ul className="list-none grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-center">
            <li>Envato Elements</li>
            <li>Placeit by Envato</li>
            <li>Envato Tuts+</li>
            <li>All Products</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <p className="font-normal md:col-start-1 md:row-start-2">
          Price is in US dollars and excludes tax and handling fees
        </p>
        <p className="font-normal md:col-start-1 md:row-start-3">
          © 2025 Envato Pty Ltd. Trademarks and brands are the property of their
          respective owners.
        </p>
      </div>
    </section>
  );
}

export default Footer;
