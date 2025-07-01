"use client";

import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";

export function PageTransition({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 20}}
      initial={{opacity: 0, y: 20}}
      transition={{duration: 0.3, ease: "easeInOut"}}>
      {children}
    </motion.div>
  );
}

export function AnimationLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
}
