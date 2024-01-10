const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[22px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",

  hamburgerIcon: {
    width: "30px",
    height: "20px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  hamburgerIconLine: {
    width: "100%",
    height: "4px",
    backgroundColor: "#000",
    transition: "all 0.3s ease-in-out",
  },

  hamburgerIconOpen: {
    transform: "rotate(45deg) translateY(10px)",
    backgroundColor: "#000",
    transition: "all 0.5s ease-in-out",
  },

  hamburgerIconMiddle: {
    opacity: 1,
    transition: "all 0.5s ease-in-out",
  },

  hamburgerIconClose: {
    transform: "rotate(-45deg) translateY(-10px)",
    backgroundColor: "#000",
    transition: "all 0.5s ease-in-out",
  },

  listItem: {
    height: "15vh", // Each list item takes up 1/5 of the viewport height
  },
};

export { styles };
