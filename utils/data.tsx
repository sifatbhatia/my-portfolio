import NavLink from "../components/nav";

export const navLinks = [
  { name: "Home", 
   path: "/" 
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: <NavLink item="Contact Me" />,
    path: "#contact",
  },
];