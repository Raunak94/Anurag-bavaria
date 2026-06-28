import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className=" bg-slate-950 p-8 ">
        {/* <div className="-mt-12 flex justify-center">
          <div className="rounded-full bg-violet-600 px-6 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-violet-800/40">
            Stay Connected
          </div>
        </div> */}

        <div className="mt-5 border-violet-700/20 pt-6 text-center text-sm text-slate-400">
          © 2026 Your Company. Crafted with care and modern design.
        </div>
      </div>
    </motion.section>
  );
}
