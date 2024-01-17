import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { motion } from "framer-motion";

const slideIn = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
};

const DialogSheet = ({ title, description, onClose }) => (
  <AlertDialog.Root open={onClose} onOpenChange={onClose}>
    <AlertDialog.Content
      as={motion.div}
      animate="visible"
      variants={slideIn}
      style={{
        width: "33%",
        position: "fixed",
        top: 0,
        right: 0,
        height: "100%",
        backgroundColor: "white",
        padding: "1em",
        paddingTop: "7em",
      }}
    >
      <AlertDialog.Title
        style={{
          fontSize: "3em",
          fontWeight: "bold",
          padding: "15px",
          margintop: "20px",
        }}
        className="text-slate-700"
      >
        {title}
      </AlertDialog.Title>
      <AlertDialog.Description
        style={{ marginTop: "2em", fontSize: "1.0em", padding: "20px" }}
      >
        {description}
      </AlertDialog.Description>
      <AlertDialog.Cancel onClick={onClose}>Close</AlertDialog.Cancel>
    </AlertDialog.Content>
  </AlertDialog.Root>
);

export default DialogSheet;
