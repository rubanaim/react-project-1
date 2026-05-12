import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
  return (
  <footer className="bg-(--secondary-color) flex flex-col lg:px-20 px-10 text-white mt-30">
     <div className=" flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center lg:gap-10 gap-15 py-20" >
      <div className="flex flex-col justify-center md:items-start gap-10 items-center ">
        <h1 className="xl:text-3xl text-2xl font-bold ">Bravo Shop</h1>
        <p className="xl:w-[400px] text-center md:text-start">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
      </div>
      <div className="flex md:gap-10 sm:gap-20 gap-5 ">
        <div className="flex flex-col gap-5">
        <h1 className="xl:text-xl text-md font-bold ">QUICH SHOP</h1>
        <div className="flex flex-col gap-3 justify-center items-center">
           <p className=" hover:text-(--main-color) duration-300">Home</p>
           <p className=" hover:text-(--main-color) duration-300">Shop</p>
           <p className=" hover:text-(--main-color) duration-300">About</p>
           <p className=" hover:text-(--main-color) duration-300">Contact</p>
           <p className=" hover:text-(--main-color) duration-300">Cart</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="xl:text-xl text-md font-bold ">Social Media</h1>
        <div className="flex flex-col gap-4 justify-center items-center">
            <p className=" hover:text-(--main-color) duration-300"><FaFacebook /></p>
            <p className=" hover:text-(--main-color) duration-300"><FaTwitter /></p>
            <p className=" hover:text-(--main-color) duration-300"><FaInstagram /></p>
            <p className=" hover:text-(--main-color) duration-300"><FaLinkedin /></p>
            <p className=" hover:text-(--main-color) duration-300"><FaGithub /></p>
        </div>
      </div>
      </div>
      <div className="flex flex-col md:gap-5 gap-10 items-center md:items-baseline">
        <h1 className="xl:text-xl text-md font-bold ">NEWSLETTER</h1>
        <p className="xl:w-[400px] text-center md:text-start">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.</p>
        <div className="relative xl:w-[300px] md:w-[250px] w-[100%]">
          <input type="email" className="w-[100%] px-5 py-2 border rounded" placeholder="Enter Your Email" />
          <button className="bg-white text-black py-2 md:px-3 sm:px-10 px-3 rounded absolute top-0 right-0 hover:text-white hover:bg-black duration-300">Confirm</button>
        </div>
      </div>
    </div>
    <hr className="text-white" />
    <div className="flex flex-row text-center justify-between  py-10 text-(--ternary-color) md:text-sm text-[12px]">
      <p>
        @ copywrite By Ruba Naim , All Right Reserved
      </p>
      <div className="flex gap-5">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  </footer>
   
  )
}
