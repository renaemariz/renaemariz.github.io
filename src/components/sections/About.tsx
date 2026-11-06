import React from "react";
import InfoTable from "../Table";
import { motion } from "framer-motion";
import { fadeInY } from "@/lib/motions";
import Pill from "../Pill";
const About = () => {
  const aboutData = [
    {
      label: "Expertise",
      value: (
        <span className="font-semibold text-secondary">
          Senior Frontend Developer
        </span>
      ),
    },
    {
      label: "Philosophy",
      value: "Code should be as elegant as the interfaces it powers.",
    },
    {
      label: "Architecture",
      value: (
        <div className="flex gap-3">
          {["React", "Next.js", "Angular"].map((tech) => (
            <span key={tech} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
              {tech}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: "Delivery",
      value: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-bold text-secondary uppercase">
              Enterprise Web
            </p>
            <p className="text-sm text-secondary">Administrative Dashboards</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-secondary uppercase">
              Mobile App Fintech
            </p>
            <p className="text-sm text-secondary">
              Integrated Payment Solutions
            </p>
          </div>
        </div>
      ),
    },
    {
      label: "Strategy",
      value:
        "Modernizing legacy platforms into scalable, maintainable frontend solutions.",
    },

    {
      label: "Environment",
      value: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-secondary">
              Work from Home Preferred • Minimal Hybrid
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Metro Manila Based", "Modern Workspace", "Specialty Coffee"].map(
              (tag) => (
                <Pill key={tag} text={tag} />
              ),
            )}
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="about" className="container mx-auto py-24 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeInY}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-main text-center">
            About{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              me
            </span>
          </h2>
        </motion.div>

        <InfoTable
          title="Professional Specification"
          data={aboutData}
        ></InfoTable>
      </div>
    </section>
  );
};

export default About;
