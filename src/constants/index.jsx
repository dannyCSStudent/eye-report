import { AiOutlineBarChart, AiOutlineFileText, AiOutlineHome, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { BsFillImageFill, BsPerson, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

export const navLinks = [
    {
      id: "local",
      title: "LOCAL",
    },
    {
      id: "state",
      title: "STATE",
    },
    {
      id: "country",
      title: "COUNTRY",
    },
    {
      id: "world",
      title: "WORLD",
    }
  ];

  const sidebarLinks = [
    { title: "Home",
      id: "home",
      icon: <AiOutlineHome /> 
    },
    { title: "Pages",
      id: "page" ,
      icon: <AiOutlineFileText />
    },
    { title: "Media",
      id: "media",
      spacing: true,
      icon: <BsFillImageFill />
    },
    { title: "Projects", 
      id: "projects",
      submenu: true, 
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenuItems: [
        { title: "Submenu 1",
          id: "submenu-1" 
        },
        { title: "Submenu 2",
          id: "submenu-1" 
        },
        { title: "Submenu 3",
          id: "submenu-1"
       },
      ],
    },
    { title: "Analytics",
      id: "analytics",
      icon: <AiOutlineBarChart />
    },
    { title: "Inbox",
      id: "inbox",
      icon: <AiOutlineMail />
    },
    { title: "Profile",
      id: "profile",
      spacing: true,
      icon: <BsPerson />
    },
    { title: "Setting",
      id: "title",
      icon: <AiOutlineSetting /> 
    },
    { title: "Logout",
      id: "logout",
      icon: <AiOutlineLogout /> 
    },

  ]

  export {
    sidebarLinks
  }