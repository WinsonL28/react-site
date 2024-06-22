import React from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const CNavBar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-20 h-5 ">
            <Navbar fluid className="bg-black">
                <NavbarBrand as={Link} href="https://flowbite-react.com">
                    <img src="/favicon.ico" className="bg-black ml-4 mr-1 h-12 " alt="" />
                    <span className="self-center whitespace-nowrap text-xl text-white font-semibold p-4">Western Pacific <br/> Robotics Academy</span>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink href="#" active>
                        Home
                    </NavbarLink>
                    <NavbarLink as={Link} href="#">
                        About
                    </NavbarLink>
                    <NavbarLink href="#">Services</NavbarLink>
                    <NavbarLink href="#">Pricing</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
}

export default CNavBar;