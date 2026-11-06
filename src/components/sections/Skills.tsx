import React from "react";
import { motion } from "framer-motion";
import { fadeInRightToLeft, fadeInY, staggerContainer } from "@/lib/motions";
import { Icon } from "@iconify/react";

// Define the structure for our skill categories
interface Skill {
  name: string;
  icon: string;
}

const skillData: Skill[] = [
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Angular", icon: "logos:angular-icon" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Javascript (ES6+)", icon: "logos:javascript" },
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS", icon: "logos:css" },
  { name: "Ionic", icon: "logos:ionic" },
  { name: "Capacitor", icon: "logos:capacitorjs-icon" },
  { name: "Cordova", icon: "simple-icons:apachecordova" },
  { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
  { name: "NG-ZORRO", icon: "logos:ant-design" },
  { name: "Storybook", icon: "logos:storybook-icon" },
  { name: "shadcn", icon: "simple-icons:shadcnui" },
  { name: "Angular Material", icon: "simple-icons:angular" },
  { name: "SCSS", icon: "logos:sass" },
  { name: "RTK Query", icon: "logos:redux" },
  { name: "Chartjs", icon: "logos:chartjs" },
  { name: "Recharts", icon: "ri:bar-chart-grouped-line" },
  { name: "Tanstack Table", icon: "lucide:table-2" },
  { name: "Redux", icon: "logos:redux" },
  { name: "Webpack", icon: "logos:webpack" },
  { name: "Axios", icon: "simple-icons:axios" },
  { name: "RESTful APIs", icon: "eos-icons:api" },
  { name: "AWS S3", icon: "logos:aws-s3" },
  { name: "App Store", icon: "logos:apple-app-store" },
  { name: "Google Play", icon: "logos:google-play-icon" },
  { name: "Jira", icon: "logos:jira" },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto py-24 px-6 min-h-[60vh]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeInY}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-main  text-center">
            Technical{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="h-1 w-20 mt-4 bg-linear-to-r from-grad-from to-grad-to rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div className="grid grid-cols-1 gap-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-3 lg:grid-cols-7 text-center gap-4">
              {skillData.map((skill, i) => (
                <motion.div
                  variants={fadeInRightToLeft}
                  key={i}
                  className="text-sm text-secondary rounded-2xl bg-slate-200 dark:bg-slate-800/50 icon-wrapper"
                >
                  <div className="icon-image-container">
                    <Icon icon={skill.icon} width="32" height="32" />
                  </div>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
