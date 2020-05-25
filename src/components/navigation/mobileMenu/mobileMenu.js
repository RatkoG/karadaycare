import React from "react"
import { useTransition } from "react-spring"
import HamburgerMenu from "./hamburgerToggle"
import SideDrawer from "../mobileMenu/sideDrawer"
const MobileMenu = ({ menuOpened, setMenuOpened }) => {
  const transitions = useTransition(menuOpened, null, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
  })
  return (
    <>
      <HamburgerMenu
        menuOpened={menuOpened}
        toggleChange={() => setMenuOpened(!menuOpened)}
      />
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <SideDrawer
              key={key}
              style={props}
              setMenuOpened={() => setMenuOpened(false)}
            />
          )
      )}
    </>
  )
}
export default MobileMenu
