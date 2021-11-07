// hooks/useCounter.spec.ts
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  const initialValue = 1;
  const { result } = renderHook(() => useCounter(initialValue));

  test("countの初期値が設定されている", () => {
    expect(result.current.count).toBe(initialValue);
  });

  test("incrementを呼ぶと、countが期待通りの値に変更される", () => {
    expect(result.current.count).toBe(1);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(2);
  });
});
