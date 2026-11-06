import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeInY } from "@/lib/motions";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-24 px-6 bg-primary">
      <div className="mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeInY}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-main mb-4">
              {"Let's "}
              <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-main max-w-lg mx-auto">
              {"I'm"} currently open to new opportunities.
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            variants={fadeInY}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            {/* Email Card */}
            <Link
              href="mailto:renaemarizcarino@gmail.com"
              className="group flex w-full items-center gap-2 p-2 md:gap-6 md:p-6 rounded-3xl border border-card-border bg-card-bg transition-all hover:-translate-y-1 hover:border-indigo-500/30"
            >
              <div className="flex items-center justify-center w-8 md:w-12 h-12 rounded-2xl text-blue-400">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 md:w-6 h-6 "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="block text-xs font-bold text-secondary uppercase">
                  Email Me
                </span>
                <strong className="block break-all md:wrap-break-word text-main text-[12px] md:text-[14px] group-hover:text-indigo-400">
                  renaemarizcarino@gmail.com
                </strong>
              </div>
            </Link>

            {/* LinkedIn Card */}
            <Link
              href="https://www.linkedin.com/in/renae-carino"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center gap-2 p-2 md:gap-6 md:p-6 rounded-3xl border border-card-border bg-card-bg transition-all hover:-translate-y-1 hover:border-indigo-500/30"
            >
              <div className="flex items-center justify-center w-8 md:w-12 h-12  rounded-2xl text-blue-400">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 md:w-6 h-6 "
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="block text-xs font-bold text-secondary uppercase">
                  LinkedIn
                </span>
                <strong className="block break-all md:wrap-break-word text-main text-[12px] md:text-[14px] group-hover:text-blue-400">
                  linkedin.com/in/renae-carino
                </strong>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
