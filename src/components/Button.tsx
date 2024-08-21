import React, { useState } from "react";

export const Button = ({ title }: { title: string }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{title}</p>
      <div>Count: {count};</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
export default Button;
