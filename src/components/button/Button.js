import React from "react";

const Button = ({onClick, className,type="button",bgColor="primary" ,children}) => {
    let bgClassName='bg-primary'
    switch(bgColor){
        case 'primary':
            bgClassName = "bg-primary"
            break;
        case 'secondary':
            bgClassName = "bg-secondary"
            break;
        default:
            bgClassName = "bg-primary"
            break;
    }
  return (
    <>
      <button
      type={type}
        className={`text-white bg-primary w-full font-bold rounded-lg p-3 ${className} ${bgClassName}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
