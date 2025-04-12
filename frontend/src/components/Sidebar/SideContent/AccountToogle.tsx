import React, { useState } from 'react'
import { BsChevronExpand } from "react-icons/bs";
import PopoverCustom from './AccountToogle/PopoverCustom';

const AccountToogle: React.FC = () => {
    const [isPopoverVisible, setPopoverVisible] = useState(false);
    console.log("🚀 ~ isPopoverVisible:", isPopoverVisible)

    const togglePopover = () => {
        setPopoverVisible((prevState) => !prevState);
    };
    return (
        <div className='relative'>
            <div className="border-b mt-2 pb-4 border-stone-300">
                <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
                    <img src="https://api.dicebear.com/9.x/notionists/svg" alt="avatar" className='size-8 rounded shrink-0 bg-violet-500 shadow' />
                    <div className='text-start'>
                        <span className='text-sm font-semibold block'>Bivek Prasad Joshi</span>
                        <span className='text-xs block text-stone-500'>bvkjosi@3@gmail.com</span>
                    </div>
                    <BsChevronExpand className='text-xs ml-auto mr-2' onClick={togglePopover} />
                    <PopoverCustom isPopoverVisible={isPopoverVisible} />
                </button>

            </div>
        </div>
    )
}

export default AccountToogle