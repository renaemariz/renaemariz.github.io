"use client";
import React from "react";
import Card from "./Card";
import Pill from "./Pill";
import { fadeInLeft, fadeInY, staggerContainer } from "@/lib/motions";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: "project-1",
      title: "Admin Portal",
      subTitle: "Cafe Solutions - Australia",
      description: (
        <>
          <p className="mt-1 mb-2">
            <strong>The Build: </strong> Architected a greenfield portal for
            managing merchant configurations, card management, reports and
            complex menu data.
          </p>
          <p className="mt-1 mb-2">
            <strong>Custom UI: </strong>
            Engineered a responsive, data-heavy interface using Tanstack Table,
            prioritizing high-precision merchant modifications and
            administrative efficiency.
          </p>
          <p className="my-1">
            <strong>Data Sync: </strong>
            Leveraged RTK Query for handle API requests and cache management,
            ensuring data stayed in sync across the merchant platform.
          </p>
        </>
      ),
      tech: [
        "React",
        "Nextjs",
        "Tanstack Table",
        "RTK Query",
        "Recharts",
        "Storybook",
        "TailwindCSS",
      ],
      slides: [
        {
          id: 1,
          url: "/assets/images/admin-portal-img1.png",
          alt: "Admin Portal Feature Card Management",
        },
        {
          id: 2,
          url: "/assets/images/admin-portal-img2.png",
          alt: "Admin Portal Feature Merchants Table",
        },
        {
          id: 3,
          url: "/assets/images/admin-portal-img3.png",
          alt: "Admin Portal Feature Reports",
        },
      ],
    },
    {
      id: "project-2",
      title: "Customer Portal",
      subTitle: "Casino Marker Technology - Las Vegas",
      description: (
        <>
          <p className="mt-1 mb-2">
            <strong>The Build: </strong> Managed the frontend code during a
            visual rebranding and technical updates of the customer-facing site.
          </p>
          <p className="mt-1 mb-2">
            <strong>Data Reliability: </strong>
            Leveraged RxJS to resolve data update issues, ensuring UI
            synchronization and consistent state management across dynamic page
            configurations.
          </p>
          <p className="my-1">
            <strong>Rebrand Architecture: </strong>
            Engineered a modular SCSS/Component structure to facilitate a rapid,
            low-friction rebrand, ensuring design consistency across the entire
            platform with minimal code changes.
          </p>
        </>
      ),
      tech: ["Angular", "RxJS", "NG-ZORRO", "TypeScript", "Chartjs"],
      slides: [
        {
          id: 4,
          url: "/assets/images/customer-portal-img1.png",
          alt: "Customer Portal Feature Create Account",
        },
        {
          id: 5,
          url: "/assets/images/customer-portal-img2.png",
          alt: "Customer Portal Feature Player Input Details",
        },
        {
          id: 6,
          url: "/assets/images/customer-portal-img3.png",
          alt: "Customer Portal Feature Dashboard",
        },
      ],
    },
    {
      id: "project-3",
      title: "Merchant App",
      subTitle: "Financial Services - Bahamas",
      description: (
        <>
          <p className="mt-1 mb-2">
            <strong>The Build: </strong> Developed an App for Android and Sunmi
            POS hardware, enabling merchants or agents to facilitate mobile
            top-ups, QR generation and scanning, utility payments and other
            transactions.
          </p>
          <p className="mt-1 mb-2">
            <strong>API Integration: </strong>
            Integrated APIs for real-time and QR transactions.
          </p>
          <p className="my-1">
            <strong>Reporting & Printing: </strong>
            Created a module to generate daily transaction logs and
            reconciliation summaries for on-device display and receipt printing.
          </p>
        </>
      ),
      tech: [
        "Ionic",
        "Capacitor",
        "Angular",
        "Typescript",
        "SCSS",
        "Google Play",
        "Sunmi Hardware",
      ],
      slides: [
        {
          id: 7,
          url: "/assets/images/mobile-app-img1.png",
          alt: "Mobile App Feature Reports",
        },
        {
          id: 8,
          url: "/assets/images/mobile-app-img2.png",
          alt: "Mobile App Feature QR Generation",
        },
        {
          id: 9,
          url: "/assets/images/mobile-app-img3.png",
          alt: "Mobile App Feature Mobile Topup",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="container mx-auto py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeInY}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-main text-center">
            Project{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={fadeInLeft}>
              <Card
                key={project.id}
                galleryId={project.id}
                index={index}
                title={project.title}
                subTitle={project.subTitle}
                cardBody={project.description}
                data={project.tech}
                renderItemStyle="fill"
                renderItem={(tech) => <Pill text={tech} />}
                slides={project.slides}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
