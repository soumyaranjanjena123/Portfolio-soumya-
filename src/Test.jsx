import React, { useState } from 'react'
import {motion, spring} from 'framer-motion'

const Test = () => {

  const[open, setOpen] =useState(false)

  const varaints ={
    visible:{opacity:1, x:300, transition:{staggerChildren:0.2 }},
    hidden:{opacity:0, },
  }

  const items=["item1", "item2", "item3", "item4"]


  return (
    <motion.div className='course'>
        {/* <motion.div className="box"
        // initial={{opacity:0.5, scale:0.5}} 
        // animate={{opacity:1, scale:1, y:200}}
        //  transition={{duration:2}}
        //  whileInView={{opacity:1, scale:2}}
        variants={varaints}
        // initial= "hidden"
        // animate="visible"

        animate={open? "visible":"hidden"}
        
        >

         </motion.div>
         <button onClick={()=>setOpen(prev=>!prev)}>Click Me</button>
         
         
        */}

<motion.ul  variants={varaints} initial="hidden" animate="visible">
{items.map((item)=>(<motion.li key={item} variants={varaints}>{item}

</motion.li>
))}
</motion.ul>
          


    </motion.div>
  )
}

export default Test