import React, { useState } from "react";
import { navItems } from "../../../constants";
import Button from "../../common/Button/Button";
import curve from "../../../assets/downarrow.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav>
        <div className="px-6 py-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center border-b pb-4 border-b-gray-200">
            <div className="flex items-center flex-shrink-0">
              <h1 className="text-xl text-blue-600 font-semibold">Appy</h1>
              <ul className="hidden lg:flex ml-14 space-x-10">
                {navItems.map((item, index) => (
                  <a
                    href={item.href}
                    key={index}
                    className="flex items-center space-x-2"
                  >
                    <span>{item.label}</span>
                    {index < 3 && <img src={curve} alt="" className="w-3" />}
                  </a>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <p className="text-blue-600">Log In</p>
              <Button />
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileDrawerOpen && (
            <div className="lg:hidden mt-4 flex flex-col space-y-6 justify-center items-center">
              {navItems.map((item, index) => (
                <a
                  href={item.href}
                  key={index}
                  className="flex items-center space-x-2"
                  onClick={() => setMobileDrawerOpen(false)}
                >
                  <span>{item.label}</span>
                  {index < 3 && <img src={curve} alt="" className="w-3" />}
                </a>
              ))}
              <div className="flex items-center space-x-6 justify-center mt-4">
                <p className="text-blue-600">Log In</p>
                <Button />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
