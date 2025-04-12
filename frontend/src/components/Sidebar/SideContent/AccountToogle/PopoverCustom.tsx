import React from 'react';

interface PopoverCustomProps {
    isPopoverVisible: boolean
}
const PopoverCustom: React.FC<PopoverCustomProps> = ({ isPopoverVisible }) => {
    return (
        <div className='absolute top-12 left-1 z-100'>
            {isPopoverVisible && (
                <div
                    id="popover-right"
                    role="tooltip"
                    className=" inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                >
                    <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Popover right</h3>
                    </div>
                    <div className="px-3 py-2">
                        <p>And here's some amazing content. It's very engaging. Right?</p>
                    </div>
                    <div data-popper-arrow></div>
                </div>
            )}
        </div>
    );
};

export default PopoverCustom;
