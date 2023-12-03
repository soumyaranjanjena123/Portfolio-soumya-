import React from 'react'
import './navbar.scss'
// import Test from '../../test'
import { motion } from 'framer-motion'
import SideBar from '../sidebar/SideBar'

const Navbar = () => {
  return (<>
    <SideBar/>
    <div className='navbar'>
      
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}>Soumya Jena</motion.span>
            <div className="social">
                <a href="#"><img src="public\assests\facebook.png" alt="" /></a>
                <a href="#"><img src="public\assests\instagram.png" alt="" /></a>
                <a href="#"><img src="public\assests\youtube.png" alt="" /></a>
                <a href="#"><img src="public\assests\dribbble.png" alt="" /></a>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Navbar