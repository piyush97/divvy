import React from 'react';
import styles from './Switcher.module.css';

const Switcher = ({ className, toggle, value, id, onLabel, offLabel,  ...rest}) => {
    console.log('switcher value:',value)
     return (
        <label htmlFor={id} className={`${styles.Switcher} flex items-center cursor-pointer`} {...rest}>
            <div className="relative">
                <input type="checkbox" onClick={toggle} checked={value} id={id} className="sr-only" />
                <span className={`block ${value ? 'bg-gray-500': 'bg-gray-200'} w-8 h-5 rounded-full transition duration-300`} />
                <span className={`${styles.dot} absolute left-1 top-1 bg-gray-400 w-3 h-3 rounded-full transition duration-300`} />
            </div>
            <div className={`ml-3 ${value ? 'text-gray-400' : 'text-pink-500'} font-sm`}>
                {value ? onLabel : offLabel}
            </div>
        </label>
    );
}

export default Switcher;
