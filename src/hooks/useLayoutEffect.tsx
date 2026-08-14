import { useLayoutEffect, useEffect, useState } from "react";

/*
区别(useLayoutEffect/useEffect)

| 区别       | useLayoutEffect                    | useEffect                      |
|-----------|-----------------------------------|--------------------------------|
| 执行时机   | 浏览器完成布局和绘制 之前 执行副作用 | 浏览器完成布局和绘制 之后 执行副作用 |
| 执行方式   | 同步执行                           | 异步执行                        |
| DOM渲染   | 阻塞DOM渲染                        | 不阻塞DOM渲染                   |
*/

const UseLayoutEffect = () => {
  const [count, setCount] = useState(0);
  //不阻塞DOM
  // useEffect(() => {
  //   for (let i = 0; i < 50000; i++) {
  //     //console.log(i);
  //     setCount((count) => count + 1);
  //   }
  // }, []);
  //阻塞DOM
  // useLayoutEffect(() => {
  //    for (let i = 0; i < 50000; i++) {
  //       //console.log(i);
  //       setCount(count => count + 1)
  //    }
  // }, []);

  // 使用 useEffect 实现动画效果
  // useEffect(() => {
  //   const app1 = document.getElementById("app1") as HTMLDivElement;
  //   app1.style.transition = "opacity 3s";
  //   app1.style.opacity = "1";
  // }, []);

  // 使用 useLayoutEffect 实现动画效果
  // useLayoutEffect(() => {
  //   const app2 = document.getElementById("app2") as HTMLDivElement;
  //   app2.style.transition = "opacity 3s";
  //   app2.style.opacity = "1";
  // }, []);

  const scrollHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    window.history.replaceState({}, "", `?scrollTop=${scrollTop}`);
  };
  useLayoutEffect(() => {
    const container = document.getElementById("container") as HTMLDivElement;
    const top = window.location.search.split("=")[1];
    container.scrollTop = Number(top) || 0;
  });
  return (
    <div>
      {/* <div>app </div>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{index}</div>
      ))} */}

      {/* <div
        id="app1"
        style={{ opacity: 0, width: 200, height: 200, background: "red" }}
      >
        app1
      </div>
      <div
        id="app2"
        style={{
          opacity: 0,
          width: 200,
          height: 200,
          background: "blue",
          marginTop: 20,
          position: "absolute",
          top: 230,
        }}
      >
        app2
      </div> */}

      <div
        id="container"
        onScroll={scrollHandler}
        style={{ height: "500px", overflow: "auto" }}
      >
        {Array.from({ length: 500 }).map((item, index) => {
          return <div key={index}>{index + 1}</div>;
        })}
      </div>
    </div>
  );
};
export default UseLayoutEffect;
