import React from "react";

type CounterProps = {
  initialValue: number;
};

export type UseCounterReturnType = {
    count: number;
    increment: () => void;
    decrement: () => void;
  };

const useCounter = ({ initialValue }: CounterProps): UseCounterReturnType => {
  const [count, setCount] = React.useState(initialValue);

  const increment = React.useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  const decrement = React.useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  return { count, increment, decrement };
};

export default useCounter;
