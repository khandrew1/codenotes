"use client";
import Image from "next/image";
import lightmodelogo from "../../public/lightmodelogo.svg";
import { FaBars } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { signIn } from "next-auth/react";
const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top" className="shadow-md">
      <Navbar.Brand className="inline-flex ml-4 items-center font-bold !text-2xl !text-codenotes-ooze hover:!text-codenotes-darkgrey">
        <Image
          src={lightmodelogo}
          alt={"lightmodelogo"}
          className="w-12 te2t-codenotes-ooze hover:text-codenotes-darkgrey"
        />
        codenotes
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <FaBars className="text-xl" />
      </Navbar.Toggle>
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-end pr-4 font-bold text-2xl"
      >
        <Nav className="space-x-2">
          <Nav.Link
            href="/#about"
            className="!text-codenotes-ooze hover:!text-codenotes-darkgrey"
          >
            about
          </Nav.Link>
          <Nav.Link
            href="/#features"
            className="!text-codenotes-ooze hover:!text-codenotes-darkgrey"
          >
            features
          </Nav.Link>
          <Nav.Link
            href="/canvas"
            className="!text-codenotes-ooze hover:!text-codenotes-darkgrey"
          >
            canvas
          </Nav.Link>
          <Nav.Link
            onClick={() =>
              signIn("google", { callbackUrl: "/onboard", redirect: true })
            }
            className="!text-codenotes-ooze hover:!text-codenotes-darkgrey"
          >
            login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
