import { useState } from "react";
import { useImmer } from "use-immer";
import "./App.css";

function App() {
  const [obj, setObj] = useImmer({
    count: 0,
  });

  return <div className="App"></div>;
}

export default App;
