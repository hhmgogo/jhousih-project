import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

// Interface 被稱作介面或是接口，它主要在與 Class 約定行為，但 Interface 只描述有哪些 Method 和 Property ，不包含怎麼執行。
//宣告後，再去class 實作
interface Props {
    nav: boolean; //這是做關鍵字宣告，宣告 name這關鍵字為string
    closeNav: () => void; //這是宣告openNav為一個方法
}

//將interface的Property 和method 帶入並實作
const MobileNav = ({ nav, closeNav }: Props) => {

    //判斷nav值，true 展開側邊選單，false不展開側邊選單
    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

    return (
        <div className={`fixed  ${navAnimation} tansform transition-all duration-300 left-0 right-0 bottom-0 z-[10000] bg-secondaryColor`}>
            <div className='w-[100pvw] h-[100vh] flex flex-col items-center justify-center '>
                <div className='nav-link-mobile'>HOME</div>
                <div className='nav-link-mobile'>SERVUCES</div>
                <div className='nav-link-mobile'>ABOUT</div>
                <div className='nav-link-mobile'>PROJECT</div>
                <div className='nav-link-mobile'>BOLG</div>
                <div className='nav-link-mobile'>CONTACT</div>
            </div>
            <div
                onClick={closeNav}
                className='absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-textColor'>
                <XMarkIcon />
            </div>
        </div>
    )
}

export default MobileNav