"use client"

import { motion } from "motion/react"

import Divider from "@/app/components/landing/divider"

import Rule from "./rule"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const faqs = [
  {
    question: "Is SmoothUI free to use?",
    answer: "Yes, SmoothUI is completely free",
  },
  // Add more FAQs...
]

export function FAQ() {
  return (
    <motion.section
      className="relative w-full px-4 py-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Rule position="bottom-right" />
      <Rule position="bottom-left" />
      <Divider />
      <motion.h2
        variants={item}
        className="font-title text-light-950 dark:text-dark-950 text-center text-3xl font-bold transition"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="mx-auto mt-16 max-w-3xl space-y-8">
        {faqs.map((faq) => (
          <motion.div
            key={faq.question}
            variants={item}
            className="box-light group border-light-200 bg-light-100 dark:border-dark-200 dark:bg-dark-100 relative mx-auto flex w-fit flex-col rounded-lg border p-6 backdrop-blur-lg transition-all hover:shadow-pink-500/5"
          >
            <h3 className="text-light-950 group-hover:text-light-50 dark:text-dark-950 text-lg font-semibold transition">
              {faq.question}
            </h3>
            <p className="text-light-900 group-hover:text-light-50 dark:text-dark-900 group-hover:dark:text-dark-950 mt-2 transition">
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}