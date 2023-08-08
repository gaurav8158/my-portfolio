import React from 'react'
import { motion } from 'framer-motion'
import Expcard from './Expcard'
const Experience = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="py-12 font-titleFont flex gap-20"
  >
    <div>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2019-2023</p>
        <h2 className="text-4xl font-bold">Experience</h2>
      </div>
      <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <Expcard
          title="Intership"
          subTitle="Full Stack Development Bootcamp (2022-2023)" 
          result="ACCIOJOB"
          des="Proficient in building web applications using HTML, CSS, JavaScript, React, and Node.js. Completed a rigorous full-stack web development bootcamp with Acciojob."
        />
        <Expcard
          title="Intership"
          subTitle="NTPC,GAS POWER PLANT (2019)"
          result="ANTA"
          des="Assisted in daily operations and maintenance tasks, Gained practical knowledge of gas power plant systems"
        />
      </div>
    </div>
  </motion.div>
  )
}

export default Experience