
import { useState } from "react"
import { BrowserRouter } from "react-router-dom";
import { Navbar, Sidebar, Content, Footer } from "./components";
import { BsArrowRightShort } from 'react-icons/bs'
import { BsArrowLeftShort } from 'react-icons/bs';
import { logo } from './assets';

const App = () => {
  const [open, setOpen] = useState(true);  
  return (
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <div>
          <Navbar />
        </div>

        <div className="flex justify-between">
          <div className={`bg-primary  p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-primary text-white text-3xl rounded-full absolute -right-3 top-9 border border-black-100 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}  />
            <div className="inline-flex">
              <img src={logo} className={`h-10 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
              <h1 className={`text-white origin-left duration-300 font-medium text-2xl ${!open && "scale-0"}`}>EYE | REPORT</h1>
            </div>
            <Sidebar />
          </div>
          <div>
            <Content />
          </div>
          <div className={`bg-primary p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
            <BsArrowRightShort className={`bg-primary text-white text-3xl rounded-full absolute -left-3 top-9 border border-black-100 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}  />
            <div className="flex justify-end">
              <h1 className={`text-white origin-left duration-300 font-medium text-2xl ${!open && "scale-0"}`}>EYE | REPORT</h1>
              <img src={logo} className={`h-10 text-4xl rounded cursor-pointer block float-right ml-2 duration-500 ${open && "rotate-[360deg]"}`} />
            </div>
            <Sidebar />
          </div>
        </div>


        <div className="flex flex-col inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App
