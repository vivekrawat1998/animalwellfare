import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({ item, color = "#BEFD95", textColor = "black"}) => {
    return (
        <Link to="/donate"
            className={`${color} group  px-10 py-2 rounded-sm  text-${textColor} cursor-pointer gap-2 text-right   transition-all duration-500 flex items-center justify-between overflow-hidden`}
            style={{ backgroundColor: color }}
        >
            {item}
        </Link>
    );
};

export default Button;
