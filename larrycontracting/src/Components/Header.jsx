import React from "react";
import { tools } from "../assets";
import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const listItemStyle = {
    transition: "transform 0.3s ease-in-out",
  };

  const handleHover = (event) => {
    event.target.style.transform = "scale(1.1)";
  };

  const handleLeave = (event) => {
    event.target.style.transform = "scale(1)";
  };

  return (
    <div className="sticky top-0  bg-white z-20">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={tools} alt="Logo" className="h-12 mr-4" />
          <div>
            <p className="text-black text-lg font-bold">LGC LLC</p>
          </div>
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger
            className={`md:invisible ${open ? "open" : ""}`}
            style={styles.hamburgerIcon}
          >
            <div
              style={open ? styles.hamburgerIconOpen : styles.hamburgerIconLine}
            ></div>
            <div
              style={
                open ? styles.hamburgerIconMiddle : styles.hamburgerIconLine
              }
            ></div>
            <div
              style={
                open ? styles.hamburgerIconClose : styles.hamburgerIconLine
              }
            ></div>
          </Dialog.Trigger>
          <Dialog.Content className="fixed inset-0 flex justify-end lg:hidden top-[80px]">
            <div className="w-full max-w-md bg-white overflow-y-auto ">
              <NavigationMenu.Root>
                <NavigationMenu.List className="flex-column text-center">
                  {navLinks.map((link, index) => (
                    <NavigationMenu.Item
                      key={index}
                      style={styles.listItem}
                      className="flex justify-center border-t border-b border-gray-400 hover:bg-gray-200 "
                    >
                      <NavigationMenu.Trigger
                        style={listItemStyle}
                        className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out "
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                      >
                        <Dialog.Close onClick={() => setOpen(false)} asChild>
                          <Link to={link.path} className="text-5xl">
                            {link.name}
                          </Link>
                        </Dialog.Close>
                      </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                  ))}
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </div>
          </Dialog.Content>
          <NavigationMenu.Root className="hidden md:block">
            <NavigationMenu.List className="flex space-x-4 ml-auto">
              {navLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger
                      style={listItemStyle}
                      className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                    >
                      <Link to={link.path}>{link.name}</Link>
                    </NavigationMenu.Trigger>
                  </NavigationMenu.Item>
                  {index < navLinks.length - 1 && (
                    <span
                      style={{ opacity: 0.7, color: "#000", marginTop: "3px" }}
                    >
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </Dialog.Root>
      </div>
    </div>
  );
};

export default Header;
