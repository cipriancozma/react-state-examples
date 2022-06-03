import React, { useContext } from "react";
import AppContext from "../AppContext";

function Sidebar() {
  const { color, setColor, size, setSize } = useContext(AppContext);

  return (
    <div className="sidebar">
      <input type="text" value={size} onChange={(e) => setSize(e.target.value)}/>
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
      <button onClick={() => {
          setSize(20)
          setColor("pink")
      }}>Make the text 20px and pink</button>
    </div>
  );
}

export default Sidebar;
