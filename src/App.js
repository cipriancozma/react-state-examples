import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import MainArea from "./components/MainArea";
import Sidebar from "./components/Sidebar";
import AppContext from "./AppContext";
import MemoizedExtraFooter from "./components/ExtraFooterTest";

function App() {

  const [size, setSize] = useState(15);
  const [color, setColor] = useState("green");
  const [likeCount, setLikeCount] = useState(0);

  return (
    <AppContext.Provider value={{color, size, setSize, setColor, setLikeCount, likeCount}}>
      <div className="grid-parent">
        <div className="header">
          <h1>Welcome To Our App</h1>
          <p>The current size is {size} and the current color is {color}.</p>
          <p>
            This page has been liked <strong>{likeCount}</strong> times.
          </p>
        </div>
        <Sidebar />
        <MainArea />
        <Footer />
        <MemoizedExtraFooter />
      </div>
    </AppContext.Provider>

  );
}

export default App;
