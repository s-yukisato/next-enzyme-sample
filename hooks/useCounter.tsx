import React from "react";

export type UseCounterReturnType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = (initialValue: number): UseCounterReturnType => {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + 1);
  }
  const decrement = React.useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return { count, increment, decrement };
};
