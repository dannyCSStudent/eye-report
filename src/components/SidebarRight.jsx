import { useState} from "react";
import { BsArrowRightShort } from 'react-icons/bs'
import { logo } from '../assets';

const SidebarRight = () => {
    const [open, setOpen] = useState(true);  
    return (
        <div className={`bg-primary p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
            <BsArrowRightShort className={`bg-primary text-white text-3xl rounded-full absolute -left-3 top-9 border border-black-100 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}  />
            <div className="flex justify-end">
              <h1 className={`text-white origin-left duration-300 font-medium text-2xl ${!open && "scale-0"}`}>EYE | REPORT</h1>
              <img src={logo} className={`h-10 text-4xl rounded cursor-pointer block float-right ml-2 duration-500 ${open && "rotate-[360deg]"}`} />
            </div>
    
          </div>
        
            
    )
}

export default SidebarRight;