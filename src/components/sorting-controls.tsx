"use client";

import { motion } from "framer-motion";

export default function SortingControls() {

  return (
    <div className="relative flex-grow bg-black h-full overflow-hidden rounded-full flex items-center border-l-4 border-black">
      <motion.div
        className="whitespace-nowrap text-white italic"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, 
        }}
        style={{ fontSize: "28px", letterSpacing: "0.2em", fontWeight: "bold" }}
      >
        Good luck on your job hunt! &nbsp;
        Good luck on your job hunt! &nbsp;
      </motion.div>
    </div>
  );
  
}


