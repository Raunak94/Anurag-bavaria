import About from "./About";
import Practice from "./Practice";
import Industries from "./Industries";
import Contact from "./Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-28"
    >
      <About />
      <Practice />
      <Industries />
      <Contact />
    </motion.div>
  );
}
