import React from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const CNavBar: React.FC = () => {
    return (
        <Navbar fluid rounded>
            <NavbarBrand as={Link} href="https://flowbite-react.com">
                <img src="/favicon.ico" className="bg-black mr-3 h-6 sm:h-9" alt="" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
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
    );
}

export default CNavBar;