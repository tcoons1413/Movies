import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      }}
      style={{
        display: "inline-block",
        marginLeft: "10px",
        width: "24px",
        height: "24px",
        border: "4px solid #ccc",
        borderTop: "4px solid #3498db",
        borderRadius: "50%",
      }}
    ></motion.div>
  );
}
