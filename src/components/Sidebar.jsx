import React, { useContext } from "react";
import AppContext from "../AppContext";
import DispatchContext from "../DispatchContext";

function Sidebar() {
    const state = useContext(AppContext);
    const dispatch = useContext(DispatchContext);

  return (
    <div className="sidebar">
      <input type="text" value={state.size} onChange={(e) => dispatch({type: "CHANGE_SIZE", value: e.target.value})}/>
      <input type="text" value={state.color} onChange={(e) => dispatch({ type: "CHANGE_COLOR", value: e.target.value })}/>
      <button onClick={() => dispatch({
          type: "CHANGE_COLOR_SIZE",
          value: { color: "pink", size: 20 }
      })}>Make the text 20px and pink</button>
    </div>
  );
}

export default Sidebar;
