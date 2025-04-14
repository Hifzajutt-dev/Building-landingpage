import React from "react";
import facebook from "../../../assets/facebook.png";
import youtube from "../../../assets/youtube.png";
import linkedin from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";
import instagram from "../../../assets/instagram.png";

import {
  Categories,
  Product,
  Solutions,
  Resources,
  Support,
  Company,
} from "../../../constants/index";
function Footer() {
  return (
    <footer className=" max-w-8xl mt-20 py-10">
      <div className=" mx-auto   px-4">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6 text-center sm:text-left">
          <div>
            <h3 className="text-md font-semibold mb-4 text-neutral-600">
              Categories
            </h3>
            <ul className="space-y-4">
              {Categories.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-600" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4 text-neutral-600">
              Product
            </h3>
            <ul className="space-y-4">
              {Product.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-600" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4 text-neutral-600">
              Solutions
            </h3>
            <ul className="space-y-4">
              {Solutions.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-600" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4 text-neutral-600">
              Resources
            </h3>
            <ul className="space-y-4">
              {Resources.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-600" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4 text-neutral-600">
              Support
            </h3>
            <ul className="space-y-4">
              {Support.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-600" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4 text-neutral-600">
              Company
            </h3>
            <ul className="space-y-4">
              {Company.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-600" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-10 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center text-sm text-neutral-500">
            <h1 className="text-xl text-blue-600 font-semibold">Appy</h1>
            <p>©2025 All rights reserved.</p>

            <div className="flex gap-3">
              <img className="w-7 h-6" src={youtube} alt="" />
              <img className="w-7 h-6" src={facebook} alt="" />
              <img className="w-7 h-6" src={twitter} alt="" />
              <img className="w-7 h-6" src={instagram} alt="" />
              <img className="w-7 h-6" src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
