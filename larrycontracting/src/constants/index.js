import {
  deck,
  dryrot,
  patiocovers,
  windowreplace,
  siding,
  framing,
  remodeling,
  flooring,
  drywall,
} from "../assets";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  {
    image: dryrot,
    title: "Dryrot Repair",
  },
  {
    image: windowreplace,
    title: "Window Replace",
  },
  {
    image: framing,
    title: "Framing",
  },
  {
    image: remodeling,
    title: "Remodeling",
  },
  {
    image: drywall,
    title: "Drywall Repair",
  },
  {
    image: siding,
    title: "Siding",
  },
  {
    image: deck,
    title: "Decks",
  },
  {
    image: patiocovers,
    title: "Patio Covers",
  },
  {
    image: flooring,
    title: "Flooring",
  },
];

export { services };
