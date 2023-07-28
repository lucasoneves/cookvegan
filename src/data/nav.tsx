import { IoRestaurantOutline, IoHomeOutline, IoShareOutline, IoMailOutline, IoPersonCircleOutline } from "react-icons/io5";


export default [
  {
    "title": "Home",
    "path": "/",
    "icon": <IoHomeOutline />
  },
  {
    "title": "Recipes",
    "path": "/recipes",
    "icon": <IoRestaurantOutline />
  },
  {
    "title": "Send Recipe",
    "path": "/send-recipe",
    "icon": <IoShareOutline />
  },
  {
    "title": "Contact",
    "path": "/contact",
    "icon": <IoMailOutline />
  },
  // {
  //   "title": "Support",
  //   "path": "/support"
  // },
  // {
  //   "title": "Store",
  //   "path": "/store"
  // },
  // {
  //   "title": "Newsletter",
  //   "path": "/newsletter"
  // },
  {
    "title": "Login",
    "path": "/login",
    "icon": <IoPersonCircleOutline />
  }
]
