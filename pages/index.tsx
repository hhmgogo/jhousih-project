
import React, { useState } from 'react'
import Nav from '@/Components/Nav'
import MobileNav from '@/Components/MobileNav';


const HomePage = () => {

  // 側邊選單
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className=' overflow-hidden' >
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
      </div>
    </div>
  )
}

export default HomePage