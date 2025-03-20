"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import Divider from "@/app/components/landing/divider";

import { ReactLogo, TailwindLogo } from "../resources/icons";
import Rule from "./rule";

export function Hero() {
  return (
    <motion.section
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 0.8 }}
      className="relative flex min-h-[80vh] flex-col items-center justify-center px-4"
    >
      <Rule position="bottom-right" />
      <Rule position="bottom-left" />
      <Divider />

      <Image src="/logo.png" alt="SmoothUI Logo" width={220} height={220} />

      <h1 className="font-title text-light-950 dark:text-dark-950 text-center text-5xl font-bold tracking-tight transition md:text-6xl">
        Omar<span className="text-green-500">UI</span>
      </h1>

      <p className="text-light-700 dark:text-dark-900 mt-6 max-w-2xl text-center text-xl transition">
        A collection of{" "}
        <span className="line-through decoration-green-500">awesome</span> 
        {" "}components
        <br /> with cool animations
      </p>
      <div className="mt-10 flex gap-4">
        <Link
          href="/doc"
          className="candy-btn group relative isolate inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
        >
          Get Started
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="text-light-900 dark:text-dark-900 mt-14 hidden cursor-default items-center justify-start gap-3 text-xs font-medium tracking-widest uppercase transition sm:flex sm:justify-center">
        <span>Built for</span>
        <span className="group flex items-center gap-1.5">
          <ReactLogo className="text-light-700 dark:text-dark-700 h-6 transition group-hover:text-green-500 dark:group-hover:text-green-500" />
          <span className="group-hover:text-green-500 dark:group-hover:text-green-500">
            React
          </span>
        </span>
        <span className="group flex items-center gap-1.5">
          <TailwindLogo className="text-light-700 dark:text-dark-700 h-5 transition group-hover:text-green-500 dark:group-hover:text-green-500" />
          <span className="group-hover:text-green-500 dark:group-hover:text-green-500">
            Tailwind CSS
          </span>
        </span>
      </div>
    </motion.section>
  );
}
