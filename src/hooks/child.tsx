import { useState, useImperativeHandle, forwardRef } from "react";
import { useContext } from "react";
import { ThemeContext } from "./UseContext/ThemeContext.tsx";
interface ChildRef {
  name: string;
  count: number;
  increment: () => void;
  decrement: () => void;
  isVaild: () => void;
  reset: () => void;
}

//React18.2
// const Child = forwardRef<ChildRef, {}>((props, ref) => {
////React19
const Child = ({ ref }: { ref?: React.RefObject<ChildRef | null> }) => {
  const themeContext = useContext(ThemeContext);
  const styles = {
    backgroundColor: themeContext.theme === "light" ? "white" : "black",
    border: "1px solid red",
    width: 500 + "px",
    height: 500 + "px",
    color: themeContext.theme === "light" ? "black" : "white",
  };

  const [count, setCount] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const isVaild = () => {
    if (!form.name || !form.email || !form.phone) {
      return "请填写完整信息";
    }
    return "验证通过";
  };
  const reset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
    });
  };

  useImperativeHandle(ref, () => ({
    name: "child",
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
    isVaild,
    reset,
  }));

  return (
    <>
      <div style={styles}>
        <h2>我是子组件</h2>
        <div>count: {count}</div>
        <button onClick={() => setCount(count + 1)}>增加</button>
        <button onClick={() => setCount(count - 1)}>减少</button>
        <h3>组件使用</h3>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="text"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>
    </>
  );
};

export default Child;
