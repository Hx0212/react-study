import Child from "./child.tsx";
import { useContext } from "react";
import { ThemeContext } from "./UseContext/ThemeContext.tsx";

const Parent = () => {
  const themeContext = useContext(ThemeContext);
  const styles = {
    backgroundColor: themeContext.theme === "light" ? "white" : "black",
    border: "1px solid red",
    width: 100 + "px",
    height: 100 + "px",
    color: themeContext.theme === "light" ? "black" : "white",
  };
  return (
    <>
      <div style={styles}>我是兄弟组件</div>
      <Child />
    </>
  );
};

export default Parent;
