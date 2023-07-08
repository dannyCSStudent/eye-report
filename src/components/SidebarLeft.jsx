import { useState} from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from 'react-icons/bs';
import { logo } from '../assets';
import { sidebarLinks } from '../constants'

const SidebarLeft = () => {
    const [open, setOpen] = useState(true);  
    const [submenuOpen, setSubmenuOpen] = useState(false);
    
    return (
        <div className={`bg-primary  p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-primary text-white text-3xl rounded-full absolute -right-3 top-9 border border-black-100 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}  />
            <div className="inline-flex">
              <img src={logo} className={`h-10 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
              <h1 className={`text-white origin-left duration-300 font-medium text-2xl ${!open && "scale-0"}`}>EYE | REPORT</h1>
            </div>

            <div className={`flex items-center rounded-md bg-red-200 mt-6 ${!open ? "px-2.5" : "px-4"} py-2`} >
                <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
                <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}/>
            </div>
            <ul className="pt-2">
                {sidebarLinks.map((link) => (
                    <>
                        <li key={link.id} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md ${link.spacing ? "mt-9" : "mt-2"}`}>
                            <span className="text-2xl block float-left">
                                {link.icon}
                            </span>
                            <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{link.title}</span>
                            {link.submenu && open && (
                                <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen) } />
                            )}
                        </li>
                        {link.submenu && submenuOpen && open && (
                            <ul>
                            {link.submenuItems.map((item) => (
                                <li key={link.id} className="`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white rounded-md">
                                    {item.title}
                                </li>
                            ))}
                            
                            </ul>
                        )}
                        
                    </>   
                ))}
            </ul>
        </div>
        
            
    )
}

export default SidebarLeft;