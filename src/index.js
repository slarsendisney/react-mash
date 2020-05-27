import React, { useState, useEffect } from "react";

export default (props) => {
  const { interval, clicks, onMash, onClick } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handler = setTimeout(() => setCount(0), interval);
    if (count >= clicks) {
      onMash();
      setCount(0);
    }
    return () => clearTimeout(handler);
  }, [count]);

  const onClickFunctions = () => {
    onClick();
    setCount(count + 1);
  };
  return (
    <button {...props} onClick={onClickFunctions}>
      {props.children}
    </button>
  );
};
