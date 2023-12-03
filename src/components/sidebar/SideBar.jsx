import React from 'react'
import { motion } from 'framer-motion'
import { useState,useEffect } from 'react'

import './sidebar.scss'
import ToggleButton from './ToggleButton/ToggleButton'
import Links from './Links/Links'

const SideBar = () => {

    const [open, setOpen] = useState(false)
    
    const variants={
        open:{
          clipPath:"circle(1220px at 50px 50px)",
          transition:{
            type:"spring",
            stiffness:20,
          }
        },
        closed:{clipPath: "circle(25px at 50px 50px)",
        transition:{
          delay:0.2,
          type:"spring",
          stiffness:400,
          damping:40
        }},
          
    }


  return (
    <motion.div className='sidebar' 
    animate={open? "open": "closed"} 
    variants={variants}
    >
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default SideBar