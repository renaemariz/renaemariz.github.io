import { fadeInY, staggerContainer } from "@/lib/motions";
import React from "react";
import { motion } from "framer-motion";

interface TableRow {
  label: string;
  value: React.ReactNode;
}

interface InfoTableProps {
  title: string;
  data: TableRow[];
}

const InfoTable = ({ title, data }: InfoTableProps) => {
  return (
    <>
      <motion.div
        className="w-full overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] font-sans"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header Area  */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
          <motion.h2
            className="text-sm text-slate-900 dark:text-slate-100 font-bold uppercase"
            variants={fadeInY}
          >
            {title}
          </motion.h2>
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></span>
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <motion.tbody
            className="divide-y divide-slate-100 dark:divide-slate-800"
            variants={staggerContainer}
          >
            {data.map((row, index) => (
              <motion.tr
                key={index}
                variants={fadeInY}
                className="group animate-row hover:bg-slate-50/50 dark:hover:bg-slate-800/30
                flex flex-col md:table-row"
              >
                {/* Label Column */}
                <td className="py-5 px-6 md:w-1/3 text-[11px] font-bold text-slate-500 dark:text-slate-200 uppercase tracking-wider border-r border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20 ">
                  {row.label}
                </td>
                {/* Value Column */}
                <td className="py-5 px-6 text-slate-900 dark:text-slate-100 text-sm leading-relaxed font-medium">
                  {row.value}
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>
    </>
  );
};

export default InfoTable;
