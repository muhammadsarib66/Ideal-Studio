import { useState } from 'react'
import logo from '../assets/logoIdeal.svg'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false)
  const NavLinks = ["home", 'about us ' , 'projects',  'contact us']
  
  const HandleOpen = () => {
    console.log('click')
    setIsOpen(!isOpen)
    console.log(isOpen)
  }  
  return (
    <>
    <section className="hidden  md:flex items-center justify-between position fixed z-20 py-2 px-8  backdrop-blur-lg w-full   "
    >
      <div>
        <img src={logo} className='w-24 ' alt="logo" />
      </div>
      <div className='flex gap-8 text-white font-semibold text-base  capitalize'>
          {
            NavLinks.map((item,ind )=>(
            <p key={ind} className='hover:text-purple-500 cursor-pointer' >
              {item}
                </p>
            ))
          }
      </div>
      <div>
      <Button title="Book Now"  style='rounded-full px-8 py-4 cursor-pointer bg-gradient-to-r from-purple-600 to-red-600 hover:text-black hover:bg-gradient-to-r hover:from-[#9023B5] hover:to-[#DE5235] text-white'/>

      </div>
    </section>
    {/*  responsive navbar */}
          <section  className='content md:hidden'>
          <div className='backdrop-blur-md fixed flex items-center justify-between z-20 p-4  w-full '>

          <div>
            <img src={logo} alt="logo" className='w-24 mx-auto' /> 
            </div>
            <div  onClick={HandleOpen}> 
            <i  className="text-white text-4xl  fa-solid fa-bars"></i>
              </div>
          </div>
             <div className={`${isOpen ? "top-0 duration-300" : "top-[-1000%] duration-1000"} pt-8 absolute p-4 flex justify-between  z-20 w-full bg-white h-auto`}>
                <div className='flex gap-6 flex-col '>

                {NavLinks.map((item,index)=>(
                  <div key={index} className='flex flex-col gap-8'>
                    <p className='capitalize '>
                      {item}
                    </p>
                    </div>
                ))}
             </div>
                    <div>
                      <i onClick={()=>setIsOpen(false)} className="text-black text-3xl fa-solid fa-xmark"></i>
                      </div>
             </div>
           
          </section>
    </>

  )
}

export default Navbar