import React, { useState } from "react";

const Button = () => {
  const [text, setText] = useState("test button");
  return (
    <>
      <p id='btnTitle'>{text}</p>
      <button className='test-me' onClick={() => setText("I Was Clicked!")}>
        Click Me!
      </button>
    </>
  );
};

export default Button;
