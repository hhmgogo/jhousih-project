import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'


// Interface 被稱作介面或是接口，它主要在與 Class 約定行為，但 Interface 只描述有哪些 Method 和 Property ，不包含怎麼執行。
//宣告後，再去class 實作
interface Props {
  //name:string; //這是做關鍵字宣告，宣告 name這關鍵字為string
  openNav: () => void; //這是宣告openNav為一個方法
}


const Nav = ({ openNav }: Props) => {
  return (
    // bg-[#141c27]
    <div className=' w-[100%] top-0 h-[12vh] bg-backgroundColor shadow-md '>
      <div className=' flex items-center justify-between w-[80%]  mx-auto h-[100%] '>
        <h1 className=' flex-[0.6] cursor-pointer text-[25px] text-lightColor font-bold'>
          WEB
          <span className='text-textColor  '>DEV</span>
        </h1>
        <div className='nav-link '>HOME</div>
        <div className='nav-link '>SERVICES</div>
        <div className='nav-link '>ABOUT</div>
        <div className='nav-link '>PROJECT</div>
        <div className='nav-link '>BLOG</div>
        <div className='nav-link '>CONTACT</div>
        <div onClick={openNav}>
          {/* 漢堡 */}
          <Bars3Icon className=' w-[2rem] md:hidden h-[2rem] cursor-pointer text-fontLightColor ' />
        </div>
      </div>
    </div>
  )
}

export default Nav

// https://youtu.be/6jFFkGU-ZBU?list=PLMgko00NtR43Ro3xf9e_HNqr8od_3Np6v&t=1689
//nav 完成