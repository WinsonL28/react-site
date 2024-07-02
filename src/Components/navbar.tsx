import React from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const CNavBar: React.FC = () => {
    return (
        <div className="fixed top-0 w-full z-20 h-5 ">
            <Navbar fluid className="">
                <NavbarBrand as={Link} href="#" className="">
                    <img src="/favicon.ico" className=" ml-4 mr-1 h-[50px] " alt="" />
                    <span className="self-center whitespace-nowrap text-xl text-white font-semibold p-4">Western Pacific <br /> Robotics Academy</span>
                </NavbarBrand>
                <div>
                    <NavbarToggle className="hover: bg-gray-700 dark:focus:bg-gray-800 " />
                </div>
                <NavbarCollapse className="rounded-md">
                    <NavbarLink href="#" active     className="text-xl md:text-l rounded-md mx-5">Home</NavbarLink>
                    <NavbarLink as={Link} href="#"  className="text-xl md:text-l rounded-md mx-5">About</NavbarLink>
                    <NavbarLink href="#"            className="text-xl md:text-l rounded-md mx-5">Services</NavbarLink>
                    <NavbarLink href="#"            className="text-xl md:text-l rounded-md mx-5">Pricing</NavbarLink>
                    <NavbarLink href="#"            className="text-xl md:text-l rounded-md mx-5">Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
}

export default CNavBar;