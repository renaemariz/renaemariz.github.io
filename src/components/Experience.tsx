"use client";
import React from "react";
import Card from "./Card";
import Pill from "./Pill";
import { fadeInLeft, fadeInRight, fadeInY } from "@/lib/motions";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      date: "June 2026 — Oct 2026",
      company: "",
      role: "Senior Frontend Developer",
      description: (
        <>
          <ul className="list-disc pl-5 marker:text-indigo-300">
            <li>
              Maintained and enhanced a multi-tenant a Next.js (App Router)
              portal migrated from a legacy Angular application by updating API
              integrations, converting legacy features to the new architecture,
              and implementing fixes and enhancements based on client
              requirements.
            </li>
          </ul>
        </>
      ),
      tech: [],
    },
    {
      date: "September 2024 — May 2026",
      company: "Xentra Infotech Solutions Inc",
      role: "Senior Frontend Developer",
      description: (
        <>
          <ul className="list-disc pl-5 marker:text-indigo-300">
            <li>
              Architected scalable frontend solutions for Admin and Merchant
              portals using Next.js and RTK Query, optimizing complex
              data-fetching layers to handle heavy data flows efficiently.
            </li>
            <li>
              Designed interactive data dashboards using Chart.js/Recharts and
              established UI governance via Storybook, accelerating cross-team
              feature delivery while maintaining strict architectural alignment.
            </li>
            <li>
              Managed end-to-end deployment utilizing AWS S3 for web hosting and
              oversaw successful releases to the App Store and Google Play.
            </li>
          </ul>
        </>
      ),
      tech: [],
    },
    {
      date: "March 2021 — August 2024",
      company: "Xentra Infotech Solutions Inc",
      role: "Frontend Developer",
      description: (
        <>
          <ul className="list-disc pl-5 marker:text-indigo-300">
            <li>
              Engineered white-label rebranding strategies and feature updates
              for customer portals using Angular, refactoring legacy modules to
              ensure data accuracy and long-term system stability.
            </li>
            <li>
              Developed cross-platform web and mobile applications leveraging
              Ionic and Angular Frameworks to deliver standalone apps from a
              single, shared codebase, maximizing engineering efficiency and
              ensuring 100% UI consistency.
            </li>
          </ul>
        </>
      ),
      tech: [],
    },
    {
      date: "October 2016 — March 2020",
      company: "Miyens Technologies",
      role: "Quality Assurance / Developer",
      description: (
        <>
          <ul className="list-disc pl-5 marker:text-indigo-300">
            <li>
              Collaborated on an eLearning platform using Laravel, Vue.js, and
              Ionic, optimizing performance and expanding core feature sets.
            </li>
            <li>
              Created test plans and tested for enhancements and fixes on
              applications.
            </li>
            <li>
              Developed interactive promotional games and Augmented Reality (AR)
              applications using Construct 2 and Kinect to drive user
              engagement.
            </li>
          </ul>
        </>
      ),
      tech: [],
    },
  ];

  return (
    <section
      id="experience"
      className="container mx-auto py-24 px-6 bg-primary overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeInY}
          viewport={{ once: true, amount: 0.2 }}
        >
          {" "}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-main text-center">
            Work{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="space-y-12 w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Left Column: Date and Company */}
              <motion.div
                className="md:w-1/3 flex flex-col pt-2 text-left md:text-right"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
              >
                <span className="text-lg md:text-xl font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                  {exp.date}
                </span>
                <span className="text-secondary font-medium text-md lg:text-lg">
                  {exp.company}
                </span>
              </motion.div>

              {/* Right Column: Content */}
              <div className="md:w-2/3 pt-1">
                <motion.div className="" variants={fadeInRight}>
                  <Card
                    key={index}
                    index={index}
                    title={exp.role}
                    cardBody={exp.description}
                    data={exp.tech}
                    renderItem={(tech) => <Pill text={tech} />}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
