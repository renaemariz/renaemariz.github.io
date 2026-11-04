"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, fadeInY, fadeInYSwipe, staggerContainer } from "@/lib/motions";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Frontend Architecture Specialist",
    "Designing UI Systems",
    "Building Scalable Web Apps",
  ];

  // Logic: Handles the text cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* 1. BACKGROUND LAYER: Mesh Gradient */}
      <div className="absolute -inset-50 z-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute inset-0 bg-(image:--bg-hero)" />
      </div>
      <div className="container  mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 pt-20">
        {/* 2. LEFT CONTENT: Typography & CTA */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <motion.p
              variants={fadeInY}
              className="text-sm font-bold tracking-[0.2em] text-indigo-600 dark:text-blue-400 uppercase mb-4"
            >
              Available for new opportunities
            </motion.p>

            <motion.h1
              variants={fadeInY}
              className="text-4xl font-extrabold tracking-widest text-main dark:text-zinc-100 uppercase mb-4"
            >
              Renae Mariz Cariño
            </motion.h1>
            <motion.h1
              variants={fadeInY}
              className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-[0.9]"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInYSwipe}
                  animate="visible"
                  exit="exit"
                  className="inline-block py-1 text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>
          </div>

          <motion.p
            variants={fadeInY}
            className="text-sm text-secondary max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            I build scalable web applications using{" "}
            <span className="text-main dark:text-zinc-100 font-semibold">
              React & Angular
            </span>
            , turning complex business logic into intuitive user experiences.
          </motion.p>

          <motion.div
            variants={fadeInY}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Link
              href="/#experience"
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:scale-105 shadow-xl"
              replace
            >
              View Experience{" "}
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-4 border-2 border-slate-500 dark:text-white font-bold rounded-2xl hover:scale-105"
              replace
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* 3. RIGHT CONTENT: The Dashboard Hides on tablet to smaller screen*/}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden lg:block relative justify-self-center  lg:justify-self-end group "
        >
          {/* Outer Glow */}
          <div className="relative w-85 md:w-100 bg-white/80 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:-translate-y-2">
            {/* Header / Traffic Lights */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100 dark:border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                System.Active
              </span>
            </div>

            <div className="p-8 space-y-6">
              {/* Dashboard Hero Block */}
              <div className="h-28 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 p-4 flex flex-col justify-end">
                <div className="h-1.5 w-12 bg-white/30 rounded-full mb-2" />
                <div className="h-3 w-24 bg-white/60 rounded-full" />
              </div>

              {/* Animated Chart SVG */}
              <div className="relative h-32 rounded-2xl bg-slate-950 dark:bg-slate-800 overflow-hidden group/chart">
                <svg
                  className="absolute inset-0 w-full h-full p-4"
                  viewBox="0 0 300 100"
                >
                  <path
                    className="fill-none stroke-blue-500 stroke-3 [stroke-dasharray:400] [stroke-dashoffset:400] animate-draw"
                    d="M0,80 C50,20 100,90 150,40 C200,10 250,80 300,30"
                  />
                </svg>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-16 rounded-xl bg-slate-200 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700/30" />
                <div className="h-16 rounded-xl bg-slate-200 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700/30" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
