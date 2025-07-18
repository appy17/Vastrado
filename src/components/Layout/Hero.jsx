import React from "react";
import heroImg from "../../assets/June_Desktop_Monsoon.webp";
import heroImgMobile from "../../assets/June_Mobile_Monsoon.webp";
import heroImg2 from "../../assets/Summer_Website2_2.webp";
import heroImg3 from "../../assets/Summer_Website_3.webp";
import heroImg2Mobile from '../../assets/Kurta_drips_mobile.webp';
import heroImg3Mobile from '../../assets/Cro_Mobile_banner_New.webp';
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="h-[100%] overflow-x-hidden">
      {/* Hero 1 */}
      <div className="h-screen">
        <Link to="#">
          {/* Desktop */}
          <img
            src={heroImg}
            alt="Hero Desktop 1"
            className="w-full h-full object-cover hidden lg:block xl:block md:block cursor-pointer"
          />
          {/* Mobile */}
          <img
            src={heroImgMobile}
            alt="Hero Mobile 1"
            className="w-full h-full object-cover block md:hidden lg:hidden cursor-pointer"
          />
        </Link>
      </div>

      {/* Hero 2 */}
      <div className="h-screen">
        <Link to="#">
          <img
            src={heroImg2}
            alt="Hero Desktop 2"
            className="w-full h-full object-cover hidden lg:block md:block cursor-pointer"
          />
          <img
            src={heroImg2Mobile}
            alt="Hero Mobile 2"
            className="w-full h-full object-cover block md:hidden lg:hidden cursor-pointer"
          />
        </Link>
      </div>

      {/* Hero 3 */}
      <div className="h-screen">
        <Link to="#">
          <img
            src={heroImg3}
            alt="Hero Desktop 3"
            className="w-full h-full object-cover hidden md:block lg:block cursor-pointer"
          />
          <img
            src={heroImg3Mobile}
            alt="Hero Mobile 3"
            className="w-full h-full object-cover block md:hidden lg:hidden cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
