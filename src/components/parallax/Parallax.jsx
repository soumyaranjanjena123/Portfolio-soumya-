import React from 'react'
import { useRef } from 'react'

import { motion,useScroll, useTransform } from 'framer-motion'
import'./parallax.scss'


const Parallax = ({type}) => {

    const ref=useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]

    })

    const yBg = useTransform(scrollYProgress,[0,1], ["0%", "200%"] )
    const ytext = useTransform(scrollYProgress,[0,1], ["0%", "500%"] )


  return (
    <div className='parallax' ref={ref} style={{background:type==="services"? "linear-gradient(180deg, #111132, #0c0c1d)":"linear-gradient(180deg, #111132, #505064)"}}>

        <motion.h1 style={{y:ytext}}>{type === "services"? "What we Do" : "What we Did?"}</motion.h1>
        
        <motion.div className="mountains">
            {/* <img src="public\assests\mountains.png" alt="" /> */}
            
        </motion.div>
        <motion.div style={{x:yBg, backgroundImage:`url(${type === "services"? "/planets.png":"/sun.png"})`}} 
        
        
        className="planets">
            {/* <img src="public\assests\planets.png" alt="" /> */}
        </motion.div>
        <motion.div style={{x:yBg}} className="stars">
        {/* <img src="public\assests\stars.png" alt="" /> */}
        </motion.div>
        
    </div>
  )
}

export default Parallax