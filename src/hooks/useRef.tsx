import { useRef, useState } from "react";

const UseRef = () => {
  const div = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    console.log(div.current);
  };

  const [count, setCount] = useState(0);
  let num = useRef(0);
  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
    num.current = count;
  };

  let timer: NodeJS.Timeout | null = useRef(null);
  const [time, setTime] = useState(0);
  return (
    <>
      <div ref={div}></div>
      <button onClick={handleClick}>Click me</button>
      <div>
        {count}|{num.current}
      </div>
      <button onClick={handleAdd}>Increment</button>
      <div>计时器</div>
      <div>{time}</div>
      <button
        onClick={() => {
          timer.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
          }, 1000);
        }}
      >
        开始计时
      </button>
      <button
        onClick={() => {
          if (timer.current) {
            clearInterval(timer.current);
            timer.current = null;
          }
        }}
      >
        停止计时
      </button>
    </>
  );
};

export default UseRef;
