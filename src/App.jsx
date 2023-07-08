
import { useState } from "react"
import { BrowserRouter } from "react-router-dom";
import { Navbar, SidebarLeft, Content, Footer, SidebarRight } from "./components";


import { logo } from './assets';

const App = () => {
  const [open, setOpen] = useState(true);  
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <div>
          <Navbar />
        </div>

        <div className="flex justify-between flex-auto" >
          <SidebarLeft />
          <div>
            <Content />
          </div>
          <SidebarRight />
        </div>


        <div className="flex flex-col inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App
