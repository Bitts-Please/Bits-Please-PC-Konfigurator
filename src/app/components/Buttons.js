// components/Button.js
'use client'


const Button = ({ onClick, children }) => {
    return (
      <button onClick={onClick} className="btn">
        {children}
      </button>
    );
  };
  
  export default Button;
  