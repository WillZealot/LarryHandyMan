import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { motion } from "framer-motion";
import ICON from "../assets/icons/tools.png";

const slideIn = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
};

const DialogSheet = ({ title, description, onClose }) => (
  <AlertDialog.Root defaultOpen={!onClose} open={onClose} onOpenChange={onClose}>
    <AlertDialog.Content
      as={motion.div}
      animate="visible"
      variants={slideIn}
      className="fixed top-0 right-0 h-full w-full p-4 pt-28 z-10 bg-slate-500 md:w-1/3"
    >
      <AlertDialog.Title
        style={{
          fontSize: "3em",
          fontWeight: "bold",
          padding: "15px",
          margintop: "20px",
          color: "white",
          textAlign: "center"
        }}
      >
        {title}
      </AlertDialog.Title>
      <AlertDialog.Description
        style={{ marginTop: "2em", fontSize: "1.5em", padding: "10px", color: "white", textAlign: "center"}}
      >
        {description}
      </AlertDialog.Description>
      <img src={ICON} alt="logo" className="mx-auto h-32 w-32"/>
      <div className="text-center pt-10 pb-10">
      <AlertDialog.Cancel onClick={onClose} className="text-slate-500 bg-white p-2 pr-6 pl-6 rounded-full hover:bg-gray-200">Close</AlertDialog.Cancel>
      </div>
    </AlertDialog.Content>
  </AlertDialog.Root>
);

export default DialogSheet;
