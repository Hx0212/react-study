import Child from "./child.tsx";
import { useRef } from "react";

interface ChildRef {
  name: string;
  count: number;
  increment: () => void;
  decrement: () => void;
  isVaild: () => void;
  reset: () => void;
}

const UseImperativeHandle = () => {
  const childRef = useRef<ChildRef | null>(null);

  const showRefInfo = () => {
    console.log(childRef.current);
  };

  return (
    <>
      <h2>我是父组件</h2>
      <button onClick={showRefInfo}>获取子组件信息</button>
      <button onClick={() => childRef.current?.increment()}>
        操作子组件+1
      </button>
      <button onClick={() => childRef.current?.decrement()}>
        操作子组件-1
      </button>
      <Child ref={childRef} />
      <button onClick={() => childRef.current?.reset()}>重置表单</button>
      <button onClick={() => console.log(childRef.current?.isVaild())}>
        验证表单
      </button>
    </>
  );
};

export default UseImperativeHandle;
