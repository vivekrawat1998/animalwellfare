import React from 'react';

const Button = ({ item, color = "#BEFD95", textColor = "black"}) => {
    return (
        <div
            className={`${color} group  px-10 py-2  text-${textColor} cursor-pointer gap-2 text-right   transition-all duration-500 flex items-center justify-between overflow-hidden`}
            style={{ backgroundColor: color }}
        >
            {item}
        </div>
    );
};

export default Button;
