import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'
const Education = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
  >
    <div className="py-12 font-titleFont">
    <p className="text-sm text-designColor tracking-[4px]">2000-2023</p>
    <h2 className="text-4xl font-bold">EduCation Qualification</h2>
  </div>
  <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10" >
    <ResumeCard
      title="B.tech In Electrical Engineering"
      subtitle="Swami Keshvanand Institute of Technology, Management & Gramothan, Jaipur (2016-2020)"
    />
    <ResumeCard
      title="High Secondary School"
      subtitle="Saurabh Senior Secondary School, Baran (2013-2014)"
    />
    <ResumeCard
      title="Secondary School"
      subtitle="Saurabh Senior Secondary School, Baran (2015-2016)"
    />
  </div>
  </motion.div>
  )
}

export default Education