import React from "react"
import { navLinks } from "../utils/data"
import Link from "next/link"
import Image from "next/image"
const Header = () => {
  return (
    <header>
    <div className="brand">
      <Image layout="fixed" width={50} height={50} src="https://i.ibb.co/gjtjX0J/SB-4x.png" />
    </div>
    <nav className="flex sm:justify-center space-x-4">
      {navLinks.map((link, index) => {
        return (
          <ul>
            <Link href={link.path}>
              <li key={index}>{link.name}</li>
            </Link>
          </ul>
        );
      })}
    </nav>
  </header>
  )
}

export default Header