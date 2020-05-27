import React, { useState, useEffect } from "react";

export default (props) => {
  const {
    interval = 1000,
    clicks = 4,
    onMash,
    onClick,
    resetOnMash = true,
  } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handler = setTimeout(() => setCount(0), interval);
    if (count >= clicks) {
      if (onMash) {
        onMash();
      }
      if (resetOnMash) {
        setCount(0);
      }
    }
    return () => clearTimeout(handler);
  }, [count]);

  const onClickFunctions = () => {
    if (onClick) {
      onClick();
    }
    setCount(count + 1);
  };
  return (
    <button {...props} onClick={onClickFunctions}>
      {props.children}
    </button>
  );
};
