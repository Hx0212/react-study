import { useImmer } from "use-immer";
import { createContext, useState } from "react";
import Parent from "./parent.tsx";
import { ThemeContext } from "./UseContext/ThemeContext.tsx";

const UseContext = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div>UseContext的使用[用于处理子孙、兄弟节点之间的状态共享]</div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        切换主题
      </button>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Parent />
      </ThemeContext.Provider>
    </>
  );
};

export default UseContext;
